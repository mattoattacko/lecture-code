'use strict';

const fs = require('fs');

let getContentsFrom = function(paths, callback) {

    let err = false;

    if( ! (paths instanceof Array && paths.length) || ! (callback instanceof Function) ) {

      if( ! (callback instanceof Function) ) { callback = ()=>{}; }

      err = "Invalid Input Parameters.  Expected array of paths and a callback";

    }

    let contents = [];

    let getIt = function(paths, callback){

      let path = paths.shift();

      path && fs.readFile(path, function(err,data) {

        if ( err ) { return callback(err); }

        contents.push(data.toString());

        return paths.length ? getIt(paths, callback) : callback(err, contents);

      });

    };

    return err ? callback(err) : getIt(paths, callback);

};


module.exports.getContentsFrom = getContentsFrom;
