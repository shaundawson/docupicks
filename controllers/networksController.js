const { Network } = require('../models/index');
module.exports = {

  async index(req, res, next) {
    try {
      res.locals.networks = await Network.findAll({ rejectOnEmpty: true });
      next();
    } catch (e) {
      next(e);
    }
  },

  async showOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.networks_id, 10);
      res.locals.networks = await Network.findOne({
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
      const { movieTitle, youtube, netflix, hulu, prime } = req.body;
      const newNetwork = await Network.create(
        {
          movieTitle,
          youtube,
          netflix,
          hulu,
          prime,
        },
      );
      res.locals.newId = newNetwork.id;
      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.networks_id, 10);
      const newNetwork = await Network.findOne({ where: { id } });
      const { movieTitle, youtube, netflix, hulu, prime} = req.body;
      await newNetwork.update(
        {
          movieTitle,
          youtube,
          netflix,
          hulu,
          prime,
        },
      );
      res.locals.newId = newNetwork.id;
      next();
    } catch (e) {
      next(e);
    }
  },
  async destroy(req, res, next) {
    try {
      const id = Number.parseInt(req.params.networks_id, 10);
      await Network.destroy({
        where: { id },
      });
      next();
    } catch (e) {
      next(e);
    }
  },
};
