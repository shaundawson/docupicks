// Bring in express
const express = require('express');
const categories = require('../controllers/categoriesController');
const movies = require('../controllers/moviesController');
const views = require('../controllers/viewController');


// Invoke the router()
const categoriesRouter = express.Router({ mergeParams: true });

categoriesRouter.route('/:categories_id/movie')
  .get(movies.index);


categoriesRouter.route('/:categories_id')
  .get(categories.showOne, views.showOne)
  .put(categories.update, views.handleUpdate)
  .delete(categories.destroy, views.handleDestroy);

categoriesRouter.route('/')
  .get(categories.index, views.showMovies)
  .post(categories.create, views.handleCreate);

categoriesRouter.use(views.sendJSON, views.send404);


module.exports = categoriesRouter;
