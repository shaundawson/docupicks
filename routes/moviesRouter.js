// Bring in express
const express = require('express');
const movies = require('../controllers/moviesController');
const views = require('../controllers/viewController');

// Invoke the router()
const moviesRouter = express.Router({ mergeParams: true });

// everything in this file will be mounted at /movies

moviesRouter.route('/:movies_id')
  .get(movies.showOne, views.showOne)
  .put(movies.update, views.handleUpdate)
  .delete(movies.destroy, views.handleDestroy);


moviesRouter.route('/')
  .get(movies.index, views.showMovies)
  .post(movies.create, views.handleCreate);

moviesRouter.use(views.sendJSON, views.send404);


module.exports = moviesRouter;