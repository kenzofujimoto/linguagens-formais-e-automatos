(function(){
  const data = window.LFA_SITE_DATA;
  if(!data) return;

  const colorMap = {
    cyan:'#22c8d8', blue:'#4f8cff', green:'#1db77f', orange:'#f5a524',
    purple:'#a77cff', red:'#ef4b4b', yellow:'#fcd34d'
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  let railController = null;
  const el = (tag, attrs={}, children=[]) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key,value]) => {
      if(key === 'class') node.className = value;
      else if(key === 'html') node.innerHTML = value;
      else node.setAttribute(key, value);
    });
    children.forEach(child => {
      if(typeof child === 'string') node.append(child);
      else node.append(child);
    });
    return node;
  };

  function basePrefix(){
    const path = location.pathname.replace(/\\/g,'/');
    return path.includes('/teoria/') || path.includes('/exercicios/') ? '../' : '';
  }

  function slugLabel(slug){
    const topic = data.theoryTopics.find(item => item.slug === slug);
    return topic ? topic.title : slug;
  }

  /* ── SVG helpers ── */
  function makeSvg(tag, attrs){
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([key,value]) => node.setAttribute(key, value));
    return node;
  }

  /* ── Automaton ViewBox ── */
  function fitAutomatonViewBox(states){
    if(!states || !states.length) return {viewBox:'0 0 720 380', width:720, height:380};
    const xs = states.map(s => Number(s.x)).filter(Number.isFinite);
    const ys = states.map(s => Number(s.y)).filter(Number.isFinite);
    if(!xs.length || !ys.length) return {viewBox:'0 0 720 380', width:720, height:380};
    const padding = 80;
    const minX = Math.min(...xs) - padding;
    const minY = Math.min(...ys) - padding;
    const width = Math.max(300, Math.max(...xs) - Math.min(...xs) + padding * 2);
    const height = Math.max(240, Math.max(...ys) - Math.min(...ys) + padding * 2);
    return { viewBox: `${minX} ${minY} ${width} ${height}`, width, height };
  }

  /* ── Render Automaton SVG ── */
  function renderAutomaton(container, automaton, options={}){
    container.innerHTML = '';
    if(!automaton || !automaton.states) return;

    const states = automaton.states || [];
    const transitions = automaton.transitions || [];
    const byId = Object.fromEntries(states.map(s => [s.id, s]));
    const activeStates = new Set(options.activeStates || []);
    const activeTransitions = new Set(options.activeTransitions || []);

    const bounds = fitAutomatonViewBox(states);
    const svg = makeSvg('svg', {viewBox: bounds.viewBox, role:'img', preserveAspectRatio:'xMidYMid meet'});
    svg.style.setProperty('--graph-ratio', `${bounds.width} / ${bounds.height}`);

    const uid = Math.random().toString(16).slice(2);
    const defs = makeSvg('defs', {});

    // Arrow markers
    const markerNormal = makeSvg('marker', {id:`arr-${uid}`, viewBox:'0 0 10 10', refX:'10', refY:'5', markerWidth:'6', markerHeight:'6', orient:'auto-start-reverse'});
    markerNormal.append(makeSvg('path', {d:'M 0 0 L 10 5 L 0 10 z', fill:'#6b7fa0'}));
    const markerActive = makeSvg('marker', {id:`arr-act-${uid}`, viewBox:'0 0 10 10', refX:'10', refY:'5', markerWidth:'7', markerHeight:'7', orient:'auto-start-reverse'});
    markerActive.append(makeSvg('path', {d:'M 0 0 L 10 5 L 0 10 z', fill:'#22c8d8'}));
    defs.append(markerNormal, markerActive);
    svg.append(defs);

    const R = 24; // state radius

    // Draw initial arrow for initial states
    states.forEach(state => {
      if(state.initial){
        const ax = state.x - R - 30;
        const ay = state.y;
        const line = makeSvg('line', {
          x1: ax, y1: ay, x2: state.x - R - 2, y2: ay,
          stroke: activeStates.has(state.id) ? '#22c8d8' : '#6b7fa0',
          'stroke-width': '2.5',
          'marker-end': `url(#${activeStates.has(state.id) ? `arr-act-${uid}` : `arr-${uid}`})`
        });
        svg.append(line);
      }
    });

    // Group transitions by (from, to) to handle multiple labels
    const transGroups = {};
    transitions.forEach(t => {
      const key = `${t.from}→${t.to}`;
      if(!transGroups[key]) transGroups[key] = {from:t.from, to:t.to, labels:[], ids:[]};
      transGroups[key].labels.push(t.label || '');
      transGroups[key].ids.push(t.id);
    });

    // Draw transitions
    Object.values(transGroups).forEach(group => {
      const s1 = byId[group.from], s2 = byId[group.to];
      if(!s1 || !s2) return;
      const isActive = group.ids.some(id => activeTransitions.has(id));
      const stroke = isActive ? '#22c8d8' : '#40516a';
      const sw = isActive ? '3.5' : '2';
      const marker = isActive ? `arr-act-${uid}` : `arr-${uid}`;
      const combinedLabel = group.labels.join(', ');

      if(group.from === group.to){
        // Self-loop
        const cx = s1.x, cy = s1.y;
        const loopR = 28;
        const path = makeSvg('path', {
          d: `M ${cx - 14} ${cy - R} C ${cx - 14} ${cy - R - loopR*1.6}, ${cx + 14} ${cy - R - loopR*1.6}, ${cx + 14} ${cy - R}`,
          fill:'none', stroke, 'stroke-width':sw,
          'marker-end': `url(#${marker})`
        });
        svg.append(path);
        // Label above loop
        const labelText = makeSvg('text', {
          x: cx, y: cy - R - loopR*1.2 - 4,
          'text-anchor':'middle',
          class: isActive ? 'svg-label transition-active' : 'svg-label'
        });
        labelText.textContent = combinedLabel;
        svg.append(labelText);
      } else {
        // Check if reverse transition exists for curve offset
        const reverseKey = `${group.to}→${group.from}`;
        const hasReverse = transGroups[reverseKey] !== undefined;

        const dx = s2.x - s1.x;
        const dy = s2.y - s1.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const ndx = dx/dist, ndy = dy/dist;

        // Offset start/end by radius
        const x1 = s1.x + ndx * R;
        const y1 = s1.y + ndy * R;
        let x2 = s2.x - ndx * (R + 4);
        let y2 = s2.y - ndy * (R + 4);

        if(hasReverse){
          // Para curvas, recuamos um pouco mais o ponto final para a ponta da seta não colidir
          x2 = s2.x - ndx * (R + 9);
          y2 = s2.y - ndy * (R + 9);

          // Curved line com curvatura ampliada para afastar transições de ida e volta
          const perpX = -ndy * 36;
          const perpY = ndx * 36;
          const midX = (x1+x2)/2 + perpX;
          const midY = (y1+y2)/2 + perpY;
          const path = makeSvg('path', {
            d: `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`,
            fill:'none', stroke, 'stroke-width':sw,
            'marker-end': `url(#${marker})`
          });
          svg.append(path);
          // Label at curve midpoint
          const labelX = (x1 + 2*midX + x2) / 4;
          const labelY = (y1 + 2*midY + y2) / 4 - 6;
          const lRect = makeSvg('rect', {x:labelX-20, y:labelY-11, width:'40', height:'18', rx:'5', fill:'#0a1020', opacity:'.88'});
          const lText = makeSvg('text', {x:labelX, y:labelY+3, 'text-anchor':'middle', class: isActive ? 'svg-label transition-active' : 'svg-label'});
          lText.textContent = combinedLabel;
          svg.append(lRect, lText);
        } else {
          // Straight line
          const line = makeSvg('line', {
            x1, y1, x2, y2,
            stroke, 'stroke-width':sw, 'stroke-linecap':'round',
            'marker-end': `url(#${marker})`
          });
          svg.append(line);
          // Label at midpoint
          const labelX = (x1+x2)/2;
          const labelY = (y1+y2)/2;
          const perpOff = 14;
          const lx = labelX - ndy * perpOff;
          const ly = labelY + ndx * perpOff - 2;
          const lRect = makeSvg('rect', {x:lx-20, y:ly-11, width:'40', height:'18', rx:'5', fill:'#0a1020', opacity:'.88'});
          const lText = makeSvg('text', {x:lx, y:ly+3, 'text-anchor':'middle', class: isActive ? 'svg-label transition-active' : 'svg-label'});
          lText.textContent = combinedLabel;
          svg.append(lRect, lText);
        }
      }
    });

    // Draw states
    states.forEach(state => {
      const isActive = activeStates.has(state.id);
      const fill = isActive ? '#22c8d8' : '#1d2838';
      const strokeColor = state.accepting ? '#22c8d8' : isActive ? '#fff' : 'rgba(255,255,255,.22)';
      const sw = state.accepting || isActive ? '2.5' : '1.5';

      // Outer circle
      const circle = makeSvg('circle', {
        cx:state.x, cy:state.y, r:R.toString(),
        fill, stroke:strokeColor, 'stroke-width':sw
      });
      svg.append(circle);

      // Double circle for accepting states
      if(state.accepting){
        const inner = makeSvg('circle', {
          cx:state.x, cy:state.y, r:(R-5).toString(),
          fill:'none', stroke:strokeColor, 'stroke-width':'1.5'
        });
        svg.append(inner);
      }

      // State label
      const text = makeSvg('text', {
        x:state.x, y:state.y + 5,
        'text-anchor':'middle',
        class:'svg-label',
        fill: isActive ? '#07110d' : '#eaf2ff'
      });
      text.textContent = state.id;
      svg.append(text);
    });

    container.append(svg);
  }

  /* ── Render Tape (Turing Machine) ── */
  function renderTape(container, tape, headPos){
    container.innerHTML = '';
    if(!tape || !tape.length) return;
    const wrap = el('div', {class:'tape-display'});
    tape.forEach((symbol, i) => {
      const cell = el('div', {class: 'tape-cell' + (i === headPos ? ' head' : '')});
      cell.textContent = symbol === '_' ? '⊔' : symbol;
      wrap.append(cell);
    });
    container.append(wrap);
  }

  /* ── Render Stack (PDA) ── */
  function renderStack(container, stack){
    container.innerHTML = '';
    if(!stack || !stack.length) return;
    const wrap = el('div', {class:'stack-display'});
    // Show top to bottom
    [...stack].reverse().forEach((symbol, i) => {
      const cell = el('div', {class: 'stack-cell' + (i === 0 ? ' top' : '')});
      cell.textContent = symbol;
      wrap.append(cell);
    });
    container.append(wrap);
  }

  /* ── Render Input String ── */
  function renderInput(container, input, position){
    container.innerHTML = '';
    if(!input && input !== '') return;
    const wrap = el('div', {class:'tape-display input-display'});
    const chars = input.split('');
    if(!chars.length){
      const cell = el('div', {class:'tape-cell head'});
      cell.textContent = 'ε';
      wrap.append(cell);
    } else {
      chars.forEach((ch, i) => {
        const cell = el('div', {class: 'tape-cell' + (i === position ? ' head' : i < position ? ' read' : '')});
        cell.textContent = ch;
        wrap.append(cell);
      });
    }
    container.append(wrap);
  }

  /* ── Render Grammar ── */
  function renderGrammar(container, grammar){
    container.innerHTML = '';
    if(!grammar) return;
    const wrap = el('div', {class:'grammar-display'});
    if(grammar.productions){
      grammar.productions.forEach(prod => {
        const line = el('div', {class:'grammar-rule'});
        line.innerHTML = `<span class="non-terminal">${prod.left}</span> → <span class="production-body">${prod.right.join(' | ')}</span>`;
        wrap.append(line);
      });
    }
    container.append(wrap);
  }

  /* ── Render Derivation Tree SVG ── */
  function renderTree(container, tree){
    container.innerHTML = '';
    if(!tree || !tree.nodes) return;

    const nodes = tree.nodes || [];
    const edges = tree.edges || [];
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

    const svg = makeSvg('svg', {viewBox: '0 0 720 320', role:'img', preserveAspectRatio:'xMidYMid meet'});

    // Draw edges
    edges.forEach(edge => {
      const parent = byId[edge.from];
      const child = byId[edge.to];
      if(!parent || !child) return;

      const path = makeSvg('line', {
        x1: parent.x, y1: parent.y,
        x2: child.x, y2: child.y,
        class: 'tree-edge'
      });
      svg.append(path);
    });

    // Draw nodes
    nodes.forEach(node => {
      const isTerminal = node.type === 'terminal';
      const R = 20;
      let shape;

      if(isTerminal){
        shape = makeSvg('rect', {
          x: node.x - R, y: node.y - R,
          width: R * 2, height: R * 2,
          class: 'tree-node terminal'
        });
      } else {
        shape = makeSvg('circle', {
          cx: node.x, cy: node.y, r: R,
          class: 'tree-node nonterminal'
        });
      }

      svg.append(shape);

      const text = makeSvg('text', {
        x: node.x, y: node.y + 4,
        'text-anchor':'middle',
        class: 'tree-label'
      });
      text.textContent = node.label;
      svg.append(text);
    });

    container.append(svg);
  }


  /* ── Rail toggle ── */
  function initRailToggle(){
    const layout = $('[data-sidebar-layout]');
    const toggle = $('[data-sidebar-toggle]');
    if(!layout || !toggle) return;
    const rail = document.getElementById(toggle.getAttribute('aria-controls'));
    if(!rail) return;
    const storageKey = `${document.body.dataset.view || 'site'}-rail-collapsed`;
    const isMobileRail = () => window.matchMedia('(max-width: 920px)').matches;
    const setCollapsed = collapsed => {
      layout.classList.toggle('rail-collapsed', collapsed);
      rail.classList.toggle('is-collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('title', collapsed ? 'Expandir menu' : 'Recolher menu');
      try { localStorage.setItem(storageKey, collapsed ? '1' : '0'); } catch(e) {}
    };
    let stored = null;
    try { stored = localStorage.getItem(storageKey); } catch(e) {}
    const initial = stored === null ? isMobileRail() : stored === '1';
    setCollapsed(initial);
    toggle.addEventListener('click', () => setCollapsed(!rail.classList.contains('is-collapsed')));
    railController = {setCollapsed, isMobileRail};
  }

  function collapseRailOnMobile(){
    if(railController && railController.isMobileRail()) railController.setCollapsed(true);
  }

  /* ── Render Animation ── */
  function renderAnimation(animationId){
    const animation = data.animations[animationId];
    if(!animation) return el('div');
    const card = el('article', {class:'visual-card'});
    card.append(el('h3', {html:animation.title}));

    const box = el('div', {class:'graph-box'});
    const tapeBox = el('div', {class:'tape-container'});
    const stackBox = el('div', {class:'stack-container'});
    const inputBox = el('div', {class:'input-container'});
    const grammarBox = el('div', {class:'grammar-container'});
    const text = el('div', {class:'step-text'});
    const controls = el('div', {class:'step-controls'});
    const prev = el('button', {type:'button'}, ['Anterior']);
    const count = el('span');
    const next = el('button', {type:'button'}, ['Próximo']);
    controls.append(prev, count, next);

    card.append(inputBox, box, tapeBox, stackBox, grammarBox, text, controls);

    const steps = animation.steps && animation.steps.length ? animation.steps : [{title:animation.title, text:animation.summary || ''}];
    let index = 0;

    const draw = () => {
      const step = steps[index];
      const auto = step.automaton || animation.automaton;
      const tree = step.tree || animation.tree;

      if(tree){
        box.className = 'derivation-tree';
        renderTree(box, tree);
      } else if(auto){
        box.className = 'graph-box';
        renderAutomaton(box, auto, {
          activeStates: step.activeStates || [],
          activeTransitions: step.activeTransitions || []
        });
      } else {
        box.className = 'graph-box';
        box.innerHTML = '';
      }

      if(step.input !== undefined){
        renderInput(inputBox, step.input, step.inputPosition || 0);
      } else {
        inputBox.innerHTML = '';
      }

      if(step.tape){
        renderTape(tapeBox, step.tape, step.headPosition || 0);
      } else {
        tapeBox.innerHTML = '';
      }

      if(step.stack){
        renderStack(stackBox, step.stack);
      } else {
        stackBox.innerHTML = '';
      }

      if(step.grammar){
        renderGrammar(grammarBox, step.grammar);
      } else {
        grammarBox.innerHTML = '';
      }

      text.innerHTML = `<strong>${step.title}</strong><br>${step.text}`;
      count.textContent = `${index + 1} / ${steps.length}`;
      prev.disabled = index === 0;
      next.disabled = index === steps.length - 1;
    };

    prev.addEventListener('click', () => { index = Math.max(0, index - 1); draw(); });
    next.addEventListener('click', () => { index = Math.min(steps.length - 1, index + 1); draw(); });
    draw();
    return card;
  }

  /* ── Home ── */
  function renderHome(){
    const statsEl = $('#homeStats');
    if(statsEl) {
      statsEl.innerHTML = [
        `<div class="stat"><strong>${data.theoryTopics.length}</strong><span>tópicos/aulas</span></div>`,
        `<div class="stat"><strong>${data.exercises.length}</strong><span>exercícios</span></div>`,
        `<div class="stat"><strong>${Object.keys(data.animations).length}</strong><span>animações</span></div>`
      ].join('');
    }

    const prefix = basePrefix();
    const topicGrid = $('#homeTopicGrid');
    if(topicGrid) {
      topicGrid.innerHTML = data.theoryTopics.map(topic => `
        <a class="topic-card" href="${prefix}teoria/index.html#${topic.slug}">
          <small>${topic.sourcePdf}</small>
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
        </a>
      `).join('');
    }

    const animGrid = $('#homeAnimationGrid');
    if(animGrid) {
      animGrid.innerHTML = Object.entries(data.animations).slice(0,6).map(([id,animation]) => `
        <a class="animation-card" href="${prefix}teoria/index.html#${data.theoryTopics.find(topic => topic.animations.includes(id))?.slug || data.theoryTopics[0].slug}">
          <span class="tag">animação</span>
          <h3>${animation.title}</h3>
          <p>${animation.steps?.[0]?.text || 'Visualização interativa do conceito.'}</p>
        </a>
      `).join('');
    }
  }

  /* ── Theory ── */
  function renderTheory(){
    const tabs = $('#theoryTabs');
    const content = $('#theoryContent');
    const select = slug => {
      const topic = data.theoryTopics.find(item => item.slug === slug) || data.theoryTopics[0];
      location.hash = topic.slug;
      [...tabs.children].forEach(button => button.classList.toggle('active', button.dataset.slug === topic.slug));
      content.innerHTML = '';

      const header = el('article', {class:'content-card'});
      header.append(el('span', {class:'source'}, [`Fonte: ${topic.sourcePdf}`]));
      header.append(el('h2', {html:topic.title}));
      header.append(el('p', {html:topic.summary}));

      topic.sections.forEach(section => {
        header.append(el('h3', {html:section.heading}));
        header.append(el('p', {html:section.body}));
      });
      content.append(header);

      const visualWrap = el('div', {class:'visual-grid'});
      topic.animations.forEach(id => visualWrap.append(renderAnimation(id)));
      content.append(visualWrap);
    };

    tabs.innerHTML = '';
    data.theoryTopics.forEach(topic => {
      const button = el('button', {type:'button', 'data-slug':topic.slug}, [topic.title]);
      button.addEventListener('click', () => {
        select(topic.slug);
        collapseRailOnMobile();
      });
      tabs.append(button);
    });

    select((location.hash || '').replace('#','') || data.theoryTopics[0].slug);
    window.addEventListener('hashchange', () => select((location.hash || '').replace('#','')));
  }

  /* ── Exercises ── */
  function renderExercises(){
    const filters = $('#exerciseFilters');
    const list = $('#exerciseList');
    const topicsWithExercises = data.theoryTopics.filter(topic => data.exercises.some(ex => ex.topicSlug === topic.slug));
    let currentSlug = 'todos';

    const scrollToExercise = exerciseId => {
      if(!exerciseId) return;
      requestAnimationFrame(() => {
        const card = $(`[data-exercise-id="${CSS.escape(exerciseId)}"]`, list);
        if(card) card.scrollIntoView({behavior:'smooth', block:'start'});
      });
    };

    const render = (slug, targetExerciseId='') => {
      currentSlug = slug;
      [...filters.children].forEach(button => button.classList.toggle('active', button.dataset.slug === slug));
      const exercises = slug === 'todos' ? data.exercises : data.exercises.filter(ex => ex.topicSlug === slug);
      list.innerHTML = '';

      exercises.forEach(exercise => {
        const card = el('article', {class:'exercise-card', 'data-exercise-id':exercise.id});
        const head = el('div', {class:'exercise-head'});
        head.append(el('div', {html:`<span class="source">${exercise.sourcePdf}${exercise.page ? `, p. ${exercise.page}` : ''}</span><h3>${exercise.title}</h3><p>${slugLabel(exercise.topicSlug)}</p>`}));
        head.append(el('span', {class:'tag'}, [exercise.id]));

        const body = el('div', {class:'exercise-body'});
        const prompt = el('div');
        prompt.append(el('h3', {}, ['Enunciado']));
        prompt.append(el('p', {class:'prompt'}, [exercise.prompt]));

        if(exercise.questions && exercise.questions.length){
          const questions = el('ol', {class:'question-list'});
          exercise.questions.forEach(q => questions.append(el('li', {}, [q])));
          prompt.append(questions);
        }

        // Render automaton from exercise prompt
        if(exercise.automaton){
          const autoWrap = el('div', {class:'solution-graph'});
          autoWrap.append(el('h4', {}, ['Autômato fornecido']));
          const autoBox = el('div', {class:'graph-box'});
          renderAutomaton(autoBox, exercise.automaton);
          autoWrap.append(autoBox);
          prompt.append(autoWrap);
        }

        // Render grammar from exercise prompt
        if(exercise.grammar){
          const gramWrap = el('div', {class:'solution-graph'});
          gramWrap.append(el('h4', {}, ['Gramática fornecida']));
          renderGrammar(gramWrap, exercise.grammar);
          prompt.append(gramWrap);
        }

        const solutionId = `solution-${exercise.id}`;
        const solutionToggle = el('button', {
          type:'button', class:'button solution-toggle',
          'data-solution-toggle':exercise.id,
          'aria-controls':solutionId, 'aria-expanded':'false'
        }, ['Mostrar resolução']);

        body.append(prompt, solutionToggle);

        const solution = el('div', {class:'solution', id:solutionId});
        solution.hidden = true;
        solution.append(el('h3', {}, ['Resolução']));
        solution.append(el('p', {html:exercise.solution}));

        // Render solution automaton with animation steps
        if(exercise.solutionAutomaton){
          const solAutoWrap = el('div', {class:'solution-graph'});
          solAutoWrap.append(el('h4', {}, ['Autômato da resolução']));
          const solAutoBox = el('div', {class:'graph-box'});
          renderAutomaton(solAutoBox, exercise.solutionAutomaton);
          solAutoWrap.append(solAutoBox);
          solution.append(solAutoWrap);
        }

        if(exercise.solutionSteps && exercise.solutionSteps.length){
          const animWrap = el('div', {class:'solution-graph'});
          animWrap.append(el('h4', {}, ['Simulação passo a passo']));
          const animBox = el('div', {class:'graph-box'});
          const animInput = el('div', {class:'input-container'});
          const animText = el('div', {class:'step-text'});
          const animControls = el('div', {class:'step-controls'});
          const animPrev = el('button', {type:'button'}, ['Anterior']);
          const animCount = el('span');
          const animNext = el('button', {type:'button'}, ['Próximo']);
          animControls.append(animPrev, animCount, animNext);
          animWrap.append(animInput, animBox, animText, animControls);

          let si = 0;
          const drawStep = () => {
            const step = exercise.solutionSteps[si];
            const auto = step.automaton || exercise.solutionAutomaton || exercise.automaton;
            if(auto){
              renderAutomaton(animBox, auto, {
                activeStates: step.activeStates || [],
                activeTransitions: step.activeTransitions || []
              });
            }
            if(step.input !== undefined){
              renderInput(animInput, step.input, step.inputPosition || 0);
            }
            animText.innerHTML = `<strong>${step.title}</strong><br>${step.text}`;
            animCount.textContent = `${si + 1} / ${exercise.solutionSteps.length}`;
            animPrev.disabled = si === 0;
            animNext.disabled = si === exercise.solutionSteps.length - 1;
          };
          animPrev.addEventListener('click', () => { si = Math.max(0, si - 1); drawStep(); });
          animNext.addEventListener('click', () => { si = Math.min(exercise.solutionSteps.length - 1, si + 1); drawStep(); });
          drawStep();
          solution.append(animWrap);
        }

        solutionToggle.addEventListener('click', () => {
          const willShow = solutionToggle.getAttribute('aria-expanded') !== 'true';
          solution.hidden = !willShow;
          solutionToggle.setAttribute('aria-expanded', String(willShow));
          solutionToggle.textContent = willShow ? 'Ocultar resolução' : 'Mostrar resolução';
          if(willShow) requestAnimationFrame(() => solution.scrollIntoView({behavior:'smooth', block:'nearest'}));
        });

        card.append(head, body, solution);
        list.append(card);
      });
      scrollToExercise(targetExerciseId);
    };

    const selectExerciseFromHash = () => {
      const hash = decodeURIComponent((location.hash || '').replace('#',''));
      if(!hash){ render(currentSlug || 'todos'); return false; }
      const exercise = data.exercises.find(item => item.id === hash);
      if(exercise){ render(exercise.topicSlug, exercise.id); return true; }
      const topic = data.theoryTopics.find(item => item.slug === hash);
      if(topic && data.exercises.some(ex => ex.topicSlug === topic.slug)){ render(topic.slug); return true; }
      if(hash === 'todos'){ render('todos'); return true; }
      render('todos');
      return false;
    };

    filters.innerHTML = '';
    const all = el('button', {type:'button', 'data-slug':'todos'}, ['Todos']);
    all.addEventListener('click', () => { location.hash = 'todos'; render('todos'); collapseRailOnMobile(); });
    filters.append(all);

    topicsWithExercises.forEach(topic => {
      const button = el('button', {type:'button', 'data-slug':topic.slug}, [topic.title]);
      button.addEventListener('click', () => { location.hash = topic.slug; render(topic.slug); collapseRailOnMobile(); });
      filters.append(button);
    });

    if(!selectExerciseFromHash()) render('todos');
    window.addEventListener('hashchange', selectExerciseFromHash);
  }

  /* ── Init ── */
  const view = document.body.dataset.view;
  initRailToggle();
  if(view === 'home') renderHome();
  if(view === 'theory') renderTheory();
  if(view === 'exercises') renderExercises();
})();
