'use strict';
import express from 'express';
import notFound from './404.js';
import errorHandler from './error.js';

const app = express();

let logger = (req, res, next) => {
  console.log('logging some stuff');
  next();
};

let eventer = (req, res, next) => {
  console.log('throwing up some events');
  next();
};

app.use('*', logger, eventer);

app.get('/', (req,res,next) => {
  console.log('Route');
  res.status(200);
  res.send('All Good');
});

app.use('*', notFound);

app.use(errorHandler);

app.listen(8080);