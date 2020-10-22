// Bring in express
const express = require('express');
const views = require('../controllers/viewController');
const movies = require('../controllers/moviesController');
const category  = require ('../controllers/categoriesController');
const networks  = require ('../controllers/networksController');


// Invoke the router()
const movieRouter = express.Router({ mergeParams: true });

movietRouter.route('/:id/edit')
.get(movies.getOneMovie, views.showEditPage)
.put(movies.update, views.handleUpdate, views.badUpdate);

movieRouter.route('/:id')
  .get(movies.getOneMovie, views.showOne)
  .put(movies.update, views.handleUpdate)
  .delete(movies.destroy, views.handleDestroy);


movieRouter.route('/')
  .get(movies.index, views.showMovies)
  .post(movies.create, views.handleCreate, views.badCreate);

movieRouter.use(views.showJSON, views.send404);


module.exports = movieRouter;
