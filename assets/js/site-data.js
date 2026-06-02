/**
 * Linguagens Formais e Autômatos – site-data.js
 * Banco de dados estático contendo Teoria (19 tópicos), Animações Interativas (15) e Exercícios Resolvidos (23).
 */

window.LFA_SITE_DATA = {
  theoryTopics: [
    {
      slug: "conceitos-basicos",
      title: "1. Conceitos Básicos de LFA",
      sourcePdf: "Aula01.pdf",
      summary: "Introdução à teoria da computação, modelos computacionais formais e a relação fundamental entre linguagens formais e algoritmos.",
      sections: [
        {
          heading: "O que é um Modelo Computacional?",
          body: "Um modelo computacional é uma representação matemática e abstração de um sistema de computação. Ao longo desta disciplina, estudaremos diferentes modelos que variam de poder computacional (capacidade de resolver problemas). O objetivo principal é classificar quais problemas podem ser resolvidos por quais máquinas e, fundamentalmente, compreender o limite da própria computação moderna por meio do modelo mais poderoso: a Máquina de Turing."
        },
        {
          heading: "Linguagens Formais como Problemas",
          body: "Na teoria da computação, um 'problema' é formalizado como uma Linguagem (um conjunto de palavras formadas sobre um alfabeto). Resolver um problema significa projetar uma máquina que decide se uma dada entrada (palavra) pertence ou não a essa linguagem. Assim, estudar a capacidade de uma máquina de aceitar certas linguagens é equivalente a estudar a capacidade de computadores de resolver problemas específicos."
        },
        {
          heading: "Autômatos e Algoritmos",
          body: "Um autômato é uma abstração matemática que recebe uma palavra de entrada e muda de estado conforme regras de transição precisas. Ele funciona como uma especificação exata de um algoritmo de reconhecimento. Se o autômato processa a palavra inteira e termina em um estado de aceitação designado, dizemos que ele reconhece ou aceita a palavra. A hierarquia dos autômatos (Finitos, de Pilha, Turing) dita a complexidade das tarefas que conseguimos automatizar."
        }
      ],
      animations: ["afdSimulation", "afdSimulationRejeicao"]
    },
    {
      slug: "teoria-conjuntos-linguagens",
      title: "2. Teoria dos Conjuntos e Linguagens",
      sourcePdf: "Aula02.pdf",
      summary: "Revisão matemática essencial de conjuntos, relações, alfabetos, concatenação de palavras e a definição formal de Linguagem sobre um alfabeto.",
      sections: [
        {
          heading: "Alfabetos e Palavras",
          body: "Um alfabeto (denotado por Σ) é um conjunto finito e não-vazio de símbolos. Exemplos comuns incluem Σ = {0, 1} (binário) e Σ = {a, b} ou o alfabeto latino tradicional. Uma palavra (ou string) sobre um alfabeto Σ é uma sequência finita de símbolos escolhidos de Σ. O comprimento de uma palavra w, denotado por |w|, é a quantidade de símbolos que ela contém. A palavra vazia, que não possui símbolos e tem comprimento 0, é representada por epsilon (ε)."
        },
        {
          heading: "O Fecho de Kleene (Σ*)",
          body: "A notação Σ* (sigma estrela) representa o conjunto de todas as palavras possíveis que podem ser formadas com os símbolos do alfabeto Σ, incluindo a palavra vazia ε. Σ* é sempre um conjunto infinito enumerável para qualquer alfabeto não-vazio. Por exemplo, se Σ = {0, 1}, então Σ* = {ε, 0, 1, 00, 01, 10, 11, ...}. Uma Linguagem L sobre Σ é simplesmente um subconjunto de Σ* (L ⊆ Σ*)."
        },
        {
          heading: "Operações Clássicas com Palavras",
          body: "Dadas duas palavras u e v, a operação mais comum é a concatenação (uv), que junta os símbolos de u com os de v. A palavra vazia ε atua como elemento neutro: uε = εu = u. Outra operação importante é a reversão de uma palavra, denotada por w^R, que inverte a ordem dos caracteres. Por exemplo, se w = 'computador', w^R = 'rodatupmoc'. Se w = w^R, a palavra é chamada de palíndromo."
        }
      ],
      animations: ["kleeneStar"]
    },
    {
      slug: "afd",
      title: "3. Autômatos Finitos Determinísticos (AFD)",
      sourcePdf: "Aula04.pdf e Aula05.pdf",
      summary: "Definição matemática rigorosa do AFD, a 5-tupla formal, diagramas de transição de estados e rastreamento de computação.",
      sections: [
        {
          heading: "A Definição Formal de AFD",
          body: "Um Autômato Finito Determinístico (AFD) é formalmente definido por uma 5-tupla M = (Q, Σ, δ, q₀, F), onde: Q é um conjunto finito e não-vazio de estados; Σ é o alfabeto de entrada; δ: Q × Σ → Q é a função de transição que mapeia o estado atual e o símbolo lido a um único próximo estado; q₀ ∈ Q é o estado inicial; e F ⊆ Q é o conjunto de estados de aceitação (finais). A natureza determinística vem do fato de que, para cada estado e símbolo lido, há exatamente UMA transição possível definida."
        },
        {
          heading: "Reconhecimento de Linguagens",
          body: "Dizemos que uma palavra w = w₁w₂...w_n é aceita pelo AFD se existe uma sequência de estados r₀, r₁, ..., r_n em Q tal que: 1. r₀ = q₀ (começa no estado inicial); 2. r_{i+1} = δ(r_i, w_{i+1}) para todo i de 0 a n-1 (segue as regras de transição); e 3. r_n ∈ F (termina em um estado de aceitação). A linguagem reconhecida pelo autômato M, denotada por L(M), é o conjunto de todas as palavras aceitas por M."
        },
        {
          heading: "Diagrama de Estados vs Tabela de Transição",
          body: "Existem duas formas principais de representar um AFD: graficamente por meio de um Diagrama de Estados (onde círculos representam estados, uma seta apontada sem origem indica o estado inicial, círculos duplos representam estados de aceitação, e setas rotuladas indicam transições) ou textualmente através de uma Tabela de Transições (onde as linhas representam estados, as colunas representam os símbolos do alfabeto, e as células indicam o próximo estado destino)."
        }
      ],
      animations: ["afdSimulation", "afdParidade"]
    },
    {
      slug: "operacoes-linguagens",
      title: "4. Operações com Linguagens Regulares",
      sourcePdf: "Aula05.pdf e Aula06.pdf",
      summary: "Como combinar e transformar linguagens através de operações regulares como União, Interseção, Concatenação e Fecho.",
      sections: [
        {
          heading: "As Operações Regulares",
          body: "As três operações regulares fundamentais aplicadas sobre linguagens são: 1. União (A ∪ B): o conjunto de palavras que pertencem a A, a B, ou a ambos; 2. Concatenação (A ∘ B ou AB): todas as palavras da forma xy onde x ∈ A e y ∈ B; 3. Fecho de Kleene (A*): todas as palavras formadas concatenando-se zero ou mais palavras de A. Uma das propriedades mais importantes da teoria é que a classe das linguagens regulares é fechada sob essas três operações."
        },
        {
          heading: "Fechamento sob União e Interseção",
          body: "Dizer que as linguagens regulares são fechadas sob uma operação significa que, se aplicarmos essa operação em linguagens regulares, o resultado também será uma linguagem regular. Para provar o fechamento sob União e Interseção, usamos a Construção de Produto Cartesiano de Estados. Se M₁ = (Q₁, Σ, δ₁, q₁, F₁) e M₂ = (Q₂, Σ, δ₂, q₂, F₂), construímos um novo autômato cujos estados são pares ordenados (q, r) de Q₁ × Q₂. Na União, o estado aceita se pelo menos um dos estados do par for de aceitação. Na Interseção, ambos precisam ser de aceitação."
        },
        {
          heading: "Outras Propriedades de Fechamento",
          body: "Linguagens regulares também são fechadas sob Complemento (Σ* - L) e Diferença (L₁ - L₂). O autômato para o complemento de L é obtido simplesmente invertendo o papel dos estados no AFD de L: todos os estados de aceitação tornam-se de não-aceitação, e vice-versa. Essa simplicidade extrema de inversão só é válida para Autômatos Determinísticos!"
        }
      ],
      animations: ["unionSimulation", "kleeneStar"]
    },
    {
      slug: "expressoes-regulares",
      title: "5. Expressões Regulares (ER)",
      sourcePdf: "Aula06.pdf e Aula07.pdf",
      summary: "A sintaxe formal das expressões regulares, equivalência com autômatos finitos e a importância prática na computação moderna.",
      sections: [
        {
          heading: "Definição Sintática e Semântica de ER",
          body: "Uma Expressão Regular (ER) é uma forma algébrica e concisa de descrever uma linguagem regular. Formalmente, R é uma expressão regular se R é: 1. um símbolo 'a' do alfabeto Σ (representa a linguagem {a}); 2. a constante ε (representa a linguagem {ε}); 3. o conjunto vazio ∅ (representa a linguagem vazia); 4. (R₁ ∪ R₂), união de duas ERs; 5. (R₁ ∘ R₂), concatenação; ou 6. (R₁*), fecho de Kleene."
        },
        {
          heading: "Teorema de Kleene",
          body: "O Teorema de Kleene é um marco na teoria da computação: ele estabelece que uma linguagem é regular se, e somente se, ela pode ser descrita por uma expressão regular. Isso prova a equivalência absoluta entre os AFDs (uma descrição operacional e de máquina) e as Expressões Regulares (uma descrição declarativa e algébrica). Qualquer autômato finito pode ser convertido em uma expressão regular equivalente, e vice-versa."
        },
        {
          heading: "Aplicações Práticas das Expressões Regulares",
          body: "Na prática do desenvolvimento de software, Expressões Regulares (geralmente sob a abreviação regex) são amplamente utilizadas para busca, substituição e validação de padrões de texto em editores de código, bancos de dados, interpretadores e compiladores (na fase de análise léxica). Embora as implementações modernas de regex incluam extensões que ultrapassam o poder das linguagens puramente regulares, a base teórica continua sendo os autômatos finitos."
        }
      ],
      animations: ["afdSimulation", "afdSimulationRejeicao"]
    },
    {
      slug: "afnd",
      title: "6. Autômatos Finitos Não-Determinísticos (AFND)",
      sourcePdf: "Aula08.pdf e Aula09.pdf",
      summary: "Exploração da não-determinação, transições vazias (epsilon) e a incrível capacidade de ramificação paralela da computação.",
      sections: [
        {
          heading: "O que é o Não-Determinismo?",
          body: "Em um Autômato Finito Não-Determinístico (AFND), a computação pode seguir múltiplos caminhos simultaneamente. A função de transição δ mapeia um estado e um símbolo de entrada para um subconjunto de estados possíveis, denotado por P(Q) (conjunto das partes de Q). Isso significa que, a partir de um estado, ao ler um símbolo, a máquina pode ir para zero, um ou vários estados ao mesmo tempo. Se houver pelo menos um caminho completo que termine em um estado de aceitação, a palavra de entrada é considerada aceita."
        },
        {
          heading: "Transições Epsilon (ε-transições)",
          body: "Uma característica extremamente poderosa do AFND é a capacidade de realizar ε-transições (transições vazias). Uma transição ε permite que a máquina mude de estado espontaneamente, sem ler nenhum caractere da fita de entrada. É como se a computação se ramificasse em novas possibilidades de forma totalmente assíncrona. As ε-transições simplificam imensamente o design de autômatos complexos."
        },
        {
          heading: "Poder de Reconhecimento",
          body: "Apesar de parecerem conceitualmente muito mais poderosos que os AFDs por sua habilidade de 'adivinhar' caminhos corretos e ramificar em paralelo, os AFNDs reconhecem exatamente a mesma classe de linguagens que os AFDs: as linguagens regulares. O não-determinismo não adiciona poder de computação em termos de quais problemas podem ser resolvidos, apenas simplifica a representação da lógica do reconhecedor."
        }
      ],
      animations: ["afndEpsilon", "afndEpsilonRejeicao"]
    },
    {
      slug: "conversao-afnd-afd",
      title: "7. Conversão AFND para AFD",
      sourcePdf: "Aula09.pdf e Aula10.pdf",
      summary: "Algoritmo de construção de subconjuntos para converter autômatos não-determinísticos em equivalentes determinísticos.",
      sections: [
        {
          heading: "O Algoritmo de Construção de Subconjuntos",
          body: "Para converter um AFND N = (Q_N, Σ, δ_N, q_0, F_N) em um AFD determinístico D equivalente, usamos a técnica da Construção de Subconjuntos (Subset Construction). Cada estado no AFD resultante D representa um conjunto de estados que o AFND N poderia ocupar simultaneamente em um determinado ponto da computação. Se o AFND original possui |Q| estados, o AFD equivalente pode ter, no pior caso, até 2^{|Q|} estados (uma explosão exponencial, embora na prática muitos estados sejam inacessíveis e possam ser descartados)."
        },
        {
          heading: "O Fecho Epsilon (E-closure)",
          body: "O conceito de Fecho Epsilon, denotado por E(q) ou ε-closure(S), é vital para a conversão de AFNDs com transições vazias. Para um conjunto de estados S, o fecho epsilon é o conjunto de todos os estados que podem ser alcançados a partir de qualquer estado em S seguindo exclusivamente zero ou mais transições ε. Ao definir o estado inicial do AFD resultante e computar as transições, devemos sempre aplicar o fecho epsilon para garantir que todas as ramificações espontâneas sejam rastreadas."
        },
        {
          heading: "Minimização de AFDs",
          body: "Uma vez obtido um AFD (seja diretamente ou por conversão), frequentemente desejamos encontrar o autômato equivalente com o menor número possível de estados. O processo de Minimização de AFD divide os estados em classes de equivalência com base em sua capacidade de distinguir palavras futuras. Estados redundantes ou funcionalmente idênticos são fundidos em um único estado, garantindo uma implementação eficiente com consumo mínimo de memória."
        }
      ],
      animations: ["afndToDfd"]
    },
    {
      slug: "lema-bombeamento-regular",
      title: "8. Lema do Bombeamento Regular",
      sourcePdf: "Aula11.pdf",
      summary: "A ferramenta teórica fundamental usada para provar matematicamente que certas linguagens não são regulares.",
      sections: [
        {
          heading: "Limitações dos Autômatos Finitos",
          body: "Como o próprio nome indica, autômatos finitos possuem uma memória estritamente finita (representada pelo seu número fixo de estados). Por causa dessa limitação, eles não conseguem manter a contagem de elementos arbitrários. Por exemplo, um AFD não consegue lembrar se leu um número qualquer de símbolos 'a' para depois exigir a mesma quantidade exata de 'b's (como na linguagem L = {a^n b^n | n ≥ 0}). Para formalizar essas limitações e provar que certas linguagens não são regulares, usamos o Lema do Bombeamento."
        },
        {
          heading: "Enunciado do Lema do Bombeamento",
          body: "O lema afirma que, se L é uma linguagem regular, então existe uma constante p (comprimento de bombeamento) tal que qualquer palavra s ∈ L com comprimento |s| ≥ p pode ser dividida em três partes s = xyz, satisfazendo as seguintes condições: 1. Para cada i ≥ 0, a palavra x y^i z também pertence a L; 2. |y| > 0 (a parte bombeada não é vazia); 3. |xy| ≤ p. A ideia básica é que, como a palavra é maior que o número de estados, o autômato deve repetir algum estado (princípio da casa dos pombos), formando um loop que pode ser percorrido qualquer número de vezes."
        },
        {
          heading: "Como Usar o Lema para Provas de Não-Regularidade",
          body: "Usamos o Lema do Bombeamento por meio de uma prova por contradição. Assumimos que a linguagem L é regular, o que significa que o lema se aplica. Então, escolhemos estrategicamente uma palavra s ∈ L cujo comprimento depende de p (por exemplo, s = a^p b^p). Mostramos que, não importa como dividimos s em xyz respeitando as regras (|xy| ≤ p e |y| > 0), ao 'bombear' a palavra para i = 2 (ou i = 0), a nova palavra x y^2 z resultante violará as propriedades de L. Isso gera uma contradição, provando que L não é regular."
        }
      ],
      animations: ["pumpingLemma"]
    },
    {
      slug: "gramaticas-livres-contexto",
      title: "9. Gramáticas Livres de Contexto (GLC)",
      sourcePdf: "Aula12.pdf e Aula13.pdf",
      summary: "Introdução às gramáticas formais, regras de produção sintática, árvores de derivação e o conceito de ambiguidade sintática.",
      sections: [
        {
          heading: "O que é uma Gramática Livre de Contexto?",
          body: "Uma Gramática Livre de Contexto (GLC) é um formalismo gerador muito mais poderoso que as expressões regulares. Ela descreve uma linguagem especificando como strings válidas podem ser construídas a partir de um símbolo inicial por meio de substituições recursivas. Formalmente, uma GLC é definida por uma 4-tupla G = (V, Σ, R, S), onde: V é um conjunto finito de variáveis (ou não-terminais); Σ é um conjunto finito de terminais (o alfabeto da linguagem); R é um conjunto de regras de produção, onde cada regra é da forma A → α (com A ∈ V e α ∈ (V ∪ Σ)*); e S ∈ V é a variável inicial."
        },
        {
          heading: "Derivações e Linguagem Gerada",
          body: "Uma derivação é uma sequência de etapas de substituição que começa com a variável inicial S e aplica sucessivamente as regras de produção até obter uma string composta apenas por símbolos terminais. Se conseguimos derivar uma string w a partir de S em G, dizemos que w pertence à linguagem gerada pela gramática, denotada por L(G). O termo 'livre de contexto' decorre do fato de que a substituição de uma variável A por sua produção correspondente pode ser feita independentemente dos símbolos que a cercam."
        },
        {
          heading: "Árvores de Derivação e Ambiguidade",
          body: "Uma derivação pode ser visualizada hierarquicamente como uma Árvore de Derivação (Parse Tree). A raiz da árvore é a variável inicial S, os nós internos são variáveis substituídas, e as folhas são os terminais que compõem a palavra resultante. Se uma palavra w possui duas ou mais árvores de derivação estruturalmente distintas em uma gramática G, dizemos que a gramática é ambígua. A ambiguidade é um problema crítico em linguagens de programação, pois uma mesma linha de código poderia ser interpretada com semânticas diferentes pelo compilador."
        }
      ],
      animations: ["glcDerivation", "glcDerivationAmbiguidade"]
    },
    {
      slug: "simplificacao-glc",
      title: "10. Simplificação de GLC",
      sourcePdf: "Aula15.pdf",
      summary: "Procedimentos de limpeza de gramáticas para remover produções vazias, produções unitárias e variáveis inúteis.",
      sections: [
        {
          heading: "O Objetivo da Simplificação",
          body: "Antes de processar uma gramática livre de contexto em algoritmos práticos (como analisadores sintáticos e compiladores), é essencial limpá-la de redundâncias e construções inúteis que não contribuem para a geração de strings válidas. A simplificação limpa a gramática sem alterar a linguagem gerada, facilitando transformações posteriores e tornando o reconhecimento sintático mais rápido."
        },
        {
          heading: "Símbolos Inúteis e Geradores",
          body: "Um símbolo X ∈ (V ∪ Σ) é útil se ele participa de alguma derivação que começa no símbolo inicial e gera uma string de terminais: S *⇒ αXβ *⇒ w. Caso contrário, ele é inútil. Para remover símbolos inúteis, realizamos dois testes: 1. Teste de Gerabilidade (identificar variáveis que conseguem gerar alguma string contendo apenas terminais); 2. Teste de Alcançabilidade (identificar símbolos que podem ser alcançados a partir do símbolo inicial S). Símbolos que falham em qualquer um dos testes são descartados junto com suas regras de produção."
        },
        {
          heading: "Produções Vazias e Unitárias",
          body: "Produções vazias são regras da forma A → ε. Elas causam ramificações desnecessárias no processo de parsing. Removemos produções vazias identificando variáveis anuláveis (que podem derivar ε) e criando regras alternativas que cobrem o caso dessas variáveis desaparecerem. Produções unitárias são regras da forma A → B (onde B é uma única variável). Elas apenas copiam o comportamento de outra variável. Removemos essas regras substituindo a transição direta A → B pelas produções reais de B diretamente em A."
        }
      ],
      animations: ["simplificationSimulation"]
    },
    {
      slug: "formas-normais",
      title: "11. Formas Normais (Chomsky e Greibach)",
      sourcePdf: "Aula16.pdf",
      summary: "Estudo das padronizações de gramáticas livres de contexto: Forma Normal de Chomsky e Forma Normal de Greibach.",
      sections: [
        {
          heading: "A Forma Normal de Chomsky (FNC)",
          body: "Uma gramática livre de contexto está na Forma Normal de Chomsky se todas as suas regras de produção são de uma das seguintes formas extremamente simples: 1. A → BC (uma variável gerando exatamente duas variáveis); ou 2. A → a (uma variável gerando exatamente um terminal). Se a palavra vazia ε pertence à linguagem, a regra S → ε também é permitida, desde que S não apareça no lado direito de nenhuma produção. Qualquer GLC que não gera ε pode ser convertida para a FNC."
        },
        {
          heading: "Importância Algorítmica da FNC",
          body: "A rigidez geométrica da Forma Normal de Chomsky traz imensos benefícios matemáticos. Por exemplo, em qualquer árvore de derivação de uma gramática na FNC, uma palavra de comprimento n é sempre derivada em exatamente 2n - 1 passos. Além disso, a FNC viabiliza o algoritmo CYK (Cocke-Younger-Kasami), um algoritmo de programação dinâmica extremamente eficiente para decidir se uma palavra pertence à linguagem de uma GLC."
        },
        {
          heading: "A Forma Normal de Greibach (FNG)",
          body: "Uma gramática livre de contexto está na Forma Normal de Greibach se todas as suas regras são da forma A → aα, onde 'a' é um único símbolo terminal e α é uma sequência de zero ou mais variáveis (α ∈ V*). Na FNG, cada etapa de derivação consome exatamente um símbolo terminal da entrada. Isso torna o modelo ideal para mapeamento direto com Autômatos com Pilha, pois cada transição consome um caractere e manipula as variáveis na pilha."
        }
      ],
      animations: ["chomskyNF"]
    },
    {
      slug: "automato-pilha",
      title: "12. Autômatos com Pilha (AP)",
      sourcePdf: "Aula17.pdf e Aula18.pdf",
      summary: "Estudo dos autômatos estendidos com memória auxiliar LIFO (pilha) para reconhecer linguagens livres de contexto.",
      sections: [
        {
          heading: "A Necessidade de Memória Auxiliar",
          body: "Como vimos, os Autômatos Finitos não conseguem reconhecer linguagens que exigem contagem indefinida ou emparelhamento simétrico de caracteres devido à ausência de memória. O Autômato com Pilha (AP) resolve esse problema estendendo o autômato finito com uma memória auxiliar no formato de Pilha (LIFO - Last In, First Out). A pilha é teoricamente infinita, permitindo que a máquina empilhe símbolos para lembrar do histórico e desempilhe-os posteriormente para verificação."
        },
        {
          heading: "Definição Formal de AP",
          body: "Um Autômato com Pilha é definido formalmente por uma 7-tupla M = (Q, Σ, Γ, δ, q₀, Z, F), onde: Q é o conjunto de estados; Σ é o alfabeto de entrada; Γ é o alfabeto da pilha (os símbolos que podem ser guardados nela); q₀ é o estado inicial; Z ∈ Γ é o símbolo de início da pilha (marcador de fundo); F ⊆ Q é o conjunto de estados de aceitação; e δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*) é a função de transição não-determinística. A transição depende do estado atual, do símbolo lido da entrada (ou ε) e do símbolo no topo da pilha, resultando em um novo estado e símbolos a serem empilhados."
        },
        {
          heading: "Equivalência entre AP e GLC",
          body: "Um dos pilares da teoria das linguagens formais é o teorema que prova que a classe de linguagens aceitas por Autômatos com Pilha (através de não-determinismo) é precisamente a classe das Linguagens Livres de Contexto (geradas por GLCs). Ao contrário dos autômatos finitos, onde o determinismo e não-determinismo têm o mesmo poder, no caso de autômatos com pilha, o modelo Não-Determinístico é estritamente mais poderoso que o Determinístico (APDs não conseguem reconhecer certas linguagens livres de contexto, como palíndromos de comprimento par sem caractere de marcação)."
        }
      ],
      animations: ["pushdownSimulation", "pushdownSimulationRejeicao"]
    },
    {
      slug: "lema-bombeamento-llc",
      title: "13. Lema do Bombeamento para LLC",
      sourcePdf: "Aula19.pdf",
      summary: "Ferramenta matemática avançada para provar que certas linguagens não são livres de contexto.",
      sections: [
        {
          heading: "Limitações das Linguagens Livres de Contexto",
          body: "Assim como as linguagens regulares têm limitações, as Linguagens Livres de Contexto também possuem barreiras intransponíveis. A pilha fornece uma excelente capacidade de contagem e emparelhamento um-para-um, mas falha quando precisamos coordenar múltiplos emparelhamentos independentes (por exemplo, garantir a mesma quantidade de três símbolos distintos, L = {a^n b^n c^n | n ≥ 0}) ou realizar contagens cruzadas. Para provar que essas linguagens não são LLCs, recorremos ao Lema do Bombeamento para LLC."
        },
        {
          heading: "O Enunciado do Lema para LLC",
          body: "O lema estabelece que, se L é uma linguagem livre de contexto, então existe uma constante p tal que qualquer palavra u ∈ L com |u| ≥ p pode ser dividida em cinco partes u = vwxyz, satisfazendo as condições: 1. Para todo i ≥ 0, v w^i x y^i z ∈ L; 2. |wy| > 0 (as partes bombeadas não são simultaneamente vazias); 3. |wxy| ≤ p. A lógica por trás dessa divisão quíntupla é a estrutura da árvore de derivação: para palavras muito longas, o caminho mais longo na árvore deve repetir alguma variável (recursão de variáveis), gerando uma estrutura que pode ser replicada indefinidamente."
        },
        {
          heading: "Aplicação da Prova de Não-LLC",
          body: "Realizamos a prova por contradição. Assumimos que a linguagem (como L = {a^n b^n c^n}) é livre de contexto e escolhemos uma palavra s = a^p b^p c^p. Ao analisar as divisões possíveis de s = vwxyz respeitando |wxy| ≤ p, provamos que a substring wxy não pode conter simultaneamente os três caracteres 'a', 'b' e 'c'. Portanto, ao bombear para i = 2, aumentamos a quantidade de apenas um ou dois dos caracteres, quebrando a proporção de igualdade exigida pela linguagem. Isso demonstra a contradição e encerra a prova."
        }
      ],
      animations: ["pumpingLemma"]
    },
    {
      slug: "maquina-turing",
      title: "14. Máquinas de Turing (MT)",
      sourcePdf: "Aula20.pdf e Aula21.pdf",
      summary: "O ápice dos modelos computacionais: a Máquina de Turing, a definição formal de algoritmo e os limites físicos da computação.",
      sections: [
        {
          heading: "O Conceito da Máquina de Turing",
          body: "Proposta por Alan Turing em 1936, a Máquina de Turing (MT) é um modelo de computação de propósito geral que formaliza a ideia intuitiva de algoritmo. Ao contrário de modelos anteriores que processam a entrada em fluxo unidirecional e possuem memória restrita ou LIFO, a Máquina de Turing possui uma fita de armazenamento infinita nos dois sentidos (ou infinita à direita) que atua como memória de leitura e escrita. O cabeçote da máquina pode ler ou escrever símbolos na fita e mover-se livremente para a esquerda (L) ou para a direita (R) a cada passo."
        },
        {
          heading: "Definição Formal de MT",
          body: "Uma Máquina de Turing padrão é uma 7-tupla M = (Q, Σ, Γ, δ, q₀, q_aceita, q_rejeita), onde: Q é o conjunto finito de estados; Σ é o alfabeto de entrada (não contém o símbolo de espaço em branco ⊔); Γ é o alfabeto da fita, onde Σ ⊆ Γ e ⊔ ∈ Γ; q₀ ∈ Q é o estado inicial; q_aceita ∈ Q é o estado de aceitação; q_rejeita ∈ Q é o estado de rejeição (q_aceita ≠ q_rejeita); e δ: Q × Γ → Q × Γ × {L, R} é a função de transição que dita o comportamento físico da máquina a cada passo de computação."
        },
        {
          heading: "Linguagens Decidíveis vs Reconhecíveis",
          body: "Quando uma MT processa uma entrada w, três desfechos são possíveis: a máquina entra no estado q_aceita (aceita w), entra no estado q_rejeita (rejeita w), ou entra em um loop infinito (nunca para). Uma linguagem é Turing-reconhecível (ou recursivamente enumerável) se existe uma MT que aceita todas as palavras pertencentes à linguagem e entra em loop ou rejeita as que não pertencem. Uma linguagem é Turing-decidível (ou simplesmente decidível) se existe um Decisor (uma MT que para para TODA e qualquer entrada, garantindo uma resposta sim ou não em tempo finito)."
        }
      ],
      animations: ["turingMachine", "turingMachineRejeicao"]
    },
    {
      slug: "decidibilidade",
      title: "15. Decidibilidade e Solubilidade",
      sourcePdf: "Aula22.pdf",
      summary: "Estudo dos limites da computação: o que computadores podem e não podem resolver. O problema da parada.",
      sections: [
        {
          heading: "A Tese de Church-Turing",
          body: "A Tese de Church-Turing afirma que nossa noção intuitiva de algoritmo é exatamente equivalente a tudo aquilo que pode ser executado por uma Máquina de Turing. Qualquer algoritmo escrito em linguagens modernas (Python, C, Java) ou executado em computadores físicos superpotentes pode ser traduzido em uma Máquina de Turing equivalente. Isso eleva a MT de um simples modelo abstrato a uma representação definitiva dos limites da física e da lógica sobre o processamento de informação."
        },
        {
          heading: "Problemas Indecidíveis",
          body: "Um dos resultados mais importantes da ciência da computação é que existem problemas matemáticos bem definidos que são intrinsecamente insolúveis por qualquer algoritmo possível. Esses problemas são chamados de Indecidíveis. O exemplo clássico é o Problema da Parada (Halting Problem), que pergunta se é possível projetar um programa que receba o código de outro programa e uma entrada e determine, sem entrar em loop, se esse programa irá parar ou rodar para sempre."
        },
        {
          heading: "A Prova do Problema da Parada",
          body: "Alan Turing provou a indecidibilidade do problema da parada por meio de uma elegante técnica de diagonalização. Supondo que exista um programa H capaz de decidir se qualquer programa para ou não, construímos um programa patológico D que recebe o próprio código e faz exatamente o oposto do que H prevê. Se H prevê que D vai parar, D entra em loop infinito. Se H prevê que D vai entrar em loop, D para imediatamente. Essa contradição lógica prova que o decisor universal H não pode existir."
        }
      ],
      animations: ["turingDeciderSimulation"]
    },
    {
      slug: "redutibilidade",
      title: "16. Redutibilidade de Problemas",
      sourcePdf: "Aula23.pdf",
      summary: "Técnica de redução para classificar a dificuldade relativa de problemas e estender provas de indecidibilidade.",
      sections: [
        {
          heading: "O Conceito de Redução",
          body: "A redutibilidade é a técnica computacional de transformar um problema A em outro problema B. Se conseguimos resolver o problema B de forma eficiente, e sabemos como reduzir A para B, então também conseguimos resolver o problema A. Na teoria da computabilidade, usamos a redução na direção oposta (contrapositiva): se sabemos que o problema A é incrivelmente difícil (ou indecidível) e conseguimos reduzir A para B, então o problema B também deve ser incrivelmente difícil (indecidível)."
        },
        {
          heading: "Redução por Mapeamento (Mapping Reduction)",
          body: "Formalmente, uma linguagem A é redutível por mapeamento a uma linguagem B, denotado por A ≤_m B, se existe uma função computável f: Σ* → Σ* tal que, para toda palavra w, w ∈ A se, e somente se, f(w) ∈ B. A função f é chamada de redução. Se A ≤_m B e B é decidível, então A é decidível. Similarmente, se A ≤_m B e A é indecidível, B é garantidamente indecidível."
        },
        {
          heading: "Exemplos de Redução Históricos",
          body: "Utilizando a redução por mapeamento, conseguimos provar a indecidibilidade de uma vasta gama de problemas sobre máquinas de Turing. Provamos, por exemplo, que decidir se uma MT aceita uma linguagem vazia (E_MT), se aceita uma linguagem regular (REGULAR_MT), ou se duas MTs aceitam a mesma linguagem (EQ_MT) são todas tarefas indecidíveis, reduzindo o problema da parada original (A_MT) a cada um desses novos problemas."
        }
      ],
      animations: ["mappingReductionSimulation"]
    },
    {
      slug: "complexidade-tempo",
      title: "17. Complexidade de Tempo e Notação O-Grande",
      sourcePdf: "Aula24.pdf",
      summary: "Introdução à análise de algoritmos na teoria da complexidade, notação assintótica e recursos computacionais.",
      sections: [
        {
          heading: "O que é Complexidade de Tempo?",
          body: "Enquanto a computabilidade se preocupa em saber se um problema PODE ser resolvido, a complexidade estuda a quantidade de recursos (como tempo e memória) necessários para resolvê-lo. A complexidade de tempo de uma Máquina de Turing decisora é expressa como uma função f(n) que representa o número máximo de transições que a máquina realiza para qualquer entrada de comprimento n antes de parar."
        },
        {
          heading: "A Notação Assintótica O-Grande (Big-O)",
          body: "Para analisar o comportamento de algoritmos de forma independente de fatores de hardware ou compiladores específicos, usamos a Notação Big-O. Ela descreve o limite superior do crescimento de uma função no longo prazo (comportamento assintótico), focando apenas no termo de maior crescimento e descartando constantes multiplicativas. Por exemplo, um algoritmo que realiza 5n^2 + 3n + 10 passos é classificado simplesmente como O(n^2)."
        },
        {
          heading: "Robustez entre Modelos Computacionais",
          body: "Uma das maiores belezas da teoria da complexidade é a robustez das classes de complexidade sob variações de modelos de computação razoáveis. Por exemplo, uma Máquina de Turing com múltiplas fitas que roda em tempo t(n) pode ser simulada por uma MT padrão de fita única em tempo O(t(n)^2). Essa equivalência polinomial garante que as conclusões sobre a eficiência de algoritmos sejam universais."
        }
      ],
      animations: ["timeComplexityComparison"]
    },
    {
      slug: "classes-p-np",
      title: "18. As Classes P e NP",
      sourcePdf: "Aula26.pdf",
      summary: "Estudo dos problemas tratáveis (P), verificação polinomial (NP) e o maior mistério em aberto da matemática moderna: P vs NP.",
      sections: [
        {
          heading: "A Classe P (Tempo Polinomial)",
          body: "A classe P é o conjunto de todas as linguagens (problemas de decisão) que podem ser decididas por uma Máquina de Turing Determinística em tempo polinomial O(n^k) para alguma constante k. Problemas em P são considerados tratáveis na prática (eficientes), como busca de caminhos mínimos em grafos, ordenação de listas, multiplicação de matrizes e primalidade de números."
        },
        {
          heading: "A Classe NP (Verificação Polinomial)",
          body: "A classe NP é o conjunto de problemas que possuem um Verificador Polinomial. Isso significa que, embora encontrar a solução para o problema possa ser extremamente difícil, se alguém nos der um certificado (uma prova ou candidata a solução), conseguimos verificar em tempo polinomial determinístico se a solução é válida. Alternativamente, NP é a classe de problemas decidíveis em tempo polinomial por uma Máquina de Turing Não-Determinística."
        },
        {
          heading: "O Enigma P vs NP",
          body: "A pergunta 'P = NP?' questiona se a habilidade de verificar soluções em tempo polinomial implica necessariamente a habilidade de encontrar tais soluções também em tempo polinomial. A imensa maioria dos cientistas acredita que P ≠ NP (ou seja, encontrar soluções é intrinsecamente mais difícil do que apenas verificá-las), mas uma prova matemática formal continua sendo um dos maiores desafios não resolvidos da humanidade, valendo um prêmio de 1 milhão de dólares pelo Clay Mathematics Institute."
        }
      ],
      animations: ["pVsNpSimulation"]
    },
    {
      slug: "np-completude",
      title: "19. NP-Completude e Reduções Polinomials",
      sourcePdf: "Aula27.pdf",
      summary: "A classe dos problemas mais difíceis de NP: a NP-Completude, Teorema de Cook-Levin e problemas clássicos.",
      sections: [
        {
          heading: "Definição de NP-Completo",
          body: "Um problema B é chamado de NP-Completo se ele satisfaz duas condições severas: 1. B pertence à classe NP; 2. Todo problema A em NP é redutível a B em tempo polinomial (A ≤_P B). Os problemas NP-completos representam os segredos mais profundos e os problemas mais difíceis da classe NP. Se qualquer um deles puder ser resolvido em tempo polinomial determinístico, então TODOS os problemas em NP também poderão, provando imediatamente que P = NP."
        },
        {
          heading: "O Teorema de Cook-Levin",
          body: "Provado de forma independente por Stephen Cook e Leonid Levin no início da década de 1970, o Teorema de Cook-Levin estabeleceu o primeiro problema NP-completo da história: o Problema da Satisfabilidade Booleana (SAT). A prova demonstra que qualquer computação não-determinística de tempo polinomial pode ser codificada como uma fórmula lógica booleana de tamanho polinomial que é satisfatível se, e somente se, o autômato aceita a entrada."
        },
        {
          heading: "Problemas Clássicos e Reduções",
          body: "A partir de SAT, centenas de outros problemas NP-completos foram identificados através de reduções polinomiais encadeadas. Alguns dos mais famosos incluem: CLIQUE (encontrar um subgrafo completo de tamanho k), VERTEX-COVER (encontrar um conjunto de vértices de tamanho k que toca todas as arestas), e HAMPATH (encontrar um caminho que visita cada vértice exatamente uma vez). A NP-completude ajuda engenheiros a identificar quando um problema é impraticável e buscar algoritmos de aproximação ou heurísticas."
        }
      ],
      animations: ["satToCliqueSimulation"]
    }
  ],

  animations: {
    afdSimulation: {
      title: "Simulação de AFD (Reconhecedor de '010')",
      summary: "Esta animação mostra um Autômato Finito Determinístico que busca exatamente a string '010'. Acompanhe os estados ativos e a leitura do cabeçote sobre a palavra de entrada.",
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 250, y: 120 },
          { id: "q2", x: 400, y: 200 },
          { id: "q3", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "0" },
          { id: "t1", from: "q0", to: "q0", label: "1" },
          { id: "t2", from: "q1", to: "q2", label: "1" },
          { id: "t3", from: "q1", to: "q1", label: "0" },
          { id: "t4", from: "q2", to: "q3", label: "0" },
          { id: "t5", from: "q2", to: "q0", label: "1" },
          { id: "t6", from: "q3", to: "q1", label: "0" },
          { id: "t7", from: "q3", to: "q0", label: "1" }
        ]
      },
      steps: [
        {
          title: "Início da Computação",
          text: "A máquina é inicializada no estado inicial <strong>q0</strong>. O cursor aponta para o primeiro símbolo da palavra de entrada '010'.",
          activeStates: ["q0"],
          activeTransitions: [],
          input: "010",
          inputPosition: 0
        },
        {
          title: "Leitura de '0'",
          text: "O símbolo lido é '0'. A máquina segue a transição <strong>t0</strong> (q0 --0--> q1) e transita para o estado <strong>q1</strong>.",
          activeStates: ["q1"],
          activeTransitions: ["t0"],
          input: "010",
          inputPosition: 1
        },
        {
          title: "Leitura de '1'",
          text: "O próximo símbolo lido é '1'. A máquina segue a transição <strong>t2</strong> (q1 --1--> q2) e transita para o estado <strong>q2</strong>.",
          activeStates: ["q2"],
          activeTransitions: ["t2"],
          input: "010",
          inputPosition: 2
        },
        {
          title: "Leitura de '0'",
          text: "O último símbolo da palavra de entrada é '0'. A máquina segue a transição <strong>t4</strong> (q2 --0--> q3) e atinge o estado <strong>q3</strong>.",
          activeStates: ["q3"],
          activeTransitions: ["t4"],
          input: "010",
          inputPosition: 3
        },
        {
          title: "Fim da Computação – Aceitação!",
          text: "A entrada foi totalmente processada. O estado atual é <strong>q3</strong>, que é um estado de aceitação (duplo círculo). Portanto, a string '010' é <strong>aceita</strong>!",
          activeStates: ["q3"],
          activeTransitions: [],
          input: "010",
          inputPosition: 3
        }
      ]
    },

    afdSimulationRejeicao: {
      title: "Simulação de AFD (Rejeição de '011')",
      summary: "Esta animação mostra o mesmo AFD processando a string '011'. Acompanhe como o estado final não será um estado de aceitação, resultando em falha.",
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 250, y: 120 },
          { id: "q2", x: 400, y: 200 },
          { id: "q3", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "0" },
          { id: "t1", from: "q0", to: "q0", label: "1" },
          { id: "t2", from: "q1", to: "q2", label: "1" },
          { id: "t3", from: "q1", to: "q1", label: "0" },
          { id: "t4", from: "q2", to: "q3", label: "0" },
          { id: "t5", from: "q2", to: "q0", label: "1" },
          { id: "t6", from: "q3", to: "q1", label: "0" },
          { id: "t7", from: "q3", to: "q0", label: "1" }
        ]
      },
      steps: [
        {
          title: "Início da Computação",
          text: "A máquina é inicializada no estado inicial <strong>q0</strong>. A palavra de entrada é '011'.",
          activeStates: ["q0"],
          activeTransitions: [],
          input: "011",
          inputPosition: 0
        },
        {
          title: "Leitura de '0'",
          text: "O símbolo lido é '0'. A máquina segue a transição <strong>t0</strong> (q0 --0--> q1) e transita para o estado <strong>q1</strong>.",
          activeStates: ["q1"],
          activeTransitions: ["t0"],
          input: "011",
          inputPosition: 1
        },
        {
          title: "Leitura de '1'",
          text: "O próximo símbolo lido é '1'. A máquina segue a transição <strong>t2</strong> (q1 --1--> q2) e transita para o estado <strong>q2</strong>.",
          activeStates: ["q2"],
          activeTransitions: ["t2"],
          input: "011",
          inputPosition: 2
        },
        {
          title: "Leitura do segundo '1'",
          text: "O último símbolo da palavra de entrada é '1'. A máquina segue a transição <strong>t5</strong> (q2 --1--> q0) e retorna ao estado inicial <strong>q0</strong>.",
          activeStates: ["q0"],
          activeTransitions: ["t5"],
          input: "011",
          inputPosition: 3
        },
        {
          title: "Fim da Computação – Rejeição",
          text: "A entrada foi totalmente processada. O estado atual é <strong>q0</strong>, que não é um estado de aceitação. Portanto, a string '011' é <strong>rejeitada</strong>.",
          activeStates: ["q0"],
          activeTransitions: [],
          input: "011",
          inputPosition: 3
        }
      ]
    },

    afdParidade: {
      title: "AFD de Paridade de Zeros",
      summary: "Visualização de um AFD que reconhece apenas strings binárias contendo um número PAR de zeros. Processando '0100'.",
      automaton: {
        states: [
          { id: "qPar", x: 150, y: 200, initial: true, accepting: true },
          { id: "qImpar", x: 450, y: 200 }
        ],
        transitions: [
          { id: "t0", from: "qPar", to: "qImpar", label: "0" },
          { id: "t1", from: "qImpar", to: "qPar", label: "0" },
          { id: "t2", from: "qPar", to: "qPar", label: "1" },
          { id: "t3", from: "qImpar", to: "qImpar", label: "1" }
        ]
      },
      steps: [
        {
          title: "Configuração Inicial",
          text: "O autômato começa no estado <strong>qPar</strong> (pois zero é par). A entrada a ser analisada é '0100'.",
          activeStates: ["qPar"],
          activeTransitions: [],
          input: "0100",
          inputPosition: 0
        },
        {
          title: "Processando '0'",
          text: "Lê '0'. O número de zeros agora é ÍMPAR (1 zero). Transita de <strong>qPar</strong> para <strong>qImpar</strong> pela transição <strong>t0</strong>.",
          activeStates: ["qImpar"],
          activeTransitions: ["t0"],
          input: "0100",
          inputPosition: 1
        },
        {
          title: "Processando '1'",
          text: "Lê '1'. O número de zeros permanece ÍMPAR. Segue o auto-loop <strong>t3</strong> e continua em <strong>qImpar</strong>.",
          activeStates: ["qImpar"],
          activeTransitions: ["t3"],
          input: "0100",
          inputPosition: 2
        },
        {
          title: "Processando '0'",
          text: "Lê '0'. O número de zeros agora é PAR (2 zeros). Segue a transição <strong>t1</strong> voltando para o estado <strong>qPar</strong>.",
          activeStates: ["qPar"],
          activeTransitions: ["t1"],
          input: "0100",
          inputPosition: 3
        },
        {
          title: "Processando '0'",
          text: "Lê '0'. O número de zeros torna-se ÍMPAR (3 zeros). Segue para o estado <strong>qImpar</strong> pela transição <strong>t0</strong>.",
          activeStates: ["qImpar"],
          activeTransitions: ["t0"],
          input: "0100",
          inputPosition: 4
        },
        {
          title: "Resultado – Rejeição!",
          text: "Fim da string. A máquina terminou no estado <strong>qImpar</strong>, que não é de aceitação. Portanto, a string '0100' é <strong>rejeitada</strong> (possui quantidade ímpar de zeros).",
          activeStates: ["qImpar"],
          activeTransitions: [],
          input: "0100",
          inputPosition: 4
        }
      ]
    },

    afndEpsilon: {
      title: "Funcionamento do AFND com Transições ε",
      summary: "Demonstração didática de como o não-determinismo ativa múltiplos ramos de computação simultaneamente usando transições epsilon.",
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 250, y: 120 },
          { id: "q2", x: 450, y: 120, accepting: true },
          { id: "q3", x: 350, y: 280 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε" },
          { id: "t1", from: "q0", to: "q3", label: "0" },
          { id: "t2", from: "q1", to: "q1", label: "0" },
          { id: "t3", from: "q1", to: "q2", label: "1" }
        ]
      },
      steps: [
        {
          title: "Passo Inicial e Fecho Epsilon",
          text: "O autômato inicia no estado <strong>q0</strong>. Entretanto, como há uma transição ε de q0 para q1 (t0), a máquina entra IMEDIATAMENTE e simultaneamente no estado <strong>q1</strong> sem consumir caracteres. Os estados ativos iniciais são {q0, q1}.",
          activeStates: ["q0", "q1"],
          activeTransitions: ["t0"],
          input: "01",
          inputPosition: 0
        },
        {
          title: "Processando '0'",
          text: "Ao ler o símbolo '0', o ramo em q0 consome o caractere e vai para <strong>q3</strong> (t1). O ramo em q1 segue o auto-loop (t2) e continua em <strong>q1</strong>. O conjunto de estados ativos torna-se {q1, q3}.",
          activeStates: ["q1", "q3"],
          activeTransitions: ["t1", "t2"],
          input: "01",
          inputPosition: 1
        },
        {
          title: "Processando '1'",
          text: "Lê o símbolo '1'. Do estado q1, a máquina segue para <strong>q2</strong> (t3). Do estado q3, não há transição para '1' (ramo morre). O conjunto de estados ativos é agora {q2}.",
          activeStates: ["q2"],
          activeTransitions: ["t3"],
          input: "01",
          inputPosition: 2
        },
        {
          title: "Resultado – Aceitação",
          text: "A string '01' foi totalmente processada. O conjunto de estados ativos final contém <strong>q2</strong>, que é aceitação. Por haver pelo menos um caminho aceito, a computação não-determinística conclui com <strong>sucesso</strong>!",
          activeStates: ["q2"],
          activeTransitions: [],
          input: "01",
          inputPosition: 2
        }
      ]
    },

    afndEpsilonRejeicao: {
      title: "Funcionamento do AFND (Caminho de Falha)",
      summary: "Demonstração de como o AFND rejeita a palavra '11'. Todos os ramos de computação possíveis irão 'morrer' antes do fim da string.",
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 250, y: 120 },
          { id: "q2", x: 450, y: 120, accepting: true },
          { id: "q3", x: 350, y: 280 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε" },
          { id: "t1", from: "q0", to: "q3", label: "0" },
          { id: "t2", from: "q1", to: "q1", label: "0" },
          { id: "t3", from: "q1", to: "q2", label: "1" }
        ]
      },
      steps: [
        {
          title: "Passo Inicial e Fecho Epsilon",
          text: "A entrada é '11'. A máquina inicia em <strong>q0</strong>. Graças à transição ε (t0), ela também ocupa <strong>q1</strong> simultaneamente. Estados ativos iniciais: {q0, q1}.",
          activeStates: ["q0", "q1"],
          activeTransitions: ["t0"],
          input: "11",
          inputPosition: 0
        },
        {
          title: "Processando o primeiro '1'",
          text: "Ao ler '1', não há transição partindo de q0, então este ramo 'morre'. A partir de q1, a transição t3 leva ao estado <strong>q2</strong>. O único estado ativo agora é {q2}.",
          activeStates: ["q2"],
          activeTransitions: ["t3"],
          input: "11",
          inputPosition: 1
        },
        {
          title: "Processando o segundo '1'",
          text: "Ao ler o próximo '1', procuramos uma transição a partir de <strong>q2</strong>. Como não existe nenhuma regra definida para '1' partindo de q2, este último ramo também morre.",
          activeStates: [],
          activeTransitions: [],
          input: "11",
          inputPosition: 2
        },
        {
          title: "Resultado – Rejeição",
          text: "A palavra '11' terminou de ser processada e não restou nenhum estado ativo (conjunto de estados é vazio). Como a máquina não parou em nenhum estado de aceitação, a palavra é <strong>rejeitada</strong>.",
          activeStates: [],
          activeTransitions: [],
          input: "11",
          inputPosition: 2
        }
      ]
    },

    afndToDfd: {
      title: "Conversão de AFND para AFD",
      summary: "Passo a passo visual mostrando como conjuntos de estados de um AFND tornam-se estados singulares em um AFD determinístico.",
      automaton: {
        states: [
          { id: "{q0}", x: 120, y: 200, initial: true },
          { id: "{q0,q1}", x: 300, y: 200 },
          { id: "{q0,q2}", x: 480, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "{q0}", to: "{q0}", label: "1" },
          { id: "t1", from: "{q0}", to: "{q0,q1}", label: "0" },
          { id: "t2", from: "{q0,q1}", to: "{q0,q2}", label: "0" },
          { id: "t3", from: "{q0,q1}", to: "{q0}", label: "1" },
          { id: "t4", from: "{q0,q2}", to: "{q0,q1}", label: "0" },
          { id: "t5", from: "{q0,q2}", to: "{q0}", label: "1" }
        ]
      },
      steps: [
        {
          title: "Definição do Estado Inicial",
          text: "Iniciamos com o estado do AFD correspondente ao fecho epsilon do estado inicial do AFND, que é apenas <strong>{q0}</strong>.",
          activeStates: ["{q0}"],
          activeTransitions: [],
          input: "00",
          inputPosition: 0
        },
        {
          title: "Processando Entrada '0'",
          text: "A partir do estado {q0}, ao ler '0', o AFND original pode transitar para q0 ou q1. Isso cria o estado de subconjunto <strong>{q0,q1}</strong> no AFD.",
          activeStates: ["{q0,q1}"],
          activeTransitions: ["t1"],
          input: "00",
          inputPosition: 1
        },
        {
          title: "Processando Entrada '0' novamente",
          text: "A partir de {q0,q1}, ao ler '0': do estado q0 vamos para {q0,q1}, e do estado q1 vamos para q2. A união dos destinos é <strong>{q0,q2}</strong>. Como q2 é de aceitação no AFND, este subconjunto torna-se um estado de aceitação no AFD.",
          activeStates: ["{q0,q2}"],
          activeTransitions: ["t2"],
          input: "00",
          inputPosition: 2
        },
        {
          title: "Autômato Determinístico Concluído",
          text: "Tendo computado todas as transições possíveis para os símbolos {0,1}, o AFD equivalente está concluído. A string '00' é decidida diretamente pelo estado final {q0,q2}.",
          activeStates: ["{q0,q2}"],
          activeTransitions: [],
          input: "00",
          inputPosition: 2
        }
      ]
    },

    unionSimulation: {
      title: "Operação de União (A ∪ B)",
      summary: "Simulação de como o não-determinismo com transições ε simplifica a criação de um autômato que aceita a linguagem A ou a linguagem B. Aqui unimos A={0} e B={1}.",
      automaton: {
        states: [
          { id: "qStart", x: 100, y: 200, initial: true },
          { id: "qA0", x: 250, y: 120 },
          { id: "qA1", x: 400, y: 120, accepting: true },
          { id: "qB0", x: 250, y: 280 },
          { id: "qB1", x: 400, y: 280, accepting: true }
        ],
        transitions: [
          { id: "tE1", from: "qStart", to: "qA0", label: "ε" },
          { id: "tE2", from: "qStart", to: "qB0", label: "ε" },
          { id: "tA", from: "qA0", to: "qA1", label: "0" },
          { id: "tB", from: "qB0", to: "qB1", label: "1" }
        ]
      },
      steps: [
        {
          title: "Ramificação Inicial (Fecho Epsilon)",
          text: "Ao iniciar a computação, o estado inicial <strong>qStart</strong> possui ramificações ε para os autômatos originais de A e B simultaneamente.",
          activeStates: ["qStart", "qA0", "qB0"],
          activeTransitions: ["tE1", "tE2"],
          input: "1",
          inputPosition: 0
        },
        {
          title: "Leitura do caractere '1'",
          text: "A palavra de entrada é '1'. O ramo em qA0 tenta ler '1', mas falha e morre. O ramo em qB0 lê '1' com sucesso via transição <strong>tB</strong> e vai para <strong>qB1</strong>.",
          activeStates: ["qB1"],
          activeTransitions: ["tB"],
          input: "1",
          inputPosition: 1
        },
        {
          title: "Aceitação pela União",
          text: "A palavra terminou. Como <strong>qB1</strong> é um estado de aceitação, todo o autômato da União aceita a palavra, comprovando o fechamento da operação.",
          activeStates: ["qB1"],
          activeTransitions: [],
          input: "1",
          inputPosition: 1
        }
      ]
    },

    kleeneStar: {
      title: "A Operação Estrela de Kleene (A*)",
      summary: "Visualização geométrica da transformação de um autômato para aceitar o Fecho de Kleene, introduzindo transições ε de volta ao início.",
      automaton: {
        states: [
          { id: "qStart", x: 100, y: 200, initial: true, accepting: true },
          { id: "qA", x: 260, y: 200 },
          { id: "qAccept", x: 420, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "qStart", to: "qA", label: "0" },
          { id: "t1", from: "qA", to: "qAccept", label: "1" },
          { id: "tEpsilon1", from: "qStart", to: "qAccept", label: "ε" },
          { id: "tEpsilon2", from: "qAccept", to: "qStart", label: "ε" }
        ]
      },
      steps: [
        {
          title: "Autômato Base e a palavra vazia",
          text: "Para garantir que o fecho de Kleene de qualquer linguagem reconheça a palavra vazia ε, cria-se um novo estado inicial <strong>qStart</strong> que também é de aceitação. Através da transição tEpsilon1, aceita-se ε instantaneamente.",
          activeStates: ["qStart", "qAccept"],
          activeTransitions: ["tEpsilon1"],
          input: "0101",
          inputPosition: 0
        },
        {
          title: "Primeira ocorrência de '0'",
          text: "A máquina consome o primeiro caractere '0'. Transita do estado inicial qStart para qA (t0).",
          activeStates: ["qA"],
          activeTransitions: ["t0"],
          input: "0101",
          inputPosition: 1
        },
        {
          title: "Primeira ocorrência de '1'",
          text: "Consome o caractere '1' da primeira ocorrência. Transita de qA para o estado de aceitação qAccept (t1).",
          activeStates: ["qAccept"],
          activeTransitions: ["t1"],
          input: "0101",
          inputPosition: 2
        },
        {
          title: "Retorno espontâneo via ε",
          text: "Estando em qAccept, o fecho de Kleene exige que possamos processar novas repetições. A transição ε <strong>tEpsilon2</strong> permite retornar a <strong>qStart</strong> sem ler novos caracteres da entrada.",
          activeStates: ["qStart"],
          activeTransitions: ["tEpsilon2"],
          input: "0101",
          inputPosition: 2
        },
        {
          title: "Segunda ocorrência de '0'",
          text: "A máquina consome o segundo caractere '0' na posição 2. Transita de qStart para qA (t0).",
          activeStates: ["qA"],
          activeTransitions: ["t0"],
          input: "0101",
          inputPosition: 3
        },
        {
          title: "Segunda ocorrência de '1'",
          text: "Consome o último caractere '1' na posição 3. Transita de qA para qAccept (t1).",
          activeStates: ["qAccept"],
          activeTransitions: ["t1"],
          input: "0101",
          inputPosition: 4
        },
        {
          title: "Conclusão do Fecho",
          text: "Toda a string '0101' foi lida e a máquina conclui em qAccept. A computação é aceita com sucesso.",
          activeStates: ["qAccept"],
          activeTransitions: [],
          input: "0101",
          inputPosition: 4
        }
      ]
    },

    pumpingLemma: {
      title: "Demonstração Visual do Lema do Bombeamento",
      summary: "Entenda conceitualmente a partição s = xyz e como o bombeamento x y^2 z estoura a limitação de estados de um autômato finito.",
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "qLoop", x: 280, y: 200 },
          { id: "qF", x: 460, y: 200, accepting: true }
        ],
        transitions: [
          { id: "xPath", from: "q0", to: "qLoop", label: "a" },
          { id: "yLoop", from: "qLoop", to: "qLoop", label: "b" },
          { id: "zPath", from: "qLoop", to: "qF", label: "c" }
        ]
      },
      steps: [
        {
          title: "Análise da palavra original s = abc",
          text: "Considere a palavra s = 'abc'. O caminho começa em q0, consome 'a' (x), atinge qLoop, consome 'b' (y) girando no loop, e consome 'c' (z) para terminar no estado final qF.",
          activeStates: ["q0"],
          activeTransitions: [],
          input: "abc",
          inputPosition: 0
        },
        {
          title: "Partição xyz",
          text: "Identificamos as três partes da palavra: <strong>x = a</strong> (leva ao loop), <strong>y = b</strong> (gira no loop) e <strong>z = c</strong> (leva ao final). O comprimento de bombeamento exige que o loop y seja não-vazio.",
          activeStates: ["qLoop"],
          activeTransitions: ["xPath"],
          input: "abc",
          inputPosition: 1
        },
        {
          title: "Bombeando y duas vezes (x y^2 z)",
          text: "Ao dobrar a parte y, a nova palavra gerada é 'abbc'. A computação segue a -> b -> b -> c. Como a estrutura do loop permite repetir 'b' infinitamente, a palavra bombeada TAMBÉM é garantidamente aceita pelo autômato.",
          activeStates: ["qLoop"],
          activeTransitions: ["yLoop"],
          input: "abbc",
          inputPosition: 2
        },
        {
          title: "Consumindo o segundo 'b' bombeado",
          text: "Consumimos o segundo caractere 'b' da parte bombeada, repetindo a transição no loop.",
          activeStates: ["qLoop"],
          activeTransitions: ["yLoop"],
          input: "abbc",
          inputPosition: 3
        },
        {
          title: "Aceitação da string bombeada",
          text: "A palavra 'abbc' termina com sucesso em qF após consumir 'c'. Isso demonstra por que, em linguagens não-regulares como a^n b^n, a incapacidade de bombear sem alterar as proporções quebra a regularidade.",
          activeStates: ["qF"],
          activeTransitions: ["zPath"],
          input: "abbc",
          inputPosition: 4
        }
      ]
    },

    glcDerivation: {
      title: "Árvore de Derivação e GLC",
      summary: "Visualização das substituições recursivas na Gramática Livre de Contexto para gerar a string 'a + a * a'.",
      grammar: {
        productions: [
          { left: "E", right: ["E + E", "E * E", "a"] }
        ]
      },
      steps: [
        {
          title: "Símbolo Inicial",
          text: "Iniciamos a derivação sintática com a variável inicial <strong>E</strong> no topo.",
          grammar: {
            productions: [
              { left: "E", right: ["E + E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 160, type: "nonterminal" }
            ],
            edges: []
          }
        },
        {
          title: "Primeira Expansão (E -> E + E)",
          text: "A variável inicial E é expandida na regra de soma. A árvore cria três ramos: a variável esquerda E, o terminal '+' e a variável direita E.",
          grammar: {
            productions: [
              { left: "E", right: ["E + E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "+", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" }
            ]
          }
        },
        {
          title: "Substituição da Esquerda (E -> a)",
          text: "Aplicamos a regra terminal E -> a na subvariável da esquerda. A forma sentencial torna-se <strong>a + E</strong>.",
          grammar: {
            productions: [
              { left: "E", right: ["a + E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "+", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "a", x: 200, y: 230, type: "terminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" }
            ]
          }
        },
        {
          title: "Segunda Expansão (E -> E * E)",
          text: "A subvariável direita E é expandida na regra de multiplicação E -> E * E. O ramo direito cresce com variáveis e o terminal '*'. Sentencial: <strong>a + E * E</strong>.",
          grammar: {
            productions: [
              { left: "E", right: ["a + E * E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "+", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "a", x: 200, y: 230, type: "terminal" },
              { id: "n6", label: "E", x: 440, y: 230, type: "nonterminal" },
              { id: "n7", label: "*", x: 520, y: 230, type: "terminal" },
              { id: "n8", label: "E", x: 600, y: 230, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" },
              { from: "n4", to: "n6" },
              { from: "n4", to: "n7" },
              { from: "n4", to: "n8" }
            ]
          }
        },
        {
          title: "Substituição do Meio (E -> a)",
          text: "Aplicamos E -> a na subvariável do meio. A forma sentencial agora é <strong>a + a * E</strong>.",
          grammar: {
            productions: [
              { left: "E", right: ["a + a * E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "+", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "a", x: 200, y: 230, type: "terminal" },
              { id: "n6", label: "E", x: 440, y: 230, type: "nonterminal" },
              { id: "n7", label: "*", x: 520, y: 230, type: "terminal" },
              { id: "n8", label: "E", x: 600, y: 230, type: "nonterminal" },
              { id: "n9", label: "a", x: 440, y: 310, type: "terminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" },
              { from: "n4", to: "n6" },
              { from: "n4", to: "n7" },
              { from: "n4", to: "n8" },
              { from: "n6", to: "n9" }
            ]
          }
        },
        {
          title: "Substituição Final (E -> a)",
          text: "Aplicamos E -> a na variável restante da extrema direita. A derivação está completa, gerando a palavra de terminais <strong>a + a * a</strong>.",
          grammar: {
            productions: [
              { left: "E", right: ["a + a * a"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "+", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "a", x: 200, y: 230, type: "terminal" },
              { id: "n6", label: "E", x: 440, y: 230, type: "nonterminal" },
              { id: "n7", label: "*", x: 520, y: 230, type: "terminal" },
              { id: "n8", label: "E", x: 600, y: 230, type: "nonterminal" },
              { id: "n9", label: "a", x: 440, y: 310, type: "terminal" },
              { id: "n10", label: "a", x: 600, y: 310, type: "terminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" },
              { from: "n4", to: "n6" },
              { from: "n4", to: "n7" },
              { from: "n4", to: "n8" },
              { from: "n6", to: "n9" },
              { from: "n8", to: "n10" }
            ]
          }
        }
      ]
    },

    glcDerivationAmbiguidade: {
      title: "Árvore de Derivação (Exibindo Ambiguidade)",
      summary: "Para a mesma palavra 'a + a * a', a gramática permite uma árvore estruturalmente diferente (onde a multiplicação ocorre depois da adição na precedência). Isso prova que a gramática é ambígua.",
      grammar: {
        productions: [
          { left: "E", right: ["E + E", "E * E", "( E )", "a"] }
        ]
      },
      steps: [
        {
          title: "Símbolo Inicial e Primeira Regra",
          text: "Desta vez, aplicamos primeiro a regra <strong>E -> E * E</strong>. A operação principal na raiz da árvore é a multiplicação.",
          grammar: {
            productions: [
              { left: "E", right: ["E * E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "*", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" }
            ]
          }
        },
        {
          title: "Substituição do Nó Esquerdo",
          text: "Expandimos o <strong>E</strong> da esquerda usando a regra <strong>E -> E + E</strong>. A forma sentencial agora é <strong>E + E * E</strong>.",
          grammar: {
            productions: [
              { left: "E", right: ["E + E * E"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "*", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "E", x: 120, y: 230, type: "nonterminal" },
              { id: "n6", label: "+", x: 200, y: 230, type: "terminal" },
              { id: "n7", label: "E", x: 280, y: 230, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" },
              { from: "n2", to: "n6" },
              { from: "n2", to: "n7" }
            ]
          }
        },
        {
          title: "Substituindo em Terminais",
          text: "Aplicamos a regra <strong>E -> a</strong> em todas as três folhas não-terminais restantes. A palavra gerada é <strong>a + a * a</strong>, idêntica à animação anterior, mas com uma árvore estruturalmente distinta (que causaria erro de precedência em matemática matemática).",
          grammar: {
            productions: [
              { left: "E", right: ["a + a * a"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "E", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "E", x: 200, y: 140, type: "nonterminal" },
              { id: "n3", label: "*", x: 360, y: 140, type: "terminal" },
              { id: "n4", label: "E", x: 520, y: 140, type: "nonterminal" },
              { id: "n5", label: "E", x: 120, y: 230, type: "nonterminal" },
              { id: "n6", label: "+", x: 200, y: 230, type: "terminal" },
              { id: "n7", label: "E", x: 280, y: 230, type: "nonterminal" },
              { id: "n8", label: "a", x: 120, y: 310, type: "terminal" },
              { id: "n9", label: "a", x: 280, y: 310, type: "terminal" },
              { id: "n10", label: "a", x: 520, y: 230, type: "terminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" },
              { from: "n2", to: "n5" },
              { from: "n2", to: "n6" },
              { from: "n2", to: "n7" },
              { from: "n5", to: "n8" },
              { from: "n7", to: "n9" },
              { from: "n4", to: "n10" }
            ]
          }
        }
      ]
    },

    chomskyNF: {
      title: "Forma Normal de Chomsky",
      summary: "Esta animação mostra visualmente como produções arbitrárias de uma GLC são normalizadas e quebradas em regras binárias estritas.",
      grammar: {
        productions: [
          { left: "S", right: ["A B C", "a"] },
          { left: "A", right: ["a"] },
          { left: "B", right: ["b"] },
          { left: "C", right: ["c"] }
        ]
      },
      steps: [
        {
          title: "Gramática Inicial",
          text: "A regra S -> A B C viola a Forma Normal de Chomsky porque contém três variáveis no lado direito (o limite estrito é dois).",
          grammar: {
            productions: [
              { left: "S", right: ["A B C", "a"] },
              { left: "A", right: ["a"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "S", x: 360, y: 80, type: "nonterminal" },
              { id: "n2", label: "A", x: 240, y: 200, type: "nonterminal" },
              { id: "n3", label: "B", x: 360, y: 200, type: "nonterminal" },
              { id: "n4", label: "C", x: 480, y: 200, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n1", to: "n4" }
            ]
          }
        },
        {
          title: "Introdução de Variável Auxiliar",
          text: "Introduzimos uma nova variável <strong>X</strong> para agrupar o par final (B C). A regra S -> A B C é reescrita como S -> A X e X -> B C.",
          grammar: {
            productions: [
              { left: "S", right: ["A X"] },
              { left: "X", right: ["B C"] },
              { left: "A", right: ["a"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "S", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "A", x: 240, y: 140, type: "nonterminal" },
              { id: "n3", label: "X", x: 440, y: 140, type: "nonterminal" },
              { id: "n4", label: "B", x: 380, y: 230, type: "nonterminal" },
              { id: "n5", label: "C", x: 500, y: 230, type: "nonterminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n3", to: "n4" },
              { from: "n3", to: "n5" }
            ]
          }
        },
        {
          title: "Gramática Normalizada",
          text: "Agora todas as produções da gramática atendem à FNC: são da forma A -> BC ou A -> a. A estrutura de derivação tornou-se binária.",
          grammar: {
            productions: [
              { left: "S", right: ["A X"] },
              { left: "X", right: ["B C"] },
              { left: "A", right: ["a"] },
              { left: "B", right: ["b"] },
              { left: "C", right: ["c"] }
            ]
          },
          tree: {
            nodes: [
              { id: "n1", label: "S", x: 360, y: 50, type: "nonterminal" },
              { id: "n2", label: "A", x: 240, y: 130, type: "nonterminal" },
              { id: "n3", label: "X", x: 440, y: 130, type: "nonterminal" },
              { id: "n4", label: "B", x: 380, y: 210, type: "nonterminal" },
              { id: "n5", label: "C", x: 500, y: 210, type: "nonterminal" },
              { id: "n6", label: "a", x: 240, y: 210, type: "terminal" },
              { id: "n7", label: "b", x: 380, y: 290, type: "terminal" },
              { id: "n8", label: "c", x: 500, y: 290, type: "terminal" }
            ],
            edges: [
              { from: "n1", to: "n2" },
              { from: "n1", to: "n3" },
              { from: "n2", to: "n6" },
              { from: "n3", to: "n4" },
              { from: "n3", to: "n5" },
              { from: "n4", to: "n7" },
              { from: "n5", to: "n8" }
            ]
          }
        }
      ]
    },

    simplificationSimulation: {
      title: "Simplificação de GLC (Remoção de Símbolos Inúteis)",
      summary: "Acompanhe passo a passo como identificar e eliminar variáveis não-geradoras e inalcançáveis para simplificar a gramática.",
      grammar: {
        productions: [
          { left: "S", right: ["A B", "a"] },
          { left: "A", right: ["a"] },
          { left: "B", right: ["b B"] },
          { left: "C", right: ["c"] }
        ]
      },
      steps: [
        {
          title: "Identificação de Símbolos Inúteis",
          text: "Analisamos o grafo de dependências. <strong>B</strong> é não-gerador (entra em loop infinito B -> bB e nunca produz terminais). <strong>C</strong> é inalcançável (não há caminhos partindo de S que cheguem a C). Ambas são inúteis.",
          grammar: {
            productions: [
              { left: "S", right: ["A B", "a"] },
              { left: "A", right: ["a"] },
              { left: "B", right: ["b B"] },
              { left: "C", right: ["c"] }
            ]
          },
          tree: {
            nodes: [
              { id: "nS", label: "S", x: 300, y: 80, type: "nonterminal" },
              { id: "nA", label: "A", x: 180, y: 200, type: "nonterminal" },
              { id: "nB", label: "B", x: 300, y: 200, type: "nonterminal" },
              { id: "nC", label: "C", x: 540, y: 80, type: "nonterminal" }
            ],
            edges: [
              { from: "nS", to: "nA" },
              { from: "nS", to: "nB" }
            ]
          }
        },
        {
          title: "Eliminação de Não-Geradores (Remoção de B)",
          text: "Como B nunca gera terminais, eliminamos B e qualquer regra que dependa dele. A regra S -> A B é excluída, restando apenas S -> a.",
          grammar: {
            productions: [
              { left: "S", right: ["a"] },
              { left: "A", right: ["a"] },
              { left: "C", right: ["c"] }
            ]
          },
          tree: {
            nodes: [
              { id: "nS", label: "S", x: 300, y: 80, type: "nonterminal" },
              { id: "nA", label: "A", x: 180, y: 200, type: "nonterminal" },
              { id: "nC", label: "C", x: 540, y: 80, type: "nonterminal" }
            ],
            edges: []
          }
        },
        {
          title: "Eliminação de Inalcançáveis (Remoção de A e C)",
          text: "Sem a regra S -> A B, a variável A tornou-se inalcançável a partir de S. A variável C continua isolada. Eliminamos ambas, concluindo a simplificação!",
          grammar: {
            productions: [
              { left: "S", right: ["a"] }
            ]
          },
          tree: {
            nodes: [
              { id: "nS", label: "S", x: 360, y: 160, type: "nonterminal" }
            ],
            edges: []
          }
        }
      ]
    },


    pushdownSimulation: {
      title: "Simulação de Autômato com Pilha (AP)",
      summary: "Veja a fita de entrada e a pilha mudando de estado dinamicamente para reconhecer a linguagem de parênteses balanceados com aninhamentos e cadeias seriais.",
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "q1", x: 350, y: 200 },
          { id: "q2", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε, ε → $" },
          { id: "t1", from: "q1", to: "q1", label: "(, ε → A" },
          { id: "t2", from: "q1", to: "q1", label: "), A → ε" },
          { id: "t3", from: "q1", to: "q2", label: "ε, $ → ε" }
        ]
      },
      steps: [
        {
          title: "Inicialização e Marcador de Fundo",
          text: "O AP inicia em q0 e realiza uma transição espontânea ε para q1 (t0), empilhando o marcador de fundo '$' para monitorar o esvaziamento. Entrada: '(()())'.",
          activeStates: ["q1"],
          activeTransitions: ["t0"],
          stack: ["$"],
          input: "(()())",
          inputPosition: 0
        },
        {
          title: "Empilhando primeira abertura '('",
          text: "Lê '(' na posição 0. A máquina consome o caractere e empilha 'A' na pilha (t1) para registrar a abertura. Pilha: {$, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t1"],
          stack: ["$", "A"],
          input: "(()())",
          inputPosition: 1
        },
        {
          title: "Empilhando segunda abertura '(' (Aninhamento)",
          text: "Lê outro '(' na posição 1. Um segundo símbolo 'A' é empilhado. A pilha agora cresce verticalmente demonstrando o aninhamento. Pilha: {$, A, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t1"],
          stack: ["$", "A", "A"],
          input: "(()())",
          inputPosition: 2
        },
        {
          title: "Desempilhando no fechamento ')'",
          text: "Lê ')' na posição 2. Encontramos o primeiro fechamento. Desempilhamos um símbolo 'A' do topo (t2) para realizar o casamento. Pilha: {$, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t2"],
          stack: ["$", "A"],
          input: "(()())",
          inputPosition: 3
        },
        {
          title: "Empilhando nova abertura '(' (Serial)",
          text: "Lê outro '(' na posição 3. A computação abre um novo bloco de parênteses subsequente, empilhando outro 'A'. Pilha: {$, A, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t1"],
          stack: ["$", "A", "A"],
          input: "(()())",
          inputPosition: 4
        },
        {
          title: "Desempilhando no fechamento ')'",
          text: "Lê ')' na posição 4. Realizamos o casamento do bloco interno desempilhando 'A'. A pilha volta a ter: {$, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t2"],
          stack: ["$", "A"],
          input: "(()())",
          inputPosition: 5
        },
        {
          title: "Desempilhando último fechamento ')'",
          text: "Lê o último ')' na posição 5. Desempilhamos o último 'A', equilibrando todos os parênteses. Resta apenas o marcador '$' na pilha.",
          activeStates: ["q1"],
          activeTransitions: ["t2"],
          stack: ["$"],
          input: "(()())",
          inputPosition: 6
        },
        {
          title: "Remoção do Marcador e Aceitação Final",
          text: "Entrada totalmente lida. O autômato realiza a transição ε (t3) para o estado de aceitação q2, desempilhando '$'. A pilha fica vazia, validando que a cadeia está perfeitamente balanceada!",
          activeStates: ["q2"],
          activeTransitions: ["t3"],
          stack: [],
          input: "(()())",
          inputPosition: 6
        }
      ]
    },

    pushdownSimulationRejeicao: {
      title: "Simulação de Autômato com Pilha (Rejeição)",
      summary: "Veja como a pilha falha em esvaziar quando fornecemos uma cadeia de parênteses desbalanceados: '(()'.",
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "q1", x: 350, y: 200 },
          { id: "q2", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε, ε → $" },
          { id: "t1", from: "q1", to: "q1", label: "(, ε → A" },
          { id: "t2", from: "q1", to: "q1", label: "), A → ε" },
          { id: "t3", from: "q1", to: "q2", label: "ε, $ → ε" }
        ]
      },
      steps: [
        {
          title: "Inicialização e Marcador de Fundo",
          text: "O AP inicia em q0 e realiza uma transição espontânea ε para q1 (t0), empilhando o marcador de fundo '$'. Entrada: '(()'.",
          activeStates: ["q1"],
          activeTransitions: ["t0"],
          stack: ["$"],
          input: "(()",
          inputPosition: 0
        },
        {
          title: "Empilhando primeira abertura '('",
          text: "Lê '(' na posição 0. A máquina consome o caractere e empilha 'A' (t1). Pilha: {$, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t1"],
          stack: ["$", "A"],
          input: "(()",
          inputPosition: 1
        },
        {
          title: "Empilhando segunda abertura '('",
          text: "Lê outro '(' na posição 1. Um segundo símbolo 'A' é empilhado. Pilha: {$, A, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t1"],
          stack: ["$", "A", "A"],
          input: "(()",
          inputPosition: 2
        },
        {
          title: "Desempilhando no fechamento ')'",
          text: "Lê ')' na posição 2. Encontramos um fechamento. Desempilhamos um símbolo 'A' (t2). Pilha: {$, A}.",
          activeStates: ["q1"],
          activeTransitions: ["t2"],
          stack: ["$", "A"],
          input: "(()",
          inputPosition: 3
        },
        {
          title: "Fim da string – Rejeição!",
          text: "A cadeia terminou de ser lida. Para aceitar (ir para q2), o topo da pilha precisaria ser o marcador '$'. No entanto, ainda há um símbolo 'A' no topo (representando um parêntese que nunca foi fechado). Sem transição possível, a palavra é <strong>rejeitada</strong>.",
          activeStates: ["q1"],
          activeTransitions: [],
          stack: ["$", "A"],
          input: "(()",
          inputPosition: 3
        }
      ]
    },

    turingMachine: {
      title: "Máquina de Turing (Verificador de Terminação '1')",
      summary: "Esta simulação interativa exibe a fita infinita e o movimento físico L/R do cabeçote de uma Máquina de Turing sobre uma cadeia de entrada.",
      automaton: {
        states: [
          { id: "qStart", x: 100, y: 200, initial: true },
          { id: "qScan", x: 250, y: 200 },
          { id: "qCheck", x: 400, y: 200 },
          { id: "qAccept", x: 550, y: 150, accepting: true },
          { id: "qReject", x: 550, y: 250 }
        ],
        transitions: [
          { id: "t0", from: "qStart", to: "qScan", label: "0, 0 → R" },
          { id: "t1", from: "qStart", to: "qScan", label: "1, 1 → R" },
          { id: "t2", from: "qScan", to: "qScan", label: "0, 0 → R" },
          { id: "t3", from: "qScan", to: "qScan", label: "1, 1 → R" },
          { id: "t4", from: "qScan", to: "qCheck", label: "⊔, ⊔ → L" },
          { id: "t5", from: "qCheck", to: "qAccept", label: "1, 1 → R" },
          { id: "t6", from: "qCheck", to: "qReject", label: "0, 0 → R" }
        ]
      },
      steps: [
        {
          title: "Início da Máquina de Turing",
          text: "O cabeçote inicia posicionado sobre a célula inicial da fita contendo '01101'. O estado inicial é <strong>qStart</strong>.",
          activeStates: ["qStart"],
          activeTransitions: [],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 0
        },
        {
          title: "Início da Varredura",
          text: "Lê '0' na posição 0. A máquina mantém o símbolo, move o cabeçote para a DIREITA (R) e entra no estado de varredura <strong>qScan</strong> via transição <strong>t0</strong>.",
          activeStates: ["qScan"],
          activeTransitions: ["t0"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 1
        },
        {
          title: "Avançando no estado qScan",
          text: "Lê '1' na posição 1. Mantém '1' e avança para a direita (R) pelo loop <strong>t3</strong>.",
          activeStates: ["qScan"],
          activeTransitions: ["t3"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 2
        },
        {
          title: "Avançando no estado qScan",
          text: "Lê outro '1' na posição 2. Mantém '1' e avança para a direita (R) pelo loop <strong>t3</strong>.",
          activeStates: ["qScan"],
          activeTransitions: ["t3"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 3
        },
        {
          title: "Avançando no estado qScan",
          text: "Lê '0' na posição 3. Mantém '0' e avança para a direita (R) pelo loop <strong>t2</strong>.",
          activeStates: ["qScan"],
          activeTransitions: ["t2"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 4
        },
        {
          title: "Avançando no estado qScan",
          text: "Lê o último caractere real '1' na posição 4. Mantém '1' e avança para a direita (R) pelo loop <strong>t3</strong>.",
          activeStates: ["qScan"],
          activeTransitions: ["t3"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 5
        },
        {
          title: "Leitura do Branco e Retorno",
          text: "Lê o branco '⊔' na posição 5. A máquina atinge o fim da palavra, segue a transição <strong>t4</strong> para o estado de checagem <strong>qCheck</strong> e move o cabeçote para a ESQUERDA (L) para olhar o último caractere real.",
          activeStates: ["qCheck"],
          activeTransitions: ["t4"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 4
        },
        {
          title: "Computação Concluída – Aceitação!",
          text: "Lê '1' na posição 4. Transita via <strong>t5</strong> para <strong>qAccept</strong> e move à direita. A máquina para no estado de aceitação, pois a palavra terminava com '1' com sucesso!",
          activeStates: ["qAccept"],
          activeTransitions: ["t5"],
          tape: ["0", "1", "1", "0", "1", "_"],
          headPosition: 5
        }
      ]
    },

    turingMachineRejeicao: {
      title: "Máquina de Turing (Rejeição ao não terminar em '1')",
      summary: "Simulando o verificador de terminação com uma string que termina em '0' para exibir a rejeição.",
      automaton: {
        states: [
          { id: "qStart", x: 100, y: 200, initial: true },
          { id: "qScan", x: 250, y: 200 },
          { id: "qCheck", x: 400, y: 200 },
          { id: "qAccept", x: 550, y: 150, accepting: true },
          { id: "qReject", x: 550, y: 250 }
        ],
        transitions: [
          { id: "t0", from: "qStart", to: "qScan", label: "0, 0 → R" },
          { id: "t1", from: "qStart", to: "qScan", label: "1, 1 → R" },
          { id: "t2", from: "qScan", to: "qScan", label: "0, 0 → R" },
          { id: "t3", from: "qScan", to: "qScan", label: "1, 1 → R" },
          { id: "t4", from: "qScan", to: "qCheck", label: "⊔, ⊔ → L" },
          { id: "t5", from: "qCheck", to: "qAccept", label: "1, 1 → R" },
          { id: "t6", from: "qCheck", to: "qReject", label: "0, 0 → R" }
        ]
      },
      steps: [
        {
          title: "Início",
          text: "O cabeçote inicia na posição 0 com a entrada '110'. Estado inicial <strong>qStart</strong>.",
          activeStates: ["qStart"],
          activeTransitions: [],
          tape: ["1", "1", "0", "_"],
          headPosition: 0
        },
        {
          title: "Lendo primeiro '1'",
          text: "Lê '1', move R para <strong>qScan</strong> (transição t1).",
          activeStates: ["qScan"],
          activeTransitions: ["t1"],
          tape: ["1", "1", "0", "_"],
          headPosition: 1
        },
        {
          title: "Varredura do segundo '1'",
          text: "Lê '1', mantém-se em <strong>qScan</strong> movendo para R (transição t3).",
          activeStates: ["qScan"],
          activeTransitions: ["t3"],
          tape: ["1", "1", "0", "_"],
          headPosition: 2
        },
        {
          title: "Varredura do '0'",
          text: "Lê '0', mantém-se em <strong>qScan</strong> movendo para R (transição t2).",
          activeStates: ["qScan"],
          activeTransitions: ["t2"],
          tape: ["1", "1", "0", "_"],
          headPosition: 3
        },
        {
          title: "Bateu no branco, voltando 1 posição",
          text: "Lê o branco '⊔'. Vai para <strong>qCheck</strong> e move a fita para a esquerda (L) (transição t4) para verificar qual foi o último símbolo.",
          activeStates: ["qCheck"],
          activeTransitions: ["t4"],
          tape: ["1", "1", "0", "_"],
          headPosition: 2
        },
        {
          title: "Verificando final – Rejeição!",
          text: "O último símbolo encontrado é '0'. A regra diz que só se aceita '1'. A transição <strong>t6</strong> leva a máquina ao estado <strong>qReject</strong>. A cadeia é rejeitada.",
          activeStates: ["qReject"],
          activeTransitions: ["t6"],
          tape: ["1", "1", "0", "_"],
          headPosition: 3
        }
      ]
    },

    turingDeciderSimulation: {
      title: "Simulação de MT Decisora vs. Looping",
      summary: "Veja como um Decisor sempre para em tempo finito respondendo Sim ou Não, e assista a uma MT não-decisora entrar em Loop Infinito no problema da parada.",
      automaton: {
        states: [
          { id: "qPar", x: 150, y: 200, initial: true, accepting: true },
          { id: "qImpar", x: 350, y: 200 },
          { id: "qLoop", x: 550, y: 200 }
        ],
        transitions: [
          { id: "t0", from: "qPar", to: "qImpar", label: "0, 0 → R" },
          { id: "t1", from: "qImpar", to: "qPar", label: "0, 0 → R" },
          { id: "t2", from: "qPar", to: "qPar", label: "1, 1 → R" },
          { id: "t3", from: "qImpar", to: "qImpar", label: "1, 1 → R" },
          { id: "tLoop", from: "qLoop", to: "qLoop", label: "any, any → L/R" }
        ]
      },
      steps: [
        {
          title: "Caso A: MT Decisora (Inicialização)",
          text: "A MT foi projetada para decidir a paridade de zeros. Ela lê a palavra '011010' na fita infinita. Começa em <strong>qPar</strong>.",
          activeStates: ["qPar"],
          activeTransitions: [],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 0
        },
        {
          title: "Lendo primeiro '0'",
          text: "Lê '0'. Transita para o estado <strong>qImpar</strong> (quantidade ímpar de zeros até aqui) via transição <strong>t0</strong> e move o cabeçote para a direita.",
          activeStates: ["qImpar"],
          activeTransitions: ["t0"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 1
        },
        {
          title: "Lendo primeiro '1'",
          text: "Lê '1'. O número de zeros não muda. Segue o auto-loop <strong>t3</strong> mantendo-se em <strong>qImpar</strong>.",
          activeStates: ["qImpar"],
          activeTransitions: ["t3"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 2
        },
        {
          title: "Lendo segundo '1'",
          text: "Lê outro '1'. Permanece em <strong>qImpar</strong> pelo auto-loop <strong>t3</strong> e avança.",
          activeStates: ["qImpar"],
          activeTransitions: ["t3"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 3
        },
        {
          title: "Lendo segundo '0'",
          text: "Lê '0'. O número de zeros torna-se par (2 zeros). Transita de volta para <strong>qPar</strong> pela transição <strong>t1</strong>.",
          activeStates: ["qPar"],
          activeTransitions: ["t1"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 4
        },
        {
          title: "Lendo terceiro '1'",
          text: "Lê '1'. Permanece no estado <strong>qPar</strong> pelo auto-loop <strong>t2</strong> e avança.",
          activeStates: ["qPar"],
          activeTransitions: ["t2"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 5
        },
        {
          title: "Lendo terceiro '0'",
          text: "Lê '0'. O número de zeros volta a ser ímpar (3 zeros no total). Transita para <strong>qImpar</strong> pela transição <strong>t0</strong>.",
          activeStates: ["qImpar"],
          activeTransitions: ["t0"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 6
        },
        {
          title: "Parada e Rejeição do Decisor",
          text: "Lê o espaço em branco '⊔' na fita. Como a entrada acabou e a máquina está em <strong>qImpar</strong> (que não é de aceitação), ela para e <strong>rejeita</strong> a palavra em tempo finito!",
          activeStates: ["qImpar"],
          activeTransitions: [],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 6
        },
        {
          title: "Caso B: O Perigo do Loop Infinito (Passo 1)",
          text: "Se tentarmos decidir se uma MT qualquer para em uma entrada, um suposto decisor universal entrará em loop eterno diante de uma entrada patológica. A simulação entra no estado <strong>qLoop</strong> na posição 0.",
          activeStates: ["qLoop"],
          activeTransitions: ["tLoop"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 0
        },
        {
          title: "Caso B: O Perigo do Loop Infinito (Passo 2)",
          text: "O cabeçote lê '0' na posição 0, mantém o caractere e move-se para a DIREITA (R) na posição 1, permanecendo preso no estado <strong>qLoop</strong>.",
          activeStates: ["qLoop"],
          activeTransitions: ["tLoop"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 1
        },
        {
          title: "Caso B: O Perigo do Loop Infinito (Passo 3)",
          text: "O cabeçote lê '1' na posição 1, mantém o caractere e move-se de volta para a ESQUERDA (L) na posição 0. Esse movimento se repete infinitamente sem nunca parar ou atingir um estado final de aceitação ou rejeição!",
          activeStates: ["qLoop"],
          activeTransitions: ["tLoop"],
          tape: ["0", "1", "1", "0", "1", "0", "_"],
          headPosition: 0
        }
      ]
    },

    mappingReductionSimulation: {
      title: "Animação de Redução por Mapeamento (A ≤_m B)",
      summary: "Visualização didática de como reduzir um problema A a um problema B, usando uma função conversora f que mapeia as instâncias em tempo útil e detalhando o processamento de caracteres.",
      automaton: {
        states: [
          { id: "Entrada_w", x: 120, y: 200, initial: true },
          { id: "Conversor_f", x: 320, y: 200 },
          { id: "Decisor_B", x: 520, y: 200, accepting: true }
        ],
        transitions: [
          { id: "tMapeia", from: "Entrada_w", to: "Conversor_f", label: "Processar w" },
          { id: "tEnvia", from: "Conversor_f", to: "Decisor_B", label: "Enviar f(w)" }
        ]
      },
      steps: [
        {
          title: "Instância de Entrada w",
          text: "Temos uma string de entrada <strong>w = 01</strong>. Queremos decidir se ela pertence ao problema complexo <strong>A</strong>. Começamos no estado <strong>Entrada_w</strong>.",
          activeStates: ["Entrada_w"],
          activeTransitions: [],
          input: "01",
          inputPosition: 0
        },
        {
          title: "Mapeamento pela Função Computável f - Lendo '0'",
          text: "Enviamos a palavra w para o bloco <strong>Conversor_f</strong>. A máquina consome o primeiro caractere '0' e começa a computar o mapeamento.",
          activeStates: ["Conversor_f"],
          activeTransitions: ["tMapeia"],
          input: "01",
          inputPosition: 1
        },
        {
          title: "Mapeamento pela Função Computável f - Lendo '1'",
          text: "O <strong>Conversor_f</strong> consome o segundo caractere '1', finalizando a leitura de w em tempo polinomial.",
          activeStates: ["Conversor_f"],
          activeTransitions: ["tMapeia"],
          input: "01",
          inputPosition: 2
        },
        {
          title: "Geração da Instância Transformada f(w)",
          text: "O conversor gera com sucesso a string equivalente <strong>f(w) = 110</strong>. Esta nova palavra de teste é carregada na entrada do problema B.",
          activeStates: ["Conversor_f"],
          activeTransitions: [],
          input: "110",
          inputPosition: 0
        },
        {
          title: "Decisor de B - Lendo primeiro '1'",
          text: "A string f(w) é enviada ao <strong>Decisor_B</strong> (transição tEnvia). O autômato de B consome o primeiro '1' da entrada.",
          activeStates: ["Decisor_B"],
          activeTransitions: ["tEnvia"],
          input: "110",
          inputPosition: 1
        },
        {
          title: "Decisor de B - Lendo segundo '1'",
          text: "O <strong>Decisor_B</strong> consome o segundo '1' da entrada, avançando na validação de f(w).",
          activeStates: ["Decisor_B"],
          activeTransitions: [],
          input: "110",
          inputPosition: 2
        },
        {
          title: "Decisor de B - Lendo final '0'",
          text: "O <strong>Decisor_B</strong> consome o caractere final '0', completando a varredura completa da cadeia de entrada.",
          activeStates: ["Decisor_B"],
          activeTransitions: [],
          input: "110",
          inputPosition: 3
        },
        {
          title: "Redução Concluída com Sucesso",
          text: "Como o Decisor de B aceitou f(w), concluímos com absoluta certeza lógica que <strong>w ∈ A</strong>. Reduzimos o problema A a B com sucesso e decidimos w!",
          activeStates: ["Decisor_B"],
          activeTransitions: [],
          input: "110",
          inputPosition: 3
        }
      ]
    },

    timeComplexityComparison: {
      title: "Análise Assintótica: MT de 1 Fita vs. 2 Fitas",
      summary: "Assista à diferença brutal de eficiência: a computação quadrática O(n²) de uma MT padrão comparada com o processamento linear O(n) de uma MT com duas fitas.",
      automaton: {
        states: [
          { id: "MT_1_Fita", x: 200, y: 150, initial: true },
          { id: "MT_2_Fitas", x: 450, y: 150, accepting: true }
        ],
        transitions: [
          { id: "tVarre", from: "MT_1_Fita", to: "MT_1_Fita", label: "Volta/Vai" },
          { id: "tParalelo", from: "MT_2_Fitas", to: "MT_2_Fitas", label: "Lê/Escreve" }
        ]
      },
      steps: [
        {
          title: "A Tarefa: Reconhecer a^n b^n (n=2)",
          text: "A palavra na fita de entrada é 'aabb'. Vamos analisar a quantidade de passos necessários para decidir a igualdade de contagem em cada arquitetura.",
          activeStates: ["MT_1_Fita", "MT_2_Fitas"],
          activeTransitions: [],
          tape: ["a", "a", "b", "b", "_"],
          headPosition: 0
        },
        {
          title: "MT de 1 Fita: Processamento Lento O(n²)",
          text: "O cabeçote lê o primeiro 'a', marca com 'X', corre até o final para achar um 'b' correspondente, marca com 'Y', volta até a esquerda e repete. Isso exige <strong>12 transições de fita</strong> para apenas 4 caracteres!",
          activeStates: ["MT_1_Fita"],
          activeTransitions: ["tVarre"],
          tape: ["X", "a", "Y", "b", "_"],
          headPosition: 2
        },
        {
          title: "MT de 2 Fitais: Cópia Linear O(n)",
          text: "Na arquitetura com duas fitas, a máquina realiza o trabalho em tempo linear! Primeiro, o cabeçote lê todos os 'a's da fita 1 e copia-os diretamente para a fita 2 simultaneamente. (Leva apenas 2 passos!).",
          activeStates: ["MT_2_Fitas"],
          activeTransitions: ["tParalelo"],
          tape: ["a", "a", "b", "b", "_"],
          headPosition: 2
        },
        {
          title: "MT de 2 Fitas: Verificação Direta",
          text: "Em seguida, a máquina lê os 'b's na fita 1 enquanto lê e apaga os 'a's da fita 2 em paralelo. A palavra é decidida e aceita com apenas <strong>4 passos no total</strong>! A arquitetura polinomial de MTs é equivalente, mas o tempo é linear.",
          activeStates: ["MT_2_Fitas"],
          activeTransitions: [],
          tape: ["a", "a", "b", "b", "_"],
          headPosition: 4
        }
      ]
    },

    pVsNpSimulation: {
      title: "P vs. NP: Resolução vs. Verificação",
      summary: "Entenda na prática: a complexidade exponencial de resolver o problema do Subconjunto Soma contra a verificação em tempo polinomial linear utilizando um Certificado.",
      automaton: {
        states: [
          { id: "Algoritmo_P", x: 200, y: 200, initial: true },
          { id: "Verificador_NP", x: 500, y: 200, accepting: true }
        ],
        transitions: [
          { id: "tForcaBruta", from: "Algoritmo_P", to: "Algoritmo_P", label: "Testar combinações" },
          { id: "tVerifica", from: "Verificador_NP", to: "Verificador_NP", label: "Somar certificado" }
        ]
      },
      steps: [
        {
          title: "O Problema: Subconjunto Soma",
          text: "Dado o conjunto {2, -3, 5, 8}, queremos decidir se existe um subconjunto cujos elementos somem exatamente 7.",
          activeStates: ["Algoritmo_P", "Verificador_NP"],
          activeTransitions: []
        },
        {
          title: "Abordagem P: Busca Exaustiva Exponencial",
          text: "Sem um certificado, o algoritmo determinístico precisa testar todas as 2^n combinações de subconjuntos possíveis uma a uma: {2}, {2,-3}, {2,5,8}... Isso exige <strong>16 checagens exaustivas</strong>. Para conjuntos grandes, o tempo explode exponencialmente tornando-se tratável em P apenas para pequenos dados.",
          activeStates: ["Algoritmo_P"],
          activeTransitions: ["tForcaBruta"]
        },
        {
          title: "Abordagem NP: Verificação com Certificado",
          text: "Na classe NP, a computação recebe um **Certificado** (uma candidata a resposta): <strong>{2, 5}</strong>. O verificador não precisa buscar a solução. Ele apenas lê o certificado e realiza a soma em tempo útil.",
          activeStates: ["Verificador_NP"],
          activeTransitions: []
        },
        {
          title: "Verificação Polinomial de Sucesso",
          text: "O verificador computa 2 + 5 = 7. Ele valida que 7 = 7 em **uma única operação** (tempo linear polinomial). Isso ilustra por que problemas em NP possuem verificação extremamente rápida e tratável!",
          activeStates: ["Verificador_NP"],
          activeTransitions: ["tVerifica"]
        }
      ]
    },

    satToCliqueSimulation: {
      title: "NP-Completude: Redução de SAT para CLIQUE",
      summary: "Uma redução clássica de complexidade! Veja a fórmula proposicional ser mapeada em triângulos e arestas de um grafo onde o clique de tamanho k revela a valoração lógica consistente.",
      automaton: {
        states: [
          { id: "x1", x: 150, y: 150, initial: true },
          { id: "y1", x: 150, y: 250 },
          { id: "not_x2", x: 450, y: 150 },
          { id: "not_y2", x: 450, y: 250, accepting: true }
        ],
        transitions: [
          { id: "e1", from: "x1", to: "not_y2", label: "aresta" },
          { id: "e2", from: "y1", to: "not_x2", label: "aresta" }
        ]
      },
      steps: [
        {
          title: "Fórmula de Entrada",
          text: "Seja a fórmula de duas cláusulas: <strong>φ = (x ∨ y) ∧ (¬x ∨ ¬y)</strong>. Queremos reduzir a satisfabilidade de φ para o problema do CLIQUE no grafo.",
          activeStates: ["x1", "y1", "not_x2", "not_y2"],
          activeTransitions: []
        },
        {
          title: "Mapeamento das Cláusulas em Vértices",
          text: "Mapeamos os literais de cada cláusula em grupos de vértices. A cláusula 1 (x ∨ y) cria os vértices <strong>x1</strong> e <strong>y1</strong>. A cláusula 2 (¬x ∨ ¬y) cria os vértices <strong>not_x2</strong> e <strong>not_y2</strong>.",
          activeStates: ["x1", "y1", "not_x2", "not_y2"],
          activeTransitions: []
        },
        {
          title: "Conectando Arestas Consistentes",
          text: "Conectamos literais de cláusulas distintas que não são negações diretas um do outro. Criamos as arestas <strong>e1</strong> (x1 para ¬y2) e <strong>e2</strong> (y1 para ¬x2). Note que não há arestas entre literais da mesma cláusula ou literais contraditórios (como x e ¬x).",
          activeStates: ["x1", "y1", "not_x2", "not_y2"],
          activeTransitions: ["e1", "e2"]
        },
        {
          title: "Clique de Tamanho 2 Revela Solução",
          text: "Encontrar um clique de tamanho 2 (número de cláusulas) no grafo nos dá a resposta! O clique ativo {x1, not_y2} seleciona os literais correspondentes, determinando a valoração consistente: <strong>x = Verdadeiro</strong> e <strong>y = Falso</strong>. A fórmula é satisfeita!",
          activeStates: ["x1", "not_y2"],
          activeTransitions: ["e1"]
        }
      ]
    },
    p2CfgDerivation: {
      title: "P2: derivação da palavra abba",
      summary: "Derivação passo a passo de abba pela gramática S -> aSa | bSb | a | b | ε.",
      steps: [
        {
          title: "Símbolo inicial",
          text: "Começamos pelo símbolo inicial <strong>S</strong>. Ainda não há palavra final, porque S é variável.",
          grammar: { productions: [{ left: "Forma", right: ["S"] }] }
        },
        {
          title: "Borda externa",
          text: "Aplicamos <strong>S -> aSa</strong>. A derivação cria a camada simétrica externa: a _ a.",
          grammar: { productions: [{ left: "Forma", right: ["aSa"] }] }
        },
        {
          title: "Camada interna",
          text: "Aplicamos <strong>S -> bSb</strong> no S central. Agora a forma parcial é abSba.",
          grammar: { productions: [{ left: "Forma", right: ["abSba"] }] }
        },
        {
          title: "String vazia",
          text: "Aplicamos <strong>S -> ε</strong>. O símbolo variável desaparece e resta apenas terminal.",
          grammar: { productions: [{ left: "Forma", right: ["abεba"] }] }
        },
        {
          title: "Resultado",
          text: "A palavra final é <strong>abba</strong>, um palíndromo sobre {a,b}.",
          grammar: { productions: [{ left: "Forma", right: ["abba"] }] }
        }
      ]
    },
    p2AmbiguousTree: {
      title: "P2: duas árvores para 4*3+1",
      summary: "Mostra a ambiguidade de uma gramática de expressões ao alternar a operação principal da raiz.",
      steps: [
        {
          title: "Leitura 1: (4*3)+1",
          text: "A raiz separa a expressão pela soma. Primeiro a subárvore esquerda monta <strong>4*3</strong>; depois soma <strong>1</strong>.",
          tree: {
            nodes: [
              { id: "s0", label: "S", x: 360, y: 42, type: "nonterminal" },
              { id: "s1", label: "S", x: 230, y: 118, type: "nonterminal" },
              { id: "plus", label: "+", x: 360, y: 118, type: "terminal" },
              { id: "s2", label: "S", x: 500, y: 118, type: "nonterminal" },
              { id: "n1", label: "N", x: 150, y: 230, type: "nonterminal" },
              { id: "mul", label: "*", x: 230, y: 230, type: "terminal" },
              { id: "n2", label: "N", x: 310, y: 230, type: "nonterminal" },
              { id: "n3", label: "N", x: 500, y: 230, type: "nonterminal" },
              { id: "l4", label: "4", x: 150, y: 295, type: "terminal" },
              { id: "l3", label: "3", x: 310, y: 295, type: "terminal" },
              { id: "l1", label: "1", x: 500, y: 295, type: "terminal" }
            ],
            edges: [
              { from: "s0", to: "s1" }, { from: "s0", to: "plus" }, { from: "s0", to: "s2" },
              { from: "s1", to: "n1" }, { from: "s1", to: "mul" }, { from: "s1", to: "n2" },
              { from: "n1", to: "l4" }, { from: "n2", to: "l3" }, { from: "s2", to: "n3" }, { from: "n3", to: "l1" }
            ]
          }
        },
        {
          title: "Leitura 2: 4*(3+1)",
          text: "A raiz separa a expressão pela multiplicação. A subárvore direita monta <strong>3+1</strong>, gerando outra estrutura para a mesma string.",
          tree: {
            nodes: [
              { id: "s0", label: "S", x: 360, y: 42, type: "nonterminal" },
              { id: "s1", label: "S", x: 230, y: 118, type: "nonterminal" },
              { id: "mul", label: "*", x: 360, y: 118, type: "terminal" },
              { id: "s2", label: "S", x: 500, y: 118, type: "nonterminal" },
              { id: "n1", label: "N", x: 230, y: 230, type: "nonterminal" },
              { id: "n2", label: "N", x: 420, y: 230, type: "nonterminal" },
              { id: "plus", label: "+", x: 500, y: 230, type: "terminal" },
              { id: "n3", label: "N", x: 580, y: 230, type: "nonterminal" },
              { id: "l4", label: "4", x: 230, y: 295, type: "terminal" },
              { id: "l3", label: "3", x: 420, y: 295, type: "terminal" },
              { id: "l1", label: "1", x: 580, y: 295, type: "terminal" }
            ],
            edges: [
              { from: "s0", to: "s1" }, { from: "s0", to: "mul" }, { from: "s0", to: "s2" },
              { from: "s1", to: "n1" }, { from: "n1", to: "l4" },
              { from: "s2", to: "n2" }, { from: "s2", to: "plus" }, { from: "s2", to: "n3" },
              { from: "n2", to: "l3" }, { from: "n3", to: "l1" }
            ]
          }
        }
      ]
    },
    p2DfaEnds00: {
      title: "P2: AFD para strings terminadas em 00",
      summary: "Simulação do AFD que mantém apenas o sufixo relevante para decidir se a entrada termina em 00.",
      automaton: {
        states: [
          { id: "q0", x: 120, y: 160, initial: true },
          { id: "q1", x: 340, y: 160 },
          { id: "q2", x: 560, y: 160, accepting: true }
        ],
        transitions: [
          { id: "q0_q0", from: "q0", to: "q0", label: "1" },
          { id: "q0_q1", from: "q0", to: "q1", label: "0" },
          { id: "q1_q2", from: "q1", to: "q2", label: "0" },
          { id: "q1_q0", from: "q1", to: "q0", label: "1" },
          { id: "q2_q2", from: "q2", to: "q2", label: "0" },
          { id: "q2_q0", from: "q2", to: "q0", label: "1" }
        ]
      },
      steps: [
        { title: "Entrada 1100", text: "Começa em q0. q0 significa: ainda não vi o sufixo 0 relevante.", activeStates: ["q0"], activeTransitions: [], input: "1100", inputPosition: 0 },
        { title: "Lê 1", text: "Em q0 lendo 1, permanece em q0. O sufixo ainda não termina em 0.", activeStates: ["q0"], activeTransitions: ["q0_q0"], input: "1100", inputPosition: 1 },
        { title: "Lê 1 novamente", text: "Outro 1 mantém o autômato em q0.", activeStates: ["q0"], activeTransitions: ["q0_q0"], input: "1100", inputPosition: 2 },
        { title: "Lê 0", text: "Ao ler 0, vai para q1: a entrada vista até aqui termina com exatamente um 0.", activeStates: ["q1"], activeTransitions: ["q0_q1"], input: "1100", inputPosition: 3 },
        { title: "Lê 0 final", text: "q1 lendo 0 vai para q2. Como q2 é final, 1100 é aceita.", activeStates: ["q2"], activeTransitions: ["q1_q2"], input: "1100", inputPosition: 4 }
      ]
    },
    p2PdaAnBn: {
      title: "P2: AP reconhecendo a^n b^n",
      summary: "O AP empilha um marcador para cada a e desempilha um marcador para cada b.",
      automaton: {
        states: [
          { id: "q0", x: 110, y: 170, initial: true },
          { id: "q1", x: 310, y: 170 },
          { id: "q2", x: 510, y: 170 },
          { id: "q3", x: 310, y: 280, accepting: true }
        ],
        transitions: [
          { id: "q0_q1", from: "q0", to: "q1", label: "ε, ε -> $" },
          { id: "q1_q1", from: "q1", to: "q1", label: "a, ε -> #" },
          { id: "q1_q2", from: "q1", to: "q2", label: "b, # -> ε" },
          { id: "q2_q2", from: "q2", to: "q2", label: "b, # -> ε" },
          { id: "q2_q3", from: "q2", to: "q3", label: "ε, $ -> ε" }
        ]
      },
      steps: [
        { title: "Marca base", text: "O AP começa com uma ε-transição e empilha <strong>$</strong> como base.", activeStates: ["q1"], activeTransitions: ["q0_q1"], input: "aaabbb", inputPosition: 0, stack: ["$"] },
        { title: "Primeiro a", text: "Lê a e empilha #. Cada # representa um a lido.", activeStates: ["q1"], activeTransitions: ["q1_q1"], input: "aaabbb", inputPosition: 1, stack: ["$", "#"] },
        { title: "Segundo a", text: "Lê outro a e empilha mais um #.", activeStates: ["q1"], activeTransitions: ["q1_q1"], input: "aaabbb", inputPosition: 2, stack: ["$", "#", "#"] },
        { title: "Terceiro a", text: "Lê o terceiro a e empilha o terceiro #.", activeStates: ["q1"], activeTransitions: ["q1_q1"], input: "aaabbb", inputPosition: 3, stack: ["$", "#", "#", "#"] },
        { title: "Primeiro b", text: "Ao ler b, muda para q2 e desempilha um #.", activeStates: ["q2"], activeTransitions: ["q1_q2"], input: "aaabbb", inputPosition: 4, stack: ["$", "#", "#"] },
        { title: "Segundo b", text: "Lê b e desempilha outro #.", activeStates: ["q2"], activeTransitions: ["q2_q2"], input: "aaabbb", inputPosition: 5, stack: ["$", "#"] },
        { title: "Terceiro b", text: "Lê o último b e desempilha o último #.", activeStates: ["q2"], activeTransitions: ["q2_q2"], input: "aaabbb", inputPosition: 6, stack: ["$"] },
        { title: "Aceitação", text: "A entrada acabou e sobrou apenas $. A ε-transição remove a base e aceita.", activeStates: ["q3"], activeTransitions: ["q2_q3"], input: "aaabbb", inputPosition: 6, stack: [] }
      ]
    },
    p2PumpingCfl: {
      title: "P2: bombeamento para LLCs",
      summary: "Visualização textual do efeito de bombear as partes v e y em s = uvxyz.",
      steps: [
        {
          title: "String base",
          text: "Considere <strong>s = aaabbbccc</strong> para a linguagem {a^n b^n c^n | n >= 0}. Uma divisão didática é u=a, v=aa, x=bbb, y=c, z=cc.",
          grammar: { productions: [{ left: "s", right: ["u v x y z"] }] }
        },
        {
          title: "i = 1",
          text: "Com i=1, a string permanece <strong>aaabbbccc</strong>. As contagens são a=3, b=3, c=3.",
          grammar: { productions: [{ left: "uvxyz", right: ["a aa bbb c cc"] }] }
        },
        {
          title: "i = 0",
          text: "Com i=0, removemos v e y: <strong>abbbcc</strong>. As contagens viram a=1, b=3, c=2; a forma a^n b^n c^n quebra.",
          grammar: { productions: [{ left: "uxz", right: ["a bbb cc"] }] }
        },
        {
          title: "i = 2",
          text: "Com i=2, duplicamos v e y: <strong>aaaaabbbcccc</strong>. As contagens viram a=5, b=3, c=4; a igualdade também quebra.",
          grammar: { productions: [{ left: "uvvxyyz", right: ["a aa aa bbb c c cc"] }] }
        }
      ]
    },
    p2TmEnds0: {
      title: "P2: MT que aceita strings terminadas em 0",
      summary: "Simula a máquina que vai até o branco, volta ao último símbolo real e aceita se ele for 0.",
      automaton: {
        states: [
          { id: "q0", x: 120, y: 150, initial: true },
          { id: "q1", x: 340, y: 150 },
          { id: "qac", x: 560, y: 95, accepting: true },
          { id: "qrej", x: 560, y: 215 }
        ],
        transitions: [
          { id: "q0_q0", from: "q0", to: "q0", label: "0/1 -> D" },
          { id: "q0_q1", from: "q0", to: "q1", label: "_ -> E" },
          { id: "q1_qac", from: "q1", to: "qac", label: "0 -> aceita" },
          { id: "q1_qrej", from: "q1", to: "qrej", label: "1/_ -> rejeita" }
        ]
      },
      steps: [
        { title: "Início", text: "Entrada 1010. A cabeça começa no primeiro símbolo em q0.", activeStates: ["q0"], activeTransitions: [], tape: ["1", "0", "1", "0", "_"], headPosition: 0 },
        { title: "Varre 1", text: "q0 lendo 1 mantém 1 e anda para a direita.", activeStates: ["q0"], activeTransitions: ["q0_q0"], tape: ["1", "0", "1", "0", "_"], headPosition: 1 },
        { title: "Varre 0", text: "q0 lendo 0 mantém 0 e anda para a direita.", activeStates: ["q0"], activeTransitions: ["q0_q0"], tape: ["1", "0", "1", "0", "_"], headPosition: 2 },
        { title: "Varre 1", text: "q0 continua até alcançar o branco após a palavra.", activeStates: ["q0"], activeTransitions: ["q0_q0"], tape: ["1", "0", "1", "0", "_"], headPosition: 3 },
        { title: "Varre último 0", text: "Ainda em q0, lê o último 0 e move para a célula branca.", activeStates: ["q0"], activeTransitions: ["q0_q0"], tape: ["1", "0", "1", "0", "_"], headPosition: 4 },
        { title: "Volta uma posição", text: "Ao ler branco, vai para q1 e move a cabeça para a esquerda, ficando sobre o último símbolo real.", activeStates: ["q1"], activeTransitions: ["q0_q1"], tape: ["1", "0", "1", "0", "_"], headPosition: 3 },
        { title: "Aceita", text: "q1 lê 0. Portanto a string termina em 0 e a máquina aceita.", activeStates: ["qac"], activeTransitions: ["q1_qac"], tape: ["1", "0", "1", "0", "_"], headPosition: 3 }
      ]
    },
    p2TwoTapeCopy: {
      title: "P2: MT de duas fitas copiando entrada",
      summary: "Mostra uma transição lendo duas fitas, escrevendo em duas fitas e movendo as duas cabeças.",
      steps: [
        {
          title: "Configuração inicial",
          text: "A fita 1 contém a entrada 10110. A fita 2 começa em branco.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 0 },
            { label: "Fita 2 - rascunho", cells: ["_", "_", "_", "_", "_", "_"], headPosition: 0 }
          ]
        },
        {
          title: "Copia 1",
          text: "δ(qcopy, 1, _) = (qcopy, 1, 1, D, D). Copia 1 para a fita 2.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 1 },
            { label: "Fita 2 - rascunho", cells: ["1", "_", "_", "_", "_", "_"], headPosition: 1 }
          ]
        },
        {
          title: "Copia 0",
          text: "Lê 0 na fita 1 e branco na fita 2. Escreve 0 na fita 2 e move as duas cabeças.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 2 },
            { label: "Fita 2 - rascunho", cells: ["1", "0", "_", "_", "_", "_"], headPosition: 2 }
          ]
        },
        {
          title: "Copia 1",
          text: "Repete a mesma ideia para o próximo 1.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 3 },
            { label: "Fita 2 - rascunho", cells: ["1", "0", "1", "_", "_", "_"], headPosition: 3 }
          ]
        },
        {
          title: "Copia 1 e 0",
          text: "Ao final das cópias, a fita 2 contém a mesma palavra da fita 1.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 5 },
            { label: "Fita 2 - rascunho", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 5 }
          ]
        },
        {
          title: "Aceitação",
          text: "Quando a fita 1 lê branco, a máquina termina a cópia e aceita.",
          tapes: [
            { label: "Fita 1 - entrada", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 5 },
            { label: "Fita 2 - rascunho", cells: ["1", "0", "1", "1", "0", "_"], headPosition: 5 }
          ]
        }
      ]
    }
  },

  exercises: [
    {
      id: "ex-afd-01",
      topicSlug: "afd",
      sourcePdf: "Aula04.pdf",
      title: "Construção de AFD Simples",
      prompt: "Projete um Autômato Finito Determinístico sobre o alfabeto Σ = {0, 1} que reconheça apenas palavras que começam com o padrão '01'.",
      questions: [
        "Apresente o diagrama de estados do autômato.",
        "Forneça a definição formal de 5-tupla.",
        "Explique o comportamento com as strings de teste '010' e '110'."
      ],
      solution: `
        <p>Para resolver este exercício, precisamos garantir que o autômato rastreie rigorosamente os dois primeiros símbolos lidos.</p>
        <ol>
          <li><strong>q0:</strong> Estado inicial. Se ler '0', avança para q1. Se ler '1', vai para o estado de erro/morte q_erro.</li>
          <li><strong>q1:</strong> Leu '0'. Se ler '1', atinge o estado de aceitação q2. Se ler '0', vai para o estado q_erro.</li>
          <li><strong>q2:</strong> Estado de aceitação. Tendo iniciado com '01', qualquer símbolo subsequente ('0' ou '1') mantém a máquina em q2.</li>
          <li><strong>q_erro:</strong> Estado de erro. Qualquer erro no início prende o processamento neste estado permanentemente.</li>
        </ol>
      `,
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 260, y: 120 },
          { id: "q2", x: 420, y: 120, accepting: true },
          { id: "qE", x: 260, y: 280 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "0" },
          { id: "t1", from: "q0", to: "qE", label: "1" },
          { id: "t2", from: "q1", to: "q2", label: "1" },
          { id: "t3", from: "q1", to: "qE", label: "0" },
          { id: "t4", from: "q2", to: "q2", label: "0,1" },
          { id: "t5", from: "qE", to: "qE", label: "0,1" }
        ]
      }
    },
    {
      id: "ex-afd-02",
      topicSlug: "afd",
      sourcePdf: "Aula04.pdf",
      title: "AFD para Múltiplos de 3",
      prompt: "Projete um AFD que receba uma string binária e aceite se o valor decimal correspondente for um número múltiplo de 3 (considere a palavra vazia ε como valor zero, logo aceita).",
      questions: [
        "Desenhe o diagrama de estados.",
        "Descreva formalmente a transição e a aritmética dos restos por divisão."
      ],
      solution: `
        <p>O autômato calcula o resto da divisão por 3 do número binário acumulado até o momento. Quando lemos um bit à direita de um número binário w, o novo valor é v = 2w + bit. A aritmética de módulos de 3 nos dá os seguintes três estados correspondentes aos restos possíveis:</p>
        <ul>
          <li><strong>q0 (resto 0):</strong> Inicial e aceitação. Se ler '0', 2(0)+0 = 0 -> q0. Se ler '1', 2(0)+1 = 1 -> q1.</li>
          <li><strong>q1 (resto 1):</strong> Se ler '0', 2(1)+0 = 2 -> q2. Se ler '1', 2(1)+1 = 3 ≡ 0 (mod 3) -> q0.</li>
          <li><strong>q2 (resto 2):</strong> Se ler '0', 2(2)+0 = 4 ≡ 1 (mod 3) -> q1. Se ler '1', 2(2)+1 = 5 ≡ 2 (mod 3) -> q2.</li>
        </ul>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true, accepting: true },
          { id: "q1", x: 330, y: 120 },
          { id: "q2", x: 510, y: 200 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q0", label: "0" },
          { id: "t1", from: "q0", to: "q1", label: "1" },
          { id: "t2", from: "q1", to: "q2", label: "0" },
          { id: "t3", from: "q1", to: "q0", label: "1" },
          { id: "t4", from: "q2", to: "q1", label: "0" },
          { id: "t5", from: "q2", to: "q2", label: "1" }
        ]
      }
    },
    {
      id: "ex-afd-03",
      topicSlug: "afd",
      sourcePdf: "Aula05.pdf",
      title: "Interseção de AFD por Produto Cartesiano",
      prompt: "Utilizando a construção de produto cartesiano, projete o AFD que aceita a linguagem que possui quantidade par de 0s E termina em 1.",
      questions: [
        "Indique os estados resultantes do produto dos autômatos de paridade e terminação.",
        "Qual o conjunto de estados de aceitação final?"
      ],
      solution: `
        <p>Seja M1 o autômato de paridade de 0s (estados A = par, B = ímpar) e M2 o de terminação em 1 (estados X = sem terminação 1, Y = terminado em 1). O produto cartesiano gera 4 estados combinados:</p>
        <ol>
          <li><strong>(A, X):</strong> Inicial. Quantidade par de 0s, não termina em 1.</li>
          <li><strong>(A, Y):</strong> Aceitação. Quantidade par de 0s, termina em 1.</li>
          <li><strong>(B, X):</strong> Quantidade ímpar de 0s, não termina em 1.</li>
          <li><strong>(B, Y):</strong> Quantidade ímpar de 0s, termina em 1.</li>
        </ol>
      `,
      automaton: {
        states: [
          { id: "AX", x: 150, y: 120, initial: true },
          { id: "AY", x: 450, y: 120, accepting: true },
          { id: "BX", x: 150, y: 280 },
          { id: "BY", x: 450, y: 280 }
        ],
        transitions: [
          { id: "t0", from: "AX", to: "BX", label: "0" },
          { id: "t1", from: "AX", to: "AY", label: "1" },
          { id: "t2", from: "AY", to: "BX", label: "0" },
          { id: "t3", from: "AY", to: "AY", label: "1" },
          { id: "t4", from: "BX", to: "AX", label: "0" },
          { id: "t5", from: "BX", to: "BY", label: "1" },
          { id: "t6", from: "BY", to: "AX", label: "0" },
          { id: "t7", from: "BY", to: "BY", label: "1" }
        ]
      }
    },
    {
      id: "ex-er-01",
      topicSlug: "expressoes-regulares",
      sourcePdf: "Aula06.pdf",
      title: "Construção de Expressão Regular",
      prompt: "Apresente a Expressão Regular (ER) para a linguagem sobre Σ = {a, b} das palavras que não contém a substring 'bb'.",
      questions: [
        "Escreva a ER correspondente.",
        "Desenhe o AFD equivalente para validação."
      ],
      solution: `
        <p>A expressão regular procurada é: <strong>(a ∪ ba)* ∘ (ε ∪ b)</strong>.</p>
        <p><strong>Explicação:</strong> A expressão garante que qualquer caractere 'b' seja imediatamente seguido por um 'a' (daí a subexpressão <em>ba</em>), ou então que 'b' ocorra de forma isolada na extrema direita da palavra (coberto por <em>(ε ∪ b)</em>).</p>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true, accepting: true },
          { id: "q1", x: 330, y: 120, accepting: true },
          { id: "qE", x: 510, y: 200 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q0", label: "a" },
          { id: "t1", from: "q0", to: "q1", label: "b" },
          { id: "t2", from: "q1", to: "q0", label: "a" },
          { id: "t3", from: "q1", to: "qE", label: "b" },
          { id: "t4", from: "qE", to: "qE", label: "a,b" }
        ]
      }
    },
    {
      id: "ex-er-02",
      topicSlug: "expressoes-regulares",
      sourcePdf: "Aula07.pdf",
      title: "Equivalência ER para AFD",
      prompt: "Dada a Expressão Regular R = a(a ∪ b)*b, crie o AFD correspondente e teste a aceitação das palavras 'ab', 'axb' (inválida) e 'aaab'.",
      questions: [
        "Indique o diagrama do AFD.",
        "Mostre passo a passo a computação para 'aaab'."
      ],
      solution: `
        <p>A expressão regular exige que a palavra comece com 'a' e termine com 'b', com qualquer sequência de 'a's e 'b's no meio.</p>
        <ul>
          <li><strong>q0:</strong> Estado inicial. Precisa ler 'a' para avançar para q1.</li>
          <li><strong>q1:</strong> Leu 'a'. Se ler 'a', permanece em q1. Se ler 'b', vai para o estado de aceitação q2.</li>
          <li><strong>q2:</strong> Estado de aceitação. Se ler 'a', volta para q1 (pois perdeu a terminação em 'b'). Se ler 'b', permanece em q2.</li>
        </ul>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "q1", x: 330, y: 120 },
          { id: "q2", x: 510, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "a" },
          { id: "t1", from: "q1", to: "q1", label: "a" },
          { id: "t2", from: "q1", to: "q2", label: "b" },
          { id: "t3", from: "q2", to: "q1", label: "a" },
          { id: "t4", from: "q2", to: "q2", label: "b" }
        ]
      }
    },
    {
      id: "ex-afnd-01",
      topicSlug: "afnd",
      sourcePdf: "Aula08.pdf",
      title: "Conversão AFND com Epsilon",
      prompt: "Dado um AFND com transição ε que aceita cadeias terminando em '00' ou '11', converta-o para um AFD equivalente.",
      questions: [
        "Apresente o diagrama do AFND.",
        "Descreva a tabela do fecho epsilon e a conversão final."
      ],
      solution: `
        <p>O AFND inicial se ramifica via ε do estado q0 para rastrear os dois padrões em paralelo (q1 para terminação em 00, q3 para terminação em 11). Ao aplicar a construção de subconjuntos com fecho ε, unificamos os ramos em estados singulares determinísticos.</p>
      `,
      automaton: {
        states: [
          { id: "{q0,q1,q3}", x: 150, y: 200, initial: true },
          { id: "{q1,q2}", x: 350, y: 120 },
          { id: "{q3,q4}", x: 350, y: 280 },
          { id: "{q1,q2,aceita}", x: 550, y: 120, accepting: true },
          { id: "{q3,q4,aceita}", x: 550, y: 280, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "{q0,q1,q3}", to: "{q1,q2}", label: "0" },
          { id: "t1", from: "{q0,q1,q3}", to: "{q3,q4}", label: "1" },
          { id: "t2", from: "{q1,q2}", to: "{q1,q2,aceita}", label: "0" },
          { id: "t3", from: "{q1,q2}", to: "{q3,q4}", label: "1" },
          { id: "t4", from: "{q1,q2,aceita}", to: "{q1,q2,aceita}", label: "0" },
          { id: "t5", from: "{q1,q2,aceita}", to: "{q3,q4}", label: "1" },
          { id: "t6", from: "{q3,q4}", to: "{q1,q2}", label: "0" },
          { id: "t7", from: "{q3,q4}", to: "{q3,q4,aceita}", label: "1" }
        ]
      }
    },
    {
      id: "ex-afnd-02",
      topicSlug: "afnd",
      sourcePdf: "Aula09.pdf",
      title: "Minimização de Autômato Finito",
      prompt: "Minimize o AFD resultante que possui estados redundantes após conversão.",
      questions: [
        "Identifique os estados equivalentes.",
        "Apresente o autômato reduzido final."
      ],
      solution: `
        <p>Ao realizar a partição dos estados equivalentes (estados que respondem da mesma forma para qualquer entrada futura), detectamos que os estados redundantes podem ser agrupados, reduzindo o autômato ao seu tamanho mínimo absoluto.</p>
      `,
      automaton: {
        states: [
          { id: "qA", x: 150, y: 200, initial: true },
          { id: "qB", x: 350, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "qA", to: "qB", label: "0" },
          { id: "t1", from: "qA", to: "qA", label: "1" },
          { id: "t2", from: "qB", to: "qB", label: "0,1" }
        ]
      }
    },
    {
      id: "ex-glc-01",
      topicSlug: "gramaticas-livres-contexto",
      sourcePdf: "Aula12.pdf",
      title: "Gramática para Palíndromos",
      prompt: "Projete uma GLC que gere todos os palíndromos sobre o alfabeto Σ = {0, 1}.",
      questions: [
        "Forneça as regras de produção.",
        "Mostre a árvore de derivação para a palavra '0110'."
      ],
      solution: `
        <p>Um palíndromo pode ser definido recursivamente: se w é um palíndromo, então 0w0 e 1w1 também são palíndromos. A base da recursão são os palíndromos de comprimento 0 (ε) e de comprimento 1 (0 ou 1).</p>
        <p><strong>Regras de produção:</strong></p>
        <div class="formula">S → 0S0 | 1S1 | 0 | 1 | ε</div>
        <p><strong>Derivação de '0110':</strong> S ⇒ 0S0 ⇒ 01S10 ⇒ 01(ε)10 = 0110.</p>
      `,
      grammar: {
        productions: [
          { left: "S", right: ["0S0", "1S1", "0", "1", "ε"] }
        ]
      }
    },
    {
      id: "ex-glc-02",
      topicSlug: "gramaticas-livres-contexto",
      sourcePdf: "Aula13.pdf",
      title: "Eliminação de Ambiguidade",
      prompt: "Dada a gramática ambígua de expressões aritméticas: E → E + E | E * E | id. Reescreva-a eliminando a ambiguidade e respeitando a precedência padrão do operador de multiplicação.",
      questions: [
        "Apresente a gramática reescrita.",
        "Mostre a árvore sintática única resultante para a expressão 'id + id * id'."
      ],
      solution: `
        <p>Para remover a ambiguidade, estratificamos as regras introduzindo novas variáveis para representar os termos (T) e fatores (F), forçando a árvore sintática a avaliar a multiplicação com maior prioridade (mais profunda na árvore):</p>
        <div class="grammar-display">
          <div class="production"><span class="non-terminal">E</span> → <span class="production-body">E + T | T</span></div>
          <div class="production"><span class="non-terminal">T</span> → <span class="production-body">T * F | F</span></div>
          <div class="production"><span class="non-terminal">F</span> → <span class="production-body">id | ( E )</span></div>
        </div>
      `,
      grammar: {
        productions: [
          { left: "E", right: ["E + T", "T"] },
          { left: "T", right: ["T * F", "F"] },
          { left: "F", right: ["id"] }
        ]
      }
    },
    {
      id: "ex-ap-01",
      topicSlug: "automato-pilha",
      sourcePdf: "Aula17.pdf",
      title: "Autômato com Pilha para a^n b^n",
      prompt: "Projete o AP que reconhece a linguagem L = { a^n b^n | n ≥ 0 }.",
      questions: [
        "Forneça as regras de transição formalmente.",
        "Descreva a evolução da pilha para a palavra 'aaabbb'."
      ],
      solution: `
        <p>O algoritmo empilha cada símbolo 'a' lido e, ao encontrar o primeiro 'b', passa a desempilhar um 'a' para cada 'b' lido. O marcador de fundo '$' garante que a pilha só esvazie se a quantidade de 'a's e 'b's for perfeitamente igual.</p>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "q1", x: 350, y: 200 },
          { id: "q2", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε, ε → $" },
          { id: "t1", from: "q1", to: "q1", label: "a, ε → a" },
          { id: "t2", from: "q1", to: "q1", label: "b, a → ε" },
          { id: "t3", from: "q1", to: "q2", label: "ε, $ → ε" }
        ]
      }
    },
    {
      id: "ex-ap-02",
      topicSlug: "automato-pilha",
      sourcePdf: "Aula18.pdf",
      title: "AP para Parênteses Aninhados",
      prompt: "Projete um AP para reconhecer sequências balanceadas de parênteses '(' e ')'.",
      questions: [
        "Escreva as transições da fita e da pilha.",
        "Explique como o autômato detecta parênteses mal-formados."
      ],
      solution: `
        <p>A lógica de parênteses aninhados é idêntica ao balanceamento aritmético. Empilhamos na abertura de um parênteses e desempilhamos no fechamento. Se tentarmos desempilhar com a pilha sem marcadores de abertura, ou se a entrada terminar e a pilha ainda tiver elementos residuais, a palavra é rejeitada.</p>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "q1", x: 350, y: 200 },
          { id: "q2", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "ε, ε → $" },
          { id: "t1", from: "q1", to: "q1", label: "(, ε → X" },
          { id: "t2", from: "q1", to: "q1", label: "), X → ε" },
          { id: "t3", from: "q1", to: "q2", label: "ε, $ → ε" }
        ]
      }
    },
    {
      id: "ex-mt-01",
      topicSlug: "maquina-turing",
      sourcePdf: "Aula20.pdf",
      title: "MT para Troca de Bits",
      prompt: "Projete uma Máquina de Turing que substitua todos os 0s por 1s e todos os 1s por 0s em uma cadeia binária, parando no final.",
      questions: [
        "Apresente o diagrama de transições.",
        "Descreva o alfabeto de fita e a evolução para a cadeia '010'."
      ],
      solution: `
        <p>A máquina varre a fita da esquerda para a direita. Para cada símbolo lido, ela executa a inversão e move o cabeçote para a direita (R). Ao encontrar o caractere em branco '⊔', a computação encerra com sucesso.</p>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true },
          { id: "qAccept", x: 450, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q0", label: "0, 1 → R" },
          { id: "t1", from: "q0", to: "q0", label: "1, 0 → R" },
          { id: "t2", from: "q0", to: "qAccept", label: "⊔, ⊔ → L" }
        ]
      }
    },
    {
      id: "ex-mt-02",
      topicSlug: "maquina-turing",
      sourcePdf: "Aula21.pdf",
      title: "MT Reconhecedora de a^n b^n",
      prompt: "Projete a Máquina de Turing que reconhece a linguagem não-regular L = { a^n b^n | n ≥ 1 }.",
      questions: [
        "Apresente o diagrama de estados completo.",
        "Explique a técnica de marcação de caracteres lidos (substituição por X e Y)."
      ],
      solution: `
        <p>A máquina funciona em ciclos de marcação:</p>
        <ol>
          <li>Lê o primeiro 'a' à esquerda, marca-o com 'X' e move para a direita até encontrar o primeiro 'b'.</li>
          <li>Marca o 'b' com 'Y' e move de volta para a esquerda até encontrar o último 'X' gravado.</li>
          <li>Repete o ciclo. Se todas as marcações casarem perfeitamente e não sobrarem 'a's ou 'b's isolados, a máquina aceita a palavra.</li>
        </ol>
      `,
      automaton: {
        states: [
          { id: "q0", x: 100, y: 150, initial: true },
          { id: "q1", x: 250, y: 100 },
          { id: "q2", x: 400, y: 150 },
          { id: "q3", x: 250, y: 250 },
          { id: "qA", x: 550, y: 150, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "a, X → R" },
          { id: "t1", from: "q1", to: "q1", label: "a, a → R / Y, Y → R" },
          { id: "t2", from: "q1", to: "q2", label: "b, Y → L" },
          { id: "t3", from: "q2", to: "q2", label: "a, a → L / Y, Y → L" },
          { id: "t4", from: "q2", to: "q0", label: "X, X → R" },
          { id: "t5", from: "q0", to: "q3", label: "Y, Y → R" },
          { id: "t6", from: "q3", to: "q3", label: "Y, Y → R" },
          { id: "t7", from: "q3", to: "qA", label: "⊔, ⊔ → L" }
        ]
      }
    },
    {
      id: "ex-dec-01",
      topicSlug: "decidibilidade",
      sourcePdf: "Aula22.pdf",
      title: "Prova de Indecidibilidade do Problema da Parada",
      prompt: "Demonstre formalmente, por contradição, que a linguagem A_MT = { <M, w> | M é uma MT que aceita a string w } é indecidível.",
      questions: [
        "Apresente a prova por diagonalização descrita por Alan Turing.",
        "Por que a suposição de um decisor universal falha?"
      ],
      solution: `
        <p>A prova baseia-se em construir uma máquina patológica D que utiliza um suposto decisor universal H:</p>
        <div class="formula">
          D(&lt;M&gt;) = { <br>
          &nbsp;&nbsp;Rode H em &lt;M, &lt;M&gt;&gt; <br>
          &nbsp;&nbsp;Se H aceita, REJEITE. <br>
          &nbsp;&nbsp;Se H rejeita, ACEITE. <br>
          }
        </div>
        <p>Ao rodarmos D com a sua própria descrição como entrada, isto é, D(&lt;D&gt;), obtemos uma contradição lógica insuperável: D aceita a si mesma se, e somente se, D rejeita a si mesma. Logo, o decisor H não pode existir.</p>
      `
    },
    {
      id: "ex-comp-01",
      topicSlug: "np-completude",
      sourcePdf: "Aula27.pdf",
      title: "Redução de 3SAT para CLIQUE",
      prompt: "Explique como o problema 3SAT pode ser reduzido em tempo polinomial para o problema de decisão CLIQUE, provando a NP-completude deste último.",
      questions: [
        "Como os termos e cláusulas da fórmula lógica são mapeados em vértices e arestas de um grafo?",
        "Qual o tamanho do clique exigido para a satisfabilidade?"
      ],
      solution: `
        <p>Para uma fórmula com k cláusulas de 3 termos cada, criamos um vértice para cada literal (3k vértices). Conectamos dois vértices por uma aresta se, e somente se:</p>
        <ol>
          <li>Eles pertencem a cláusulas distintas.</li>
          <li>Eles não são contraditórios (como 'x' e '¬x').</li>
        </ol>
        <p>Um clique de tamanho k no grafo gerado corresponderá exatamente a uma atribuição de valores que torna a fórmula booleana satisfatível.</p>
      `
    },
    {
      id: "ex-p2-q1",
      topicSlug: "gramaticas-livres-contexto",
      sourcePdf: "Exercicios-P2.pdf",
      title: "Lista P2 - Q1: Gramática de Palíndromos",
      prompt: "Veja a gramática livre de contexto a seguir sobre alfabetos a e b:\nS → aSa | bSb | a | b | ε",
      questions: [
        "a. Qual o alfabeto sobre o qual ela está definida?",
        "b. Mostre a derivação de 5 palavras (strings) distintas com essa gramática.",
        "c. Qual o significado do termo 'linguagem gerada pela gramática'?",
        "d. Qual a linguagem gerada por essa gramática?"
      ],
      solution: `
        <p><strong>Respostas para a lista:</strong></p>
        <ul>
          <li><strong>a. Alfabeto:</strong> O alfabeto Σ = {a, b}, composto pelas constantes e símbolos terminais gerados ao final de todas as substituições.</li>
          <li><strong>b. Derivações de 5 palavras:</strong>
            <ol>
              <li>S ⇒ ε (palavra vazia)</li>
              <li>S ⇒ a</li>
              <li>S ⇒ b</li>
              <li>S ⇒ aSa ⇒ aba (com S → b)</li>
              <li>S ⇒ bSb ⇒ baSab ⇒ baaab (com S → a)</li>
            </ol>
          </li>
          <li><strong>c. Significado de 'linguagem gerada':</strong> É o conjunto composto por todas as strings compostas exclusivamente por símbolos terminais que podem ser derivadas a partir da variável inicial S da gramática por meio de substituições sucessivas e finitas.</li>
          <li><strong>d. Linguagem Gerada:</strong> L = { w ∈ {a, b}* | w é um palíndromo }. Ou seja, o conjunto das strings binárias que são idênticas ao ler de trás para frente.</li>
        </ul>
      `,
      grammar: {
        productions: [
          { left: "S", right: ["aSa", "bSb", "a", "b", "ε"] }
        ]
      }
    },
    {
      id: "ex-p2-q2",
      topicSlug: "expressoes-regulares",
      sourcePdf: "Exercicios-P2.pdf",
      title: "Lista P2 - Q2: Linguagem de Terminação em 00",
      prompt: "Veja a linguagem a seguir:\nL = { x ∈ {0,1}* : x termina em 00 }",
      questions: [
        "a. Dê exemplo de 3 strings em L.",
        "b. Essa linguagem é regular? Justifique.",
        "c. Essa linguagem é livre-de-contexto? Justifique."
      ],
      solution: `
        <p><strong>Respostas para a lista:</strong></p>
        <ul>
          <li><strong>a. Exemplos:</strong> As strings '00', '100', '0100' e '1100' pertencem a L.</li>
          <li><strong>b. Regularidade:</strong> Sim, é regular. <strong>Justificativa:</strong> Conseguimos representá-la perfeitamente pela Expressão Regular R = (0 ∪ 1)*00 ou construir um AFD de 3 estados para reconhecê-la.</li>
          <li><strong>c. Livre-de-Contexto:</strong> Sim, é livre-de-contexto. <strong>Justificativa:</strong> Pelo teorema de inclusão, toda linguagem regular é também livre-de-contexto (podendo ser gerada por gramática regular ou aceita por um AP de forma direta).</li>
        </ul>
      `,
      automaton: {
        states: [
          { id: "q_init", x: 150, y: 200, initial: true },
          { id: "q_0", x: 350, y: 200 },
          { id: "q_00", x: 550, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q_init", to: "q_init", label: "1" },
          { id: "t1", from: "q_init", to: "q_0", label: "0" },
          { id: "t2", from: "q_0", to: "q_00", label: "0" },
          { id: "t3", from: "q_0", to: "q_init", label: "1" },
          { id: "t4", from: "q_00", to: "q_00", label: "0" },
          { id: "t5", from: "q_00", to: "q_init", label: "1" }
        ]
      }
    },
    {
      id: "ex-p2-q3",
      topicSlug: "decidibilidade",
      sourcePdf: "Exercicios-P2.pdf",
      title: "Lista P2 - Q3: Verdadeiro ou Falso de LFA",
      prompt: "Indique o valor lógico (Verdadeiro ou Falso) para cada uma das afirmativas de LFA sobre hierarquia, loops e equivalência de computação.",
      questions: [
        "[ ] Toda linguagem regular é também livre-de-contexto.",
        "[ ] Se uma linguagem pode ser reconhecida por Autômato com Pilha (AP), então ela é livre-de-contexto.",
        "[ ] Uma mesma gramática pode gerar duas linguagens diferentes.",
        "[ ] Uma mesma linguagem pode ser gerada por duas gramáticas distintas.",
        "[ ] O Autômato com Pilha pode entrar em loop, de forma que sua computação nunca termina.",
        "[ ] A Máquina de Turing pode entrar em loop, de forma que sua computação nunca termina."
      ],
      solution: `
        <p><strong>Gabarito completo e justificado das afirmações:</strong></p>
        <ol>
          <li><strong>[ V ] Toda linguagem regular é livre-de-contexto:</strong> Verdadeiro. A classe das linguagens regulares é um subconjunto estrito das linguagens livres de contexto (Regulares ⊂ LLC).</li>
          <li><strong>[ V ] Se aceita por AP, então é livre-de-contexto:</strong> Verdadeiro. Autômatos com Pilha não-determinísticos reconhecem exatamente a classe de Linguagens Livres de Contexto.</li>
          <li><strong>[ F ] Uma mesma gramática pode gerar duas linguagens diferentes:</strong> Falso. Por definição matemática, a linguagem gerada por uma gramática é um conjunto único e bem definido de palavras.</li>
          <li><strong>[ V ] Uma linguagem pode ser gerada por duas gramáticas distintas:</strong> Verdadeiro. Existem infinitas gramáticas diferentes que descrevem exatamente a mesma linguagem.</li>
          <li><strong>[ V ] AP pode entrar em loop infinito:</strong> Verdadeiro. Devido a transições ε-espontâneas, o AP pode ciclar sem nunca consumir caracteres da entrada.</li>
          <li><strong>[ V ] Máquina de Turing pode entrar em loop:</strong> Verdadeiro. Por possuir uma fita infinita bidirecional, a MT pode realizar transições em loop indefinidamente para strings inválidas.</li>
        </ol>
      `
    },
    {
      id: "ex-p2-q4",
      topicSlug: "maquina-turing",
      sourcePdf: "Exercicios-P2.pdf",
      title: "Lista P2 - Q4: Máquina de Turing Reconhecedora",
      prompt: "Dada a Máquina de Turing descrita pelo pseudocódigo a seguir sobre o alfabeto Σ = {0,1}:\n1. Ao começar a computação, vá para a direita até encontrar um espaço vazio na fita.\n2. Vá uma posição para a esquerda (aponta para o último caractere real).\n3. Se for '0', aceita (q_aceita). Senão, rejeita (q_rejeita).",
      questions: [
        "(a) Qual linguagem essa máquina aceita?",
        "(b) Desenhe o diagrama dessa MT.",
        "(c) Mostre a 7-tupla formal.",
        "(d) Essa máquina é um decisor? Explique."
      ],
      solution: `
        <p><strong>Respostas para a lista:</strong></p>
        <ul>
          <li><strong>(a) Linguagem:</strong> L = { w ∈ {0,1}* | w termina em 0 }. Aceita apenas strings terminadas no caractere 0.</li>
          <li><strong>(b) Estados no diagrama:</strong>
            <ul>
              <li>q0 (inicial): Varre para a direita lendo 0 ou 1, deixando-os intactos, até ler '⊔' e transitar para q1 (movendo para a esquerda).</li>
              <li>q1 (verificador): Lê o último caractere. Se for 0, transita para q_aceita. Se for 1, transita para q_rejeita.</li>
            </ul>
          </li>
          <li><strong>(c) A 7-tupla formal:</strong> M = (Q, Σ, Γ, δ, q0, q_aceita, q_rejeita), onde Q = {q0, q1, q_aceita, q_rejeita}, Σ = {0, 1}, Γ = {0, 1, ⊔}, e as transições δ são descritas no diagrama.</li>
          <li><strong>(d) É um decisor?</strong> Sim, é um decisor. <strong>Explique:</strong> Para qualquer entrada binária w de comprimento finito n, a máquina avança exatamente n+1 passos à direita, retrocede 1 passo à esquerda e para imediatamente em aceitação ou rejeição. Como não há loops infinitos para nenhuma entrada, ela é um Decisor.</li>
        </ul>
      `,
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 300, y: 200 },
          { id: "qA", x: 500, y: 120, accepting: true },
          { id: "qR", x: 500, y: 280 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q0", label: "0, 0 → R" },
          { id: "t1", from: "q0", to: "q0", label: "1, 1 → R" },
          { id: "t2", from: "q0", to: "q1", label: "⊔, ⊔ → L" },
          { id: "t3", from: "q1", to: "qA", label: "0, 0 → R" },
          { id: "t4", from: "q1", to: "qR", label: "1, 1 → R" }
        ]
      }
    },
    {
      id: "ex-slide-aula04",
      topicSlug: "afd",
      sourcePdf: "Aula04.pdf, p. 19",
      title: "Slide Aula 04: Análise e Simulação de AFD",
      prompt: "Sobre o autômato de decisão binária visto em classe na lousa:\n(a) Descreva suas cinco características (Q, Σ, δ, q₀, F).\n(b) Simule as entradas 10000 e 1010.\n(c) Tente dar uma descrição em língua portuguesa para a característica comum às strings aceitas por esse AFD.",
      questions: [
        "Defina a 5-tupla formal.",
        "Simule as strings fornecidas.",
        "Explique o padrão de linguagem em português."
      ],
      solution: `
        <p>Este exercício extraído diretamente dos slides foca na caracterização de autômatos clássicos:</p>
        <ol>
          <li><strong>Características (Q, Σ, δ, q0, F):</strong>
            <ul>
              <li>Q = {q0, q1}</li>
              <li>Σ = {0, 1}</li>
              <li>q0 = inicial e de aceitação</li>
              <li>F = {q0}</li>
              <li>δ(q0, 0) = q1, δ(q0, 1) = q0, δ(q1, 0) = q0, δ(q1, 1) = q1</li>
            </ul>
          </li>
          <li><strong>Simulações:</strong>
            <ul>
              <li><strong>10000:</strong> q0 →(1) q0 →(0) q1 →(0) q0 →(0) q1 →(0) q0 (Terminou em q0, <strong>ACEITA</strong>).</li>
              <li><strong>1010:</strong> q0 →(1) q0 →(0) q1 →(1) q1 →(0) q0 (Terminou em q0, <strong>ACEITA</strong>).</li>
            </ul>
          </li>
          <li><strong>Descrição em Língua Portuguesa:</strong> O autômato aceita qualquer string binária que contenha uma quantidade <strong>par de zeros</strong> (o estado q1 registra a quantidade ímpar de zeros, e o estado q0 a quantidade par). Os '1's são ignorados por meio de auto-loops.</li>
        </ol>
      `,
      automaton: {
        states: [
          { id: "q0", x: 150, y: 200, initial: true, accepting: true },
          { id: "q1", x: 450, y: 200 }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "0" },
          { id: "t1", from: "q1", to: "q0", label: "0" },
          { id: "t2", from: "q0", to: "q0", label: "1" },
          { id: "t3", from: "q1", to: "q1", label: "1" }
        ]
      }
    },
    {
      id: "ex-slide-aula11",
      topicSlug: "lema-bombeamento-regular",
      sourcePdf: "Aula11.pdf, p. 19",
      title: "Slide Aula 11: Decomposição do Lema do Bombeamento",
      prompt: "Sobre o AFD visto mais cedo na aula, mostre:\n• Uma string que é aceita e que repete estados na computação.\n• Mostre uma decomposição dessa string em xyz com y não vazio, onde y é o pedaço responsável pelo ciclo.\n• Mostre que xy^0z e xy^2z também são aceitas.",
      questions: [
        "Escolha uma string adequada.",
        "Demonstre a partição e o ciclo.",
        "Comprove o bombeamento."
      ],
      solution: `
        <p><strong>Resolução do exercício de entrega do slide:</strong></p>
        <p>Considere o AFD com estados {q0, q1, q2, q3, q4} que aceita strings binárias contendo o padrão '01'.</p>
        <ol>
          <li><strong>Escolha da string:</strong> A string <strong>s = '011'</strong> é aceita pela computação: q0 →(0) q1 →(1) q2 →(1) q2. O estado q2 se repete.</li>
          <li><strong>Partição xyz:</strong>
            <ul>
              <li>x = '01' (leva ao estado do ciclo q2)</li>
              <li>y = '1' (o ciclo em q2)</li>
              <li>z = ε (vazia)</li>
            </ul>
            Satisfaz |y| > 0 e |xy| ≤ 3.
          </li>
          <li><strong>Demonstração do Bombeamento:</strong>
            <ul>
              <li><strong>xy^0z = xz = '01':</strong> q0 →(0) q1 →(1) q2. Termina em q2 (aceita!).</li>
              <li><strong>xy^2z = xyyz = '0111':</strong> q0 →(0) q1 →(1) q2 →(1) q2 →(1) q2. Termina em q2 (aceita!).</li>
            </ul>
            Fica provado de forma didática o princípio de bombeamento do loop!
          </li>
        </ol>
      `,
      automaton: {
        states: [
          { id: "q0", x: 100, y: 200, initial: true },
          { id: "q1", x: 250, y: 200 },
          { id: "q2", x: 400, y: 200, accepting: true }
        ],
        transitions: [
          { id: "t0", from: "q0", to: "q1", label: "0" },
          { id: "t1", from: "q1", to: "q2", label: "1" },
          { id: "t2", from: "q2", to: "q2", label: "0,1" }
        ]
      }
    },
    {
      id: "ex-slide-aula13",
      topicSlug: "gramaticas-livres-contexto",
      sourcePdf: "Aula13.pdf, p. 12",
      title: "Slide Aula 13: União de Linguagens Livres de Contexto",
      prompt: "Sabendo que as linguagens a seguir são livres de contexto:\nL1 = { 0^n 1^n | n ≥ 0 }\nL2 = { 1^n 0^n | n ≥ 0 }\nProjete uma Gramática Livre de Contexto (GLC) que gere a União L = L1 ∪ L2.",
      questions: [
        "Projete as regras geradoras para L1.",
        "Projete as regras geradoras para L2.",
        "Apresente a regra da União final."
      ],
      solution: `
        <p>Para construir a gramática para a união de duas linguagens livres de contexto, definimos variáveis iniciais independentes para cada subgramática e uma variável inicial unificada S que ramifica espontaneamente para qualquer um dos caminhos:</p>
        <div class="grammar-display">
          <div class="production"><span class="non-terminal">S</span> → <span class="production-body">A | B</span></div>
          <div class="production"><span class="non-terminal">A</span> → <span class="production-body">0A1 | ε</span> <span class="comment">(gera L1)</span></div>
          <div class="production"><span class="non-terminal">B</span> → <span class="production-body">1B0 | ε</span> <span class="comment">(gera L2)</span></div>
        </div>
      `,
      grammar: {
        productions: [
          { left: "S", right: ["A", "B"] },
          { left: "A", right: ["0A1", "ε"] },
          { left: "B", right: ["1B0", "ε"] }
        ]
      }
    },
    {
      id: "ex-slide-aula15",
      topicSlug: "gramaticas-livres-contexto",
      sourcePdf: "Aula15.pdf, p. 9",
      title: "Slide Aula 15: GLC para L = { a^i b^j | i > j ≥ 0 }",
      prompt: "Proponha uma Gramática Livre de Contexto (GLC) que gere a linguagem L2 = { a^i b^j | i > j ≥ 0 }.",
      questions: [
        "Como garantir matematicamente que a quantidade de 'a's seja estritamente maior que 'b's?",
        "Escreva as regras sintáticas e mostre uma derivação rápida."
      ],
      solution: `
        <p>Para garantir que i > j, precisamos forçar a gramática a gerar pelo menos um caractere 'a' a mais do que qualquer quantidade de 'b's acoplados. Conseguimos isso dividindo o processo em duas etapas:</p>
        <ol>
          <li>Geramos a base balanceada e emparelhada de a^k b^k via variável A.</li>
          <li>Forçamos a presença de um ou mais caracteres 'a' adicionais à esquerda via variável S.</li>
        </ol>
        <p><strong>Regras de produção:</strong></p>
        <div class="grammar-display">
          <div class="production"><span class="non-terminal">S</span> → <span class="production-body">aS | aA</span></div>
          <div class="production"><span class="non-terminal">A</span> → <span class="production-body">aAb | ε</span></div>
        </div>
        <p><strong>Derivação de 'aab' (i=2, j=1):</strong> S ⇒ aA ⇒ aaAb ⇒ aab (utilizando A → ε).</p>
      `,
      grammar: {
        productions: [
          { left: "S", right: ["aS", "aA"] },
          { left: "A", right: ["aAb", "ε"] }
        ]
      }
    }
  ],
  p2Guide: {
    title: "Guia animado da Prova 2",
    subtitle: "Ordem completa: GLC -> AP -> limites -> MT -> duas fitas",
    description: "Sequência de revisão baseada nas aulas após a Prova 1, com explicações curtas, tabelas de decisão, animações passo a passo e checklist final.",
    sources: "Aulas 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26 e 27; lista Exercicios-P2.",
    sections: [
      {
        id: "glc",
        topicSlug: "gramaticas-livres-contexto",
        title: "1. GLC: Gramática Livre de Contexto",
        navLabel: "1. GLC",
        source: "Aula 13, slides 4-12; Aula 15, slides 2-9; Aula 27, slides 22-28.",
        html: `
          <p>Uma <strong>gramática</strong> é um receituário para produzir strings. Em vez de listar todas as palavras da linguagem, você define regras que geram essas palavras.</p>
          <div class="formula"><strong>Forma formal:</strong> G = (V, Σ, R, S)</div>
          <div class="p2-mini-grid">
            <div class="p2-mini"><strong>V - variáveis</strong><p>Símbolos não terminais que ainda precisam ser substituídos. Ex.: S, A, B, N, D.</p></div>
            <div class="p2-mini"><strong>Σ - alfabeto</strong><p>Símbolos terminais que aparecem nas strings finais. Ex.: {a,b}, {0,1}, {+,*,0,...,9}.</p></div>
            <div class="p2-mini"><strong>R - regras</strong><p>Produções como S -> aSa, que trocam uma variável por terminais e/ou variáveis.</p></div>
            <div class="p2-mini"><strong>S - inicial</strong><p>Variável pela qual toda derivação começa.</p></div>
          </div>
          <h3>Exemplo clássico</h3>
          <pre>G = (V, Σ, R, S)

V = {S}
Σ = {a, b}
R:
  S -> aSa | bSb | a | b | ε
S = S</pre>
          <p>Essa gramática gera palíndromos sobre {a,b}: palavras que lidas da esquerda para a direita são iguais quando lidas da direita para a esquerda.</p>
          <div class="p2-note p2-warn"><strong>Detalhe de prova:</strong> ε representa a string vazia, não é uma letra do alfabeto.</div>
        `
      },
      {
        id: "derivacao",
        topicSlug: "gramaticas-livres-contexto",
        title: "2. Derivação e linguagem gerada L(G)",
        navLabel: "2. Derivação",
        source: "Aula 13, slides 5-12; Aula 15, slides 7-18; Aula 16, slides 2-7; Exercicios-P2 Q1.",
        interactiveAnimation: "cfgDerivation",
        html: `
          <p><strong>Derivar</strong> é aplicar regras passo a passo, começando pelo símbolo inicial, até sobrar apenas símbolos terminais. A <strong>linguagem gerada</strong>, escrita como L(G), é o conjunto de todas as strings que a gramática consegue produzir.</p>
          <h3>Exemplos de strings deriváveis</h3>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>String</th><th>Derivação possível</th></tr></thead>
              <tbody>
                <tr><td>ε</td><td>S => ε</td></tr>
                <tr><td>a</td><td>S => a</td></tr>
                <tr><td>b</td><td>S => b</td></tr>
                <tr><td>aa</td><td>S => aSa => aa</td></tr>
                <tr><td>abba</td><td>S => aSa => abSba => abba</td></tr>
              </tbody>
            </table>
          </div>
          <div class="p2-note p2-success"><strong>Resposta padrão:</strong> a linguagem gerada é o conjunto de todos os palíndromos sobre {a,b}, incluindo a string vazia.</div>
        `
      },
      {
        id: "arvore",
        topicSlug: "gramaticas-livres-contexto",
        title: "3. Árvore de derivação sintática e ambiguidade",
        navLabel: "3. Árvores",
        source: "Aula 16, slides 2-28; Aula 15, slides 18-21.",
        interactiveAnimation: "ambiguousTree",
        html: `
          <p>A <strong>árvore de derivação</strong> representa graficamente uma derivação. A raiz é o símbolo inicial, os nós internos são variáveis, e as folhas formam a string final.</p>
          <div class="p2-mini-grid">
            <div class="p2-mini"><strong>Árvore de derivação</strong><p>Mostra a estrutura da string produzida pela gramática.</p></div>
            <div class="p2-mini"><strong>Gramática ambígua</strong><p>Existe quando uma mesma string pode ter duas árvores de derivação diferentes.</p></div>
          </div>
          <h3>Gramática de expressões</h3>
          <pre>S -> S + S | S * S | N
N -> D | DN
D -> 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</pre>
          <p>A expressão 4*3+1 pode ser interpretada como (4*3)+1 ou como 4*(3+1).</p>
          <div class="p2-note p2-danger"><strong>Na prova:</strong> para mostrar ambiguidade, exiba duas árvores diferentes para a mesma string.</div>
        `
      },
      {
        id: "regular-llc",
        topicSlug: "gramaticas-livres-contexto",
        title: "4. Linguagem regular x linguagem livre de contexto",
        navLabel: "4. Regular x LLC",
        source: "Aula 17, slides 21-25; Aula 27, slides 15-21 e 29; Exercicios-P2 Q2 e Q3.",
        html: `
          <p>Uma linguagem é <strong>regular</strong> se pode ser descrita por ER, gramática regular, AFD ou AFND. Uma linguagem é <strong>livre-de-contexto</strong> se existe uma GLC que a gera.</p>
          <div class="formula">Toda linguagem regular é livre-de-contexto, mas nem toda livre-de-contexto é regular.</div>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Tipo</th><th>Modelo típico</th><th>Exemplo</th><th>Observação</th></tr></thead>
              <tbody>
                <tr><td>Regular</td><td>AFD / AFND / ER</td><td>{x ∈ {0,1}* : x termina em 00}</td><td>Precisa de memória finita.</td></tr>
                <tr><td>Livre-de-contexto</td><td>GLC / AP</td><td>{a^n b^n : n >= 0}</td><td>Precisa comparar quantidades; pilha resolve.</td></tr>
                <tr><td>Não LLC</td><td>Não há AP/GLC</td><td>{a^n b^n c^n : n >= 0}</td><td>Uma pilha não compara três blocos ao mesmo tempo.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="p2-note">Para justificar que uma linguagem regular é LLC: como toda regular é livre-de-contexto, basta provar que ela é regular.</div>
        `
      },
      {
        id: "fechamento",
        topicSlug: "gramaticas-livres-contexto",
        title: "5. Operações com Linguagens Livres-de-Contexto",
        navLabel: "5. Fechamento",
        source: "Aula 17, slides 3-18; Aula 18, slides 3-14 e 30-46; Aula 19, slides 3-32; Aula 20, slides 2-24.",
        html: `
          <p>Fechamento significa: se eu aplico uma operação em linguagens de uma classe, o resultado continua na mesma classe?</p>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Operação</th><th>LLCs são fechadas?</th><th>Como lembrar</th></tr></thead>
              <tbody>
                <tr><td>União L1 ∪ L2</td><td>Sim</td><td>Crie S -> S1 | S2.</td></tr>
                <tr><td>Concatenação L1L2</td><td>Sim</td><td>Crie S -> S1S2.</td></tr>
                <tr><td>Estrela L*</td><td>Sim</td><td>Crie S' -> S'S | ε.</td></tr>
                <tr><td>Reverso L^R</td><td>Sim</td><td>Inverta o lado direito das regras.</td></tr>
                <tr><td>Intersecção L1 ∩ L2</td><td>Não, em geral</td><td>Duas LLCs podem ter intersecção não-LLC.</td></tr>
                <tr><td>Complemento</td><td>Não, em geral</td><td>Se fosse fechada por complemento, seria por intersecção via De Morgan.</td></tr>
              </tbody>
            </table>
          </div>
          <pre>L1 = {a^n b^n c^j : n,j >= 0}
L2 = {a^j b^n c^n : n,j >= 0}

L1 e L2 são LLCs.
Mas L1 ∩ L2 = {a^n b^n c^n : n >= 0}, que não é LLC.</pre>
        `
      },
      {
        id: "afd",
        topicSlug: "afd",
        title: "6. AFD: linguagem que termina em 00",
        navLabel: "6. AFD termina 00",
        source: "Aula 27, slide 29; Exercicios-P2 Q2.",
        interactiveAnimation: "dfaEnds00",
        html: `
          <p>Essa linguagem aparece diretamente nos exercícios da P2.</p>
          <div class="formula">L = { x ∈ {0,1}* : x termina em 00 }</div>
          <p>Ela é regular porque um AFD só precisa lembrar o sufixo relevante: não terminei com 0, terminei com um 0 ou terminei com 00.</p>
        `
      },
      {
        id: "ap",
        topicSlug: "automato-pilha",
        title: "7. Autômato com Pilha (AP)",
        navLabel: "7. AP",
        source: "Aula 17, slides 26-50; Aula 18, slides 16-29; Aula 27, slides 30-34.",
        interactiveAnimation: "pdaAnBn",
        html: `
          <p>Um <strong>Autômato com Pilha</strong> é como um AFND com memória extra. A pilha funciona em LIFO: o último símbolo empilhado é o primeiro a sair.</p>
          <div class="p2-mini-grid three">
            <div class="p2-mini"><strong>Push</strong><p>Empilhar símbolo. Para cada a, empilha #.</p></div>
            <div class="p2-mini"><strong>Pop</strong><p>Desempilhar símbolo. Para cada b, remove #.</p></div>
            <div class="p2-mini"><strong>ε-transição</strong><p>Muda de estado sem consumir entrada.</p></div>
          </div>
          <div class="formula">Exemplo: L = {a^n b^n : n >= 0}</div>
          <p>Ideia: leia os a's e empilhe um marcador para cada um. Depois leia os b's e desempilhe um marcador para cada um. Aceite apenas se a entrada acabar quando a pilha voltar à base.</p>
        `
      },
      {
        id: "glc-ap",
        topicSlug: "automato-pilha",
        title: "8. Equivalência: GLC <-> AP",
        navLabel: "8. GLC <-> AP",
        source: "Aula 20, slides 28-39; Aula 21, slides 2-3; Aula 27, slides 30-34.",
        html: `
          <p>Este é um dos pontos centrais: linguagem livre-de-contexto pode ser vista de duas formas equivalentes.</p>
          <div class="formula">L é LLC ⇔ existe uma GLC que gera L ⇔ existe um AP que reconhece L</div>
          <h3>Intuição de GLC para AP</h3>
          <p>O AP pode simular uma derivação. Ele empilha uma marca de base, depois o símbolo inicial S; quando o topo é variável, escolhe uma regra; quando é terminal, compara com a entrada.</p>
          <h3>Intuição de AP para GLC</h3>
          <p>A partir de um AP, podemos construir uma GLC que descreve formas de ir de um estado a outro consumindo entrada e manipulando a pilha.</p>
          <div class="p2-note">Verdadeiro/falso: se uma linguagem pode ser reconhecida por AP, então ela é livre-de-contexto. <strong>Verdadeiro.</strong></div>
        `
      },
      {
        id: "nao-llc",
        topicSlug: "lema-bombeamento-llc",
        title: "9. Linguagens não livres-de-contexto e Lema do Bombeamento para LLCs",
        navLabel: "9. Não LLC",
        source: "Aula 18, slides 31-35; Aula 19, slides 5-9; Aula 21, slides 6-32; Aula 22, slides 2-12.",
        interactiveAnimation: "pumpingCfl",
        html: `
          <p>O exemplo mais importante é:</p>
          <div class="formula">L = {a^n b^n c^n : n >= 0}</div>
          <p>Essa linguagem exige comparar três quantidades iguais. Uma pilha é boa para comparar dois blocos, como a^n b^n, mas não mantém simultaneamente três contagens.</p>
          <h3>Lema do Bombeamento para LLCs</h3>
          <p>Se L é uma LLC, então toda string suficientemente grande s ∈ L pode ser dividida em:</p>
          <div class="formula">s = u v x y z</div>
          <ul>
            <li>para todo i >= 0, u v^i x y^i z ∈ L;</li>
            <li>v e y não podem ser ambos vazios;</li>
            <li>|vxy| <= p, isto é, o miolo bombeável é limitado.</li>
          </ul>
          <div class="p2-note p2-warn">O lema é usado por contradição: assuma que a linguagem é LLC, escolha uma string grande e mostre que qualquer divisão quebra a linguagem quando bombeada.</div>
        `
      },
      {
        id: "lba",
        topicSlug: "maquina-turing",
        title: "10. Autômato Linearmente Limitado (ALL) e Hierarquia de Chomsky",
        navLabel: "10. ALL",
        source: "Aula 12, slides 13-14; Aula 13, slides 2-3; Aula 17, slides 21-25; Aula 22, slides 13-25; Aula 27, slides 15-21.",
        html: `
          <p>Depois de ver que AP não reconhece tudo, entra um modelo mais poderoso: o <strong>Autômato Linearmente Limitado</strong>. Ele é parecido com uma MT, mas sua fita é limitada ao tamanho da entrada.</p>
          <div class="p2-mini-grid">
            <div class="p2-mini"><strong>AP</strong><p>Tem pilha. Reconhece linguagens livres-de-contexto.</p></div>
            <div class="p2-mini"><strong>ALL</strong><p>Tem fita limitada. Reconhece linguagens sensíveis ao contexto.</p></div>
          </div>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Classe</th><th>Gramática</th><th>Máquina típica</th><th>Exemplo</th></tr></thead>
              <tbody>
                <tr><td>Regular</td><td>Regular</td><td>AFD/AFND</td><td>termina em 00</td></tr>
                <tr><td>Livre-de-contexto</td><td>GLC</td><td>AP</td><td>a^n b^n</td></tr>
                <tr><td>Sensível ao contexto</td><td>GSC</td><td>ALL</td><td>a^n b^n c^n</td></tr>
                <tr><td>Recursivamente enumerável</td><td>Irrestrita</td><td>Máquina de Turing</td><td>problemas Turing-reconhecíveis</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "problemas",
        topicSlug: "decidibilidade",
        title: "11. Problema computacional, problema de decisão e linguagem",
        navLabel: "11. Problemas",
        source: "Aula 22, slides 26-43; Aula 23, slides 2-18; Aula 24, slides 2-18; Aula 27, slides 3-14.",
        html: `
          <p>Um <strong>problema computacional</strong> tem entradas possíveis e uma resposta associada. Um <strong>problema de decisão</strong> é o caso em que a resposta é SIM ou NÃO.</p>
          <div class="p2-mini-grid">
            <div class="p2-mini"><strong>Problema geral</strong><p>Entrada: número x. Saída: raiz quadrada de x.</p></div>
            <div class="p2-mini"><strong>Problema de decisão</strong><p>Entrada: número n. Saída: SIM se n é primo; NÃO caso contrário.</p></div>
          </div>
          <h3>Por que problema de decisão vira linguagem?</h3>
          <p>Porque podemos considerar a linguagem como o conjunto das entradas cuja resposta é SIM.</p>
          <pre>Problema: "n é primo?"
L_primo = { strings que representam números primos }

Se a entrada representa 7, está na linguagem.
Se a entrada representa 8, não está na linguagem.</pre>
        `
      },
      {
        id: "mt",
        topicSlug: "maquina-turing",
        title: "12. Máquina de Turing (MT)",
        navLabel: "12. MT",
        source: "Aula 22, slides 54-59; Aula 23, slides 19-41; Aula 24, slides 19-41; Aula 26, slides 2-10; Aula 27, slides 35-43; Exercicios-P2 Q4.",
        interactiveAnimation: "tmEnds0",
        html: `
          <p>A Máquina de Turing é um modelo mais poderoso que os autômatos anteriores. Ela tem fita ilimitada, uma cabeça que lê/escreve e um controle de estados.</p>
          <div class="formula">M = (Q, Σ, Γ, δ, s, q<sub>aceita</sub>, q<sub>rejeita</sub>)</div>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Componente</th><th>Significado</th></tr></thead>
              <tbody>
                <tr><td>Q</td><td>Conjunto finito de estados.</td></tr>
                <tr><td>Σ</td><td>Alfabeto de entrada.</td></tr>
                <tr><td>Γ</td><td>Alfabeto de trabalho, incluindo Σ e branco.</td></tr>
                <tr><td>δ</td><td>Função de transição.</td></tr>
                <tr><td>s</td><td>Estado inicial.</td></tr>
                <tr><td>q<sub>aceita</sub></td><td>Estado terminal de aceitação.</td></tr>
                <tr><td>q<sub>rejeita</sub></td><td>Estado terminal de rejeição.</td></tr>
              </tbody>
            </table>
          </div>
          <pre>Q = {q0, q1, qac, qrej}
Σ = {0,1}
Γ = {0,1,_}
s = q0
qaceita = qac
qrejeita = qrej

δ(q0,0) = (q0,0,D)
δ(q0,1) = (q0,1,D)
δ(q0,_) = (q1,_,E)
δ(q1,0) = (qac,0,D)
δ(q1,1) = (qrej,1,D)
δ(q1,_) = (qrej,_,D)</pre>
        `
      },
      {
        id: "mt-decide",
        topicSlug: "decidibilidade",
        title: "13. Turing-reconhecível, Turing-decidível e decisor",
        navLabel: "13. Decidibilidade",
        source: "Aula 23, slides 36-41; Aula 24, slides 36-41; Aula 26, slides 7-10; Aula 27, slides 42-43.",
        html: `
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Conceito</th><th>O que significa</th><th>Possível problema</th></tr></thead>
              <tbody>
                <tr><td>Turing-reconhecível</td><td>Existe MT que aceita toda string da linguagem.</td><td>Fora da linguagem, pode rejeitar ou entrar em loop.</td></tr>
                <tr><td>Turing-decidível</td><td>Existe MT que sempre para: aceita se está em L e rejeita se não está.</td><td>Nenhum loop infinito é permitido.</td></tr>
                <tr><td>Decisor</td><td>Uma MT que decide uma linguagem.</td><td>Tem que parar para toda entrada.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="p2-note">Para a MT que reconhece strings terminadas em 0, ela é decisor porque sempre anda até o fim, volta uma posição e aceita ou rejeita.</div>
        `
      },
      {
        id: "representacao",
        topicSlug: "maquina-turing",
        title: "14. Representação de entradas complexas",
        navLabel: "14. Representações",
        source: "Aula 26, slides 12-23; plano de aula sobre representação de entradas complexas.",
        html: `
          <p>Máquinas de Turing recebem strings. Quando queremos resolver problemas sobre números, grafos ou outras máquinas, precisamos representar esses objetos como strings.</p>
          <div class="table-scroll">
            <table class="p2-table">
              <thead><tr><th>Objeto</th><th>Representação possível</th><th>Linguagem associada</th></tr></thead>
              <tbody>
                <tr><td>Número</td><td>Binário: 7 -> 111</td><td>Strings que representam primos.</td></tr>
                <tr><td>Grafo</td><td>Lista de vértices e arestas em texto</td><td>Strings que representam grafos com caminho s->t.</td></tr>
                <tr><td>Outra MT</td><td>Código da própria máquina</td><td>Base para problemas como parada.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="p2-note p2-warn">A ideia importante não é decorar uma codificação específica, mas entender que qualquer objeto finito pode ser codificado como string.</div>
        `
      },
      {
        id: "duas-fitas",
        topicSlug: "maquina-turing",
        title: "15. Máquina de Turing com duas fitas",
        navLabel: "15. Duas fitas",
        source: "Aula 26, slides 24-28, especialmente MT com múltiplas fitas.",
        interactiveAnimation: "twoTapeCopy",
        html: `
          <p>A MT padrão tem uma fita. Uma MT com múltiplas fitas tem k fitas e k cabeças. A cada passo, a transição observa todos os símbolos sob as cabeças, escreve em todas as fitas e move cada cabeça.</p>
          <div class="formula">δ(q, σ1, σ2) = (q', τ1, τ2, movimento1, movimento2)</div>
          <p>Na versão de duas fitas, a entrada normalmente começa na fita 1, e a fita 2 serve como rascunho. Isso facilita descrever algoritmos, embora não aumente o conjunto de linguagens reconhecíveis.</p>
          <pre>Q = {qcopy, qac}
Σ = {0,1}
Γ = {0,1,_}

δ(qcopy, 0, _) = (qcopy, 0, 0, D, D)
δ(qcopy, 1, _) = (qcopy, 1, 1, D, D)
δ(qcopy, _, _) = (qac,   _, _, D, D)</pre>
        `
      },
      {
        id: "atividade-26-palindromos",
        topicSlug: "maquina-turing",
        title: "16. Atividade 2.6: palíndromos com MT de duas fitas",
        navLabel: "16. Atividade 2.6",
        source: "Atividade 2.6, entrega até 02/06.",
        interactiveAnimation: "twoTapePalindrome",
        html: `
          <p><strong>Enunciado:</strong> escreva um pseudocódigo descrevendo uma Máquina de Turing com duas fitas que decida a linguagem dos palíndromos sobre Σ = {0,1}.</p>
          <div class="formula">L = { x ∈ {0,1}<sup>*</sup> : x<sup>R</sup> = x }</div>
          <p>A <strong>Fita 1</strong> recebe o input. A <strong>Fita 2</strong> começa em branco e será usada para guardar uma cópia delimitada por <code>#</code>. Depois a máquina compara a Fita 1 da esquerda para a direita com a Fita 2 da direita para a esquerda.</p>
          <h3>Resolução por pseudocódigo</h3>
          <pre>Entrada:
  Fita 1: x seguido de branco _
  Fita 2: toda em branco _

Alfabeto de trabalho:
  Γ = {0, 1, #, _}

1. Na Fita 2, escreva # na célula atual.
2. Mova a cabeça da Fita 2 uma célula para a direita.

3. Enquanto a cabeça da Fita 1 lê 0 ou 1:
   a. Seja a o símbolo lido na Fita 1.
   b. Na Fita 2, escreva a na célula atual.
   c. Mova a cabeça da Fita 1 uma célula para a direita.
   d. Mova a cabeça da Fita 2 uma célula para a direita.

4. Quando a cabeça da Fita 1 ler branco _:
   a. Na Fita 2, escreva # na célula atual.

5. Reposicione as cabeças para comparar:
   a. Mova a cabeça da Fita 1 para a esquerda, célula por célula,
      até voltar ao primeiro símbolo do input.
   b. Mova a cabeça da Fita 2 uma célula para a esquerda, saindo do # final,
      e ficando no último símbolo copiado.
   c. Se x = ε, a cabeça da Fita 2 fica no # inicial.

6. Enquanto a cabeça da Fita 1 lê 0 ou 1:
   a. Compare o símbolo da Fita 1 com o símbolo da Fita 2.
   b. Se forem diferentes, rejeite.
   c. Se forem iguais, mantenha os dois símbolos escritos como estão.
   d. Mova a cabeça da Fita 1 uma célula para a direita.
   e. Mova a cabeça da Fita 2 uma célula para a esquerda.

7. Quando a cabeça da Fita 1 ler branco _:
   a. Se a cabeça da Fita 2 lê #, aceite.
   b. Caso contrário, rejeite.</pre>
          <div class="p2-note p2-success"><strong>Por que decide?</strong> A cópia na Fita 2 fica na forma #x#. Comparar a Fita 1 indo para a direita com a Fita 2 indo para a esquerda verifica se cada símbolo de x bate com seu correspondente em x<sup>R</sup>. A máquina sempre para: ou encontra diferença e rejeita, ou termina a comparação e aceita.</div>
        `
      },
      {
        id: "checklist",
        topicSlug: "decidibilidade",
        title: "17. Checklist final para a Prova 2",
        navLabel: "17. Checklist",
        source: "Lista Exercicios-P2 e revisão geral da P2.",
        checklist: [
          "Sei explicar G = (V, Σ, R, S).",
          "Sei identificar alfabeto, variáveis, regras e símbolo inicial.",
          "Sei derivar palavras com uma GLC.",
          "Sei dizer o que é L(G).",
          "Sei reconhecer a gramática dos palíndromos.",
          "Sei montar/interpretar árvore de derivação.",
          "Sei explicar ambiguidade com duas árvores diferentes.",
          "Sei que toda regular é LLC.",
          "Sei justificar que termina em 00 é regular e LLC.",
          "Sei as operações fechadas: união, concatenação, estrela e reverso.",
          "Sei que LLCs não são fechadas por intersecção e complemento.",
          "Sei explicar AP com push/pop e reconhecer a^n b^n.",
          "Sei que GLC e AP são equivalentes para LLC.",
          "Sei por que a^n b^n c^n não é LLC.",
          "Sei a forma do lema do bombeamento para LLCs: uvxyz.",
          "Sei a hierarquia: AFD/AFND, AP, ALL, MT.",
          "Sei o que é problema de decisão e como ele vira linguagem.",
          "Sei a tupla da MT: Q, Σ, Γ, δ, s, qaceita, qrejeita.",
          "Sei simular uma MT simples por pseudocódigo.",
          "Sei diferenciar Turing-reconhecível e Turing-decidível.",
          "Sei explicar MT com duas fitas.",
          "Sei resolver palíndromos com uma MT de duas fitas."
        ],
        html: `
          <h3>Ordem de revisão recomendada</h3>
          <ol>
            <li>Faça a Q1 da lista sem olhar: GLC, alfabeto, derivação, linguagem gerada.</li>
            <li>Faça a Q2: linguagem termina em 00, regular e LLC.</li>
            <li>Faça a Q3: verdadeiro/falso com justificativa curta.</li>
            <li>Faça a Q4: MT do pseudocódigo, linguagem aceita, diagrama, tupla e decisor.</li>
            <li>Revise AP para a^n b^n e MT com duas fitas como reforço conceitual.</li>
          </ol>
        `
      }
    ]
  }
};
