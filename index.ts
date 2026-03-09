import subsetFont from "subset-font";

const batang = await Bun.file("./HCRBatang.ttf").arrayBuffer();
const batangBold = await Bun.file("./HCRBatang-Bold.ttf").arrayBuffer();
const chars = await Bun.file("./glyphs.txt").text();
const boldChars = await Bun.file("./bold-glyphs.txt").text();

const batangSubset = await subsetFont(Buffer.from(batang), chars, {
  targetFormat: "truetype",
});
const batangBoldSubset = await subsetFont(Buffer.from(batangBold), boldChars, {
  targetFormat: "truetype",
});

await Bun.file("./HCRBatang-subset.ttf").write(batangSubset);
console.log(
  `Batang ${(batang.byteLength / 1024).toFixed(1)}KB -> ${(batangSubset.byteLength / 1024).toFixed(1)}KB  `,
);
await Bun.file("./HCRBatang-Bold-subset.ttf").write(batangBoldSubset);
console.log(
  `Batang Bold ${(batangBold.byteLength / 1024).toFixed(1)}KB -> ${(batangBoldSubset.byteLength / 1024).toFixed(1)}KB`,
);
