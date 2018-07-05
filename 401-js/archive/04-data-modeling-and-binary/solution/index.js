'use strict';
const fileUtils = require('./lib/file.js');
const bitmapParser = require('./lib/bitmap.js');
const transformFile = require('./lib/transform.js');

const transformations = ['invert', 'rotate', 'randomize','frame'];
const cliArgs = process.argv;

let originalFile = process.argv[2] || 'bitmap.bmp';
let newFile = process.argv[3] || 'new.bmp';
let transformation = process.argv[4] || 'invert';


fileUtils.readFile(`${__dirname}/assets/${originalFile}`, function(err,buffer){
  if(err) { throw err; }
  let bitmap = bitmapParser(buffer);

  transformFile( bitmap, transformation, (err, buffer) => {
    let newBuffer = Buffer.concat([bitmap.bmpHeader, bitmap.dibHeader, bitmap.colorPalette, bitmap.pixelArray], bitmap.length);
    fileUtils.writeFile(`${__dirname}/assets/${newFile}`, newBuffer, function(err, data){
      if(err) { throw err; }
      else {
        console.log('Created', `${newFile}`);
      }
    });
  });

});
