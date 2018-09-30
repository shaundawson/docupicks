// Bring in express
const express = require('express');
const movieController = require('../controllers/moviesController');
const views = require('../controllers/viewController');

// Invoke the router()
const movieRouter = express.Router({ mergeParams: true });

// everything in this file will be mounted at /movies

movieRouter.route('/')
  .get(movieController.index)
  .post();

movieRouter.route('/:id')
  .get()
  .put()
  .delete();

movieRouter.use();

module.exports = movieRouter;
