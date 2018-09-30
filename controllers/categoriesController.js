const { Category } = require('../models/index');
module.exports = {

  async index(req, res, next) {
    try {
      res.locals.categories = await Category.findAll({ rejectOnEmpty: true });
      next();
    } catch (e) {
      next(e);
    }
  },

  async showOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.categories_id, 10);
      res.locals.categories = await Category.findOne({
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
      const { subject } = req.body;
      const newCategory = await Category.create(
        {
          subject,
        },
      );
      res.locals.newId = newCategory.id;
      next();
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.categories_id, 10);
      const newCategory = await Category.findOne({ where: { id } });
      const { subject } = req.body;
      await newCategory.update(
        {
          subject,
        },
      );
      res.locals.newId = newCategory.id;
      next();
    } catch (e) {
      next(e);
    }
  },
  async destroy(req, res, next) {
    try {
      const id = Number.parseInt(req.params.categories_id, 10);
      await Category.destroy({
        where: { id },
      });
      next();
    } catch (e) {
      next(e);
    }
  },

};
