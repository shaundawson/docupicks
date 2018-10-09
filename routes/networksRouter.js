// Bring in express
const express = require('express');
const networks = require('../controllers/networksController');
const movies = require('../controllers/moviesController');
const views = require('../controllers/viewController');


// Invoke the router()
const networksRouter = express.Router({ mergeParams: true });

networksRouter.route('/:categories_id/movie')
  .get(movies.index);


networksRouter.route('/:networks_id')
  .get(networks.showOne, views.showOne)
  .put(networks.update, views.handleUpdate)
  .delete(networks.destroy, views.handleDestroy);

networksRouter.route('/')
  .get(networks.index, views.showMovies)
  .post(networks.create, views.handleCreate);

networksRouter.use(views.sendJSON, views.send404);


module.exports = networksRouter;
