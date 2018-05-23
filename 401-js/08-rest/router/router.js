'use strict';

const router = module.exports = exports = {};

router.routes = {};

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];

methods.forEach((method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(pathname, callback) {
    router.routes[method][pathname] = callback;
  };
});

router.route = (req, res) => {
  let handler = router.routes[req.method][req.url.pathname];
  if ( handler ) {
    return handler(req,res);
  }
  else {
    console.error('NOT_FOUND', req.url.pathname);
    res.writeHead(404);
    res.end();
  }
};