'use strict';

let requestParser = require('../parser.js');

describe('Request Parser', () => {

  describe('parser()', () => {

    it('requires a request object', () => {
      let req = undefined;
      return requestParser(req)
        .then( response => false )
        .catch(err => expect(err).toBeDefined());
    });

    it('requires a request object with a url', () => {
      let req = {};
      return requestParser(req)
        .then( req => false )
        .catch(err => expect(err).toBeDefined());
    });

    it('given a URL, returns an object', () => {
      let req = { url: 'http://www.here.com/path/to/foo' };
      return requestParser(req)
        .then( request => expect(typeof request.url).toEqual('string') )
        .catch(err => true);
    });

    it('given a URL with a query string, returns an object on the url', () => {
      let req = { url: 'http://www.here.com/path/to/foo?a=b&c=d&e=f' };
      return requestParser(req)
        .then( request => {
          expect(typeof req.url.query).toEqual('object');
          expect(req.url.query.a).toEqual('b');
        })
        .catch( err => true );
    });

  });

});