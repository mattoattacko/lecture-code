'use strict';

// Confirm which endian you are
const os = require('os');
console.log(os.endianness());

let buffer = new Buffer('hello world');
console.log(buffer);

// Change one of the bytes using a new hex value
buffer[1] = 0x66;

// Note the change
console.log(buffer);

// This should now say "hfllo world"
console.log(buffer.toString());

// Read from the 4th 32 bit byte
console.log(buffer.readUInt32LE(4));
console.log(buffer[0]);
