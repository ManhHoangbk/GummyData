import imageSize from 'image-size';
var extract = require("extract-svg-path");
const fs = require('fs');

export const getInfoImage = (image) =>{
    var imageDimensions = imageSize(image);
    var path = extract(image);

    return {
        width: imageDimensions.width,
        height: imageDimensions.height,
        path: path
    }
}

export const readFileJson = (pathTooFile: string) =>{
    let rawdata = fs.readFileSync('data/' + pathTooFile);
    return JSON.parse(rawdata);
}


export const writeFileJson = (pathTooFile: string, content: string) =>{
    fs.writeFile('data/' + pathTooFile, content, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
}