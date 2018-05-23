'use strict';

const router = require('../router.js');

describe('Router', () => {

  it('Registers routes of multiple types', () => {
    router.get('/', () => true);
    router.post('/api/vi/books', () => true);
    router.patch('/api/vi/books', () => true);
    router.delete('/api/vi/books/:id', () => true);
  });

  it('Registers muliple routes of the same type', () => {
    router.get('/', () => true);
    router.get('/api/vi/books', () => true);
    router.get('/api/vi/authors', () => true);
    router.post('/api/vi/books', () => true);
    router.post('/api/vi/authors', () => true);
    expect(Object.keys(router.routes.GET).length).toEqual(3);
    expect(Object.keys(router.routes.POST).length).toEqual(2);
  });

  it('routes traffic properly', () => {
    router.get('/', () => 'get /');
    let req = {
      method:'GET',
      url: {
        pathname: '/'
      }
    };
    let res = {};

    expect(router.route(req,res)).toEqual('get /');

  });

});
