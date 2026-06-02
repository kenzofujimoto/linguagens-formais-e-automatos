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
  "p2CfgDerivation",
  "p2AmbiguousTree",
  "p2DfaEnds00",
  "p2PdaAnBn",
  "p2PumpingCfl",
  "p2TmEnds0",
  "p2TwoTapeCopy",
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

for (const animationId of expectedAnimations) {
  assert.ok(data.animations[animationId], `${animationId} should be defined`);
  assert.ok(
    data.animations[animationId].steps?.length > 0,
    `${animationId} should have step-by-step animation data`,
  );
}

const siteJs = fs.readFileSync(sitePath, "utf8");
assert.match(siteJs, /function renderP2Guide\(/);
assert.match(siteJs, /function renderP2Section\(/);

const p2Html = fs.readFileSync(p2PagePath, "utf8");
assert.match(p2Html, /data-view="p2"/);
assert.match(p2Html, /id="p2Guide"/);

console.log("P2 integration checks passed.");
