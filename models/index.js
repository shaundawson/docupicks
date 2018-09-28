const Sequelize = require('sequelize');

// connect to the database, and set up some behaviour
const db = new Sequelize({
  database: 'myfavoritethings_dev',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});


module.exports = {
  Movie,
  Director,
  Category,
  Review,
  db,
};


