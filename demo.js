const loadSvgFile = require("load-svg-file");

const x = async () => {
  //   await loadSvgFile("alphabet.svg");
  //   var imageSize = require("image-size");
  //   var imageDimensions = imageSize("alphabet.svg");
  //   console.log(imageDimensions); // Image
  //   console.log(imageDimensions.width); // 6000
  //   console.log(imageDimensions.height); // 40

  var path = "alphabet.svg";

  var extract = require("extract-svg-path");

  var x = extract( path);
  console.log('x ', x);
  // var svg = parse(x);
  // console.log(svg);
  //   svgDim.get(path, function (err, dimensions) {
  //     if (err) console.log(err);
  //     var height = dimensions.height;
  //     var width = dimensions.width;
  //     console.log("dimensions ", dimensions);
  //     console.log("width ", width, "height ", height);
  //   });
};

x();
