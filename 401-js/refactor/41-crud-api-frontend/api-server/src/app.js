'use strict';

// 3rd Party Libraries
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Custom Libraries
import router from './api/api.js';
import authRouter from './auth/router.js';

// Custom Middleware
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

// App level middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Our API Routes
app.use(authRouter);
app.use(router);

// Errors and 404's
app.use(notFound);
app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if(! server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log(`Server up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};
