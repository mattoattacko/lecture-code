'use strict';

import express from 'express';
const router = express.Router();

// modelFinder middleware reads :model in the URLs and susses out the right model to use.
// As you'll see, it gets jacked on to req.model so that you can reference it in your routes
import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

/**
 * Render all records of a model
 */
router.get('/api/v1/:model', (req,res,next) => {
  req.model.find({})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.get('/api/v1/:model/:id', (req,res, next) => {
  req.model.findById(req.params.id)
    .then( data => { sendJSON(res,data);} )
    .catch( next );
});

router.delete('/api/v1/:model/:id', (req,res, next) => {
  req.model.findByIdAndDelete(req.params.id)
    .then( data => { sendJSON(res,{deleted:req.params.id});} )
    .catch( next );
});

router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch( next );
});

/**
 * Simple method to send a JSON response (all of the API methods will use this)
 * @param res
 * @param data
 */
let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

export default router;
