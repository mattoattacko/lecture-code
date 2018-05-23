'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve, reject) => {

    if ( !(req || req.url) ) { reject("Invalid Request Object Sent"); }

    // Always parse the URL
    req.url = url.parse(req.url);
    req.url.query = queryString.parse(req.url.query);

    if (! req.method.match(/PUT|POST|PATCH/) ) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {

      try{
        if ( req.headers['content-type'] === 'application/json' ) {
          req.body = JSON.parse(text);
        }
        resolve(req);
      }
      catch(e) {
        reject(e);
      }
    });

    req.on('error', reject);

  });

};