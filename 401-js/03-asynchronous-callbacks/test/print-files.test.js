/* global jest, expect */
'use strict';

// Mock the 'fs' module so that we don't do anything real
let fs = require("fs");
let mockRead = (filename, cb) => {
    cb(null, new Buffer("fake contents from " + filename));
};
jest.spyOn(fs, 'readFile').mockImplementation(mockRead);

const printFiles = require('../lib/print-files');

describe('(UNIT) My Amazing File Printer', () => {

    it('requires an array of files ... returns an error if first arg is not an array', (done) => {

        let files = 'foo';

        printFiles.getContentsFrom(files, (err, data) => {
            expect(err).toBeTruthy();
            done();
        });

    });

    it('requires an array of files ... returns an error if the array is empty', (done) => {

        let files = [];

        printFiles.getContentsFrom(files, (err, data) => {
            expect(err).toBeTruthy();
            done();
        });

    });

    it('requires a callback ... returns an error if second arg is not a function', (done) => {

        let files = [];
        let callback = 'foo';

        printFiles.getContentsFrom(files,callback);

        done();

    });

    it('given an array of files, returns an array of content', (done) => {

        let files = [ '1.txt', '4.txt', '2.txt', '3.txt' ];

        printFiles.getContentsFrom(files, (err, data) => {
            expect(err).toBeNull();
            expect(data instanceof Array).toBeTruthy();
            done();
        });

    });

    it('given an array of files, returns an array of content matching the file(s) content', (done) => {

        let files = [ '1.txt', '4.txt', '2.txt', '3.txt' ];
        let expected = [
            'fake contents from 1.txt',
            'fake contents from 4.txt',
            'fake contents from 2.txt',
            'fake contents from 3.txt'
        ]

        printFiles.getContentsFrom(files, (err, data) => {
            expect(err).toBeNull();
            expect(data).toEqual(expected);
            done();
        });

    });

});
