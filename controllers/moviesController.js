const { Movie } = require('../models/index');
module.exports = {

  async index(req, res, next) {
    try {
      res.locals.movies = await Movie.findAll({ rejectOnEmpty: true });
      next();
    } catch (e) {
      next(e);
    }
  },

  async showOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.movies_id, 10);
      res.locals.movies = await Movie.findOne({
        where:      { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async create(req, res, next) {
    try {
      const { imdbId, movieTitle, type, releaseYear, description, duration, trailerUrl, category } = req.body;
      const newMovie = await Movie.create(
        {
          imdbId,
          movieTitle,
          type,
          releaseYear,
          description,
          duration,
          trailerUrl,
          category,
          posterImg,
        },
      );
      res.locals.newId = newMovie.id;
      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.movies_id, 10);
      const newMovie = await Movie.findOne({ where: { id } });
      const { imdbId, movieTitle, type, releaseYear, description, duration, trailerUrl, category } = req.body;
      await newMovie.update(
        {
          imdbId,
          movieTitle,
          type,
          releaseYear,
          description,
          duration,
          trailerUrl,
          category,
        },
      );
      res.locals.newId = newMovie.id;
      next();
    } catch (e) {
      next(e);
    }
  },
  async destroy(req, res, next) {
    try {
      const id = Number.parseInt(req.params.movies_id, 10);
      await Movie.destroy({
        where: { id },
      });
      next();
    } catch (e) {
      next(e);
    }
  },

};
