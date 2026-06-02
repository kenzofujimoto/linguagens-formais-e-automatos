const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "assets", "js", "site-data.js");
const sitePath = path.join(root, "assets", "js", "site.js");
const p2PagePath = path.join(root, "prova2", "index.html");

function loadSiteData() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(dataPath, "utf8"), context, {
    filename: "site-data.js",
  });
  return context.window.LFA_SITE_DATA;
}

const data = loadSiteData();

const expectedSections = [
  "glc",
  "derivacao",
  "arvore",
  "regular-llc",
  "fechamento",
  "afd",
  "ap",
  "glc-ap",
  "nao-llc",
  "lba",
  "problemas",
  "mt",
  "mt-decide",
  "representacao",
  "duas-fitas",
  "checklist",
];

const expectedAnimations = [
  ["derivacao", "cfgDerivation"],
  ["arvore", "ambiguousTree"],
  ["afd", "dfaEnds00"],
  ["ap", "pdaAnBn"],
  ["nao-llc", "pumpingCfl"],
  ["mt", "tmEnds0"],
  ["duas-fitas", "twoTapeCopy"],
];

assert.ok(data.p2Guide, "LFA_SITE_DATA.p2Guide should exist");
assert.equal(data.p2Guide.title, "Guia animado da Prova 2");
assert.equal(data.p2Guide.sections.length, expectedSections.length);
assert.deepEqual(
  Array.from(data.p2Guide.sections, (section) => section.id),
  expectedSections,
);

for (const section of data.p2Guide.sections) {
  assert.ok(section.title, `${section.id} should have a title`);
  assert.ok(section.topicSlug, `${section.id} should map to a theory topic`);
  assert.ok(section.html || section.checklist, `${section.id} should have renderable content`);
}

for (const [sectionId, animationType] of expectedAnimations) {
  const section = data.p2Guide.sections.find((item) => item.id === sectionId);
  assert.equal(
    section?.interactiveAnimation,
    animationType,
    `${sectionId} should render an interactive P2 animation`,
  );
  assert.ok(
    !section.animationIds,
    `${sectionId} should not use the generic static animation renderer`,
  );
}

const siteJs = fs.readFileSync(sitePath, "utf8");
assert.match(siteJs, /function renderP2Guide\(/);
assert.match(siteJs, /function renderP2Section\(/);
assert.match(siteJs, /function renderP2InteractiveAnimation\(/);
assert.match(siteJs, /function renderP2CfgDerivation\(/);
assert.match(siteJs, /function renderP2AmbiguousTree\(/);
assert.match(siteJs, /function renderP2DfaEnds00\(/);
assert.match(siteJs, /function renderP2PdaAnBn\(/);
assert.match(siteJs, /function renderP2PumpingCfl\(/);
assert.match(siteJs, /function renderP2TmEnds0\(/);
assert.match(siteJs, /function renderP2TwoTapeCopy\(/);
assert.match(siteJs, /data-p2-input="dfa"/);
assert.match(siteJs, /data-p2-input="pda"/);
assert.match(siteJs, /data-p2-input="tm"/);
assert.match(siteJs, /data-p2-input="twoTape"/);

const p2Html = fs.readFileSync(p2PagePath, "utf8");
assert.match(p2Html, /data-view="p2"/);
assert.match(p2Html, /id="p2Guide"/);

console.log("P2 integration checks passed.");
