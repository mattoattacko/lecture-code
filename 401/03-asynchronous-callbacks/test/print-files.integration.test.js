/* global jest, expect */
'use strict';

// Mock the fs module
const fs = require('fs');
let mockRead = (filename, cb) => {
    cb(null, new Buffer("fake contents from " + filename));
};
let spy;

const printFiles = require('../lib/print-files');

describe('(INT) My Amazing File Printer', () => {

    beforeEach( () => {
        spy = jest.spyOn(fs, 'readFile').mockImplementation(mockRead);
    });

    afterEach( () => {
        spy.mockReset();
        spy.mockRestore();
    });

    it('calls fs.readFile with the correct params', (done) => {

        let files = [ '1.txt' ];
        let file = '1.txt';

        printFiles.getContentsFrom(files, (err, data) => {
            // expect.any(function) is required here because the callbacks aren't exact matches
            // so this just type checks it ...
            expect(spy).toHaveBeenCalledWith(file, expect.any(Function));
            done();
        });

    });

    it('calls fs.readFile the right number of times', (done) => {

        let files = [ '1.txt', '4.txt', '2.txt', '3.txt' ];

        printFiles.getContentsFrom(files, (err, data) => {
            expect(spy).toHaveBeenCalledTimes(4);
            done();
        });

    });

});
