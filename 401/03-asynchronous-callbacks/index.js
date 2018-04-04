'use strict';

const printFiles = require("./lib/print-files");

let files = process.argv.slice(2);

printFiles.getContentsFrom(files, (err, data) => {
    if ( err ) { return console.log('Error', err); }
    console.log(data);
});
