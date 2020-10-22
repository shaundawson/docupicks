const { Movie } = require('../models/index');

module.exports = {

  async index(req, res, next) {
    try {
      res.locals.movies = await Movie.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async getOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.movies_id, 10);
      const movie = await Movie.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      res.locals.movie = {
        imdbId: movie.imdbId,
        movieTitle: movie.movieTitle,
        type: movie.type,
        releaseYear: movie.releaseYear,
        description: movie.description,
        duration: movie.description,
        trailerUrl: movie.trailer,
        category: movie.category,
        posterImg: movie.posterImg,
      };

      next();
    } catch (e) {
      next(e);
    }
  },

  async create(req, res, next) {
    try {
      const {
       imdbId, movieTitle, type, releaseYear, description, duration, trailerUrl, category, posterImg,
      } = req.body;
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
      const {
        imdbId, movieTitle, type, releaseYear, description, duration, trailerUrl, category,
      } = req.body;
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
      res.locals.movie= movie;
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
