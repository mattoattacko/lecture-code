'use strict';
const fs = require('fs');

module.exports = exports = {};

exports.readFile = (path, cb)=>{
  fs.readFile(path, (err,data)=>{
    if (err) return cb(err);
    return cb(null, data);
  });
};

exports.writeFile = (fileName, newBuffer,cb)=>{
  fs.writeFile(fileName, newBuffer, (err, data)=>{
    if (err) return cb(err);
    return cb(null, data);
  });
};
