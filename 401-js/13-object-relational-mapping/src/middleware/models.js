'use strict';

/**
 * Dynamically find and set the right model, based on the URL Param
 *    i.e.  /api/vi/people/12345 would result in the model being "people"
 *          assuming there is a valid "people.js" file in the models folder
 * @param req
 * @param res
 * @returns {*}
 */

// Read and require every file in the "models" directory
// This allows us to dynamically create and use models with ONE API.
import requireAll from 'require-dir';
const models = requireAll('../models');
/*
  models: {
    'notes': {default: Function()...},
    'people': {default: Function() ...}
  }
 */
export default (req,res,next) => {
  if ( req.params.model && models[req.params.model] && models[req.params.model].default  ) {
    // /api/v1/:model   http://localhost/api/v1/notes
    // req.params.model = 'notes'
    req.model = models[req.params.model].default;
    next();
  }
  else {
    throw `Model ${req.params.model} not found`;
  }
};
