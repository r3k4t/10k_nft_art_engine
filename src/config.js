const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "_______";

const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Layer-1" },
      { name: "Layer-2" },
      { name: "Layer-3" },
      { name: "Layer-4" },
     
    ],
  },
];

const format = {
  width: 300,  //  width: 512 
  height: 300,  // height: 512
};

const background = {
  generate: true,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
