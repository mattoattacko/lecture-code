/* global jest, expect */
'use strict';

const { spawn } = require('child_process');

describe('(ACC) My Amazing File Printer', () => {

    it('works!', (done) => {

        let expected = "[ 'This is the contents of file data/1.txt\n','This is the contents of file data/2.txt\n' ]";

        let command = spawn('node', ['index.js', 'data/1.txt', 'data/2.txt'], {cwd:'../'});

        command.stdout.on('data', (data) => {
            expect(data.toString()).toEqual(expected);
        });

        command.on('close', (code) => { done(); });

    });

});
