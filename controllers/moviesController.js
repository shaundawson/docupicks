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
};
