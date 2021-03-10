const fs = require("fs");
const { load } = require("./index");

const empiresBinaryDat = fs.readFileSync("dat/empires2_x2_p1.dat.gz");

function onload(err, rawEmpiresDat) {
  console.log(err);
  console.log(`Civilisations: ${rawEmpiresDat.civilizations.length}`);
  fs.writeFileSync("dat/empires2_x2_p1.dat.json", JSON.stringify(rawEmpiresDat));
}

load(empiresBinaryDat, { version: "aoe2de" }, onload);
