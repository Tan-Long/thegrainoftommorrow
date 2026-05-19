#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const input = "paddyRice2021.tif";
const outputDir = join("public", "images", "grain");
const cropWindow = {
  width: 1848,
  height: 3518,
  x: 9326,
  y: 6774,
};

const bbox = {
  lonMin: 102.0,
  lonMax: 110.3,
  latMin: 8.0,
  latMax: 23.8,
};

const scenarios = [
  {
    id: "baseline",
    label: "Baseline 2025",
    file: "paddy-baseline-2025.png",
    color: "#5ea95a",
    co2Ppm: 424.32,
    nationalMeanMgKg: 0.21,
    maxMgKg: 0.34,
    increasePercent: 0,
  },
  {
    id: "rcp45",
    label: "RCP4.5 2050",
    file: "paddy-rcp45-2050.png",
    color: "#e0a72d",
    co2Ppm: 526,
    nationalMeanMgKg: 0.268,
    maxMgKg: 0.383,
    increasePercent: 29.3,
  },
  {
    id: "rcp85",
    label: "RCP8.5 2050",
    file: "paddy-rcp85-2050.png",
    color: "#d8532b",
    co2Ppm: 628,
    nationalMeanMgKg: 0.304,
    maxMgKg: 0.427,
    increasePercent: 35.3,
  },
];

function run(args) {
  const result = spawnSync("magick", args, { encoding: "utf8", stdio: "pipe" });
  if (result.status !== 0) {
    throw new Error(`${["magick", ...args].join(" ")}\n${result.stderr || result.stdout}`);
  }
}

if (!existsSync(input)) {
  throw new Error(`Missing ${input}. Place the paddy raster at the repository root before running this script.`);
}

mkdirSync(outputDir, { recursive: true });

const crop = `${cropWindow.width}x${cropWindow.height}+${cropWindow.x}+${cropWindow.y}`;
const maskPath = join(outputDir, "paddy-mask-vietnam.png");

run([input, "-crop", crop, "+repage", "-threshold", "0", "-transparent", "black", maskPath]);

for (const scenario of scenarios) {
  run([maskPath, "-alpha", "extract", "-background", scenario.color, "-alpha", "shape", join(outputDir, scenario.file)]);
}

const metadata = {
  source: input,
  bbox,
  cropWindow,
  rasterDimensions: {
    width: cropWindow.width,
    height: cropWindow.height,
  },
  nodata: 16,
  paddyValue: 1,
  thresholdMgKg: 0.2,
  scenarios,
  note: "Static PNG layers derived from paddyRice2021.tif for GitHub Pages visualization.",
};

writeFileSync(join(outputDir, "paddy-map-metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);

console.log(`Wrote paddy map assets to ${outputDir}`);
