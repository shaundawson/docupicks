const Sequelize = require('sequelize');

// Connect to the database, and set up some behavior
const db = new Sequelize({
  database: 'docupicks_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true, // underscores instead of capitals
    returning: true, // force to always return values
  },
});


// Models
const Movie = db.define('movies', {
  imdbId: {
    type: Sequelize.STRING(9),
    unique: false,
  },
  movieTitle: {
    type: Sequelize.STRING(128),
  },
  type: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  releaseYear: {
    type: Sequelize.STRING(9),
  },
  description: {
    type: Sequelize.TEXT,
  },
  duration: {
    type: Sequelize.SMALLINT,
  },
  trailerUrl: {
    type: Sequelize.STRING(255),
  },
  category: {
    type: Sequelize.STRING(255),
  },
  posterImg: {
    type: Sequelize.TEXT,
  },
  imdbRating: {
    type: Sequelize.DECIMAL(10, 1),
  },
});

const Network = db.define('networks', {
  movieTitle: {
    type: Sequelize.STRING(128),
  },
  youtube: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  netflix: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  hulu: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  prime: {
    type: Sequelize.STRING(255),
  },
});

const Director = db.define('directors', {
  fname: {
    type: Sequelize.STRING(45),
  },
  lname: {
    type: Sequelize.STRING(45),
  },
  movieTitle: {
    type: Sequelize.STRING(128),
  },
});

const Category = db.define('categories', {
  subject: {
    type: Sequelize.STRING(45),
  },
});

const Review = db.define('reviews', {
  imdbRating: {
    type: Sequelize.DECIMAL(10, 1),
    allowNull: true,
  },
  tomatometer: {
    type: Sequelize.SMALLINT,
    allowNull: true,
  },
  metacrticScore: {
    type: Sequelize.SMALLINT,
    allowNull: true,
  },
});

// Associations
Movie.belongsTo(Director, { through: 'movies_directors_xref' });
Director.belongsToMany(Movie, { through: 'movies_categories_xref' });

Network.hasOne(Movie, { foreignKey: 'networkId', foreignKeyConstraint: true });
Review.hasOne(Movie, { foreignKey: 'movieReviewId', foreignKeyConstraint: true });

Category.belongsTo(Movie, { through: 'movies_categories_xref' });
Movie.belongsToMany(Category, { through: 'movies_categories_xref' });

// Export the models from the file
module.exports = {
  Movie,
  Network,
  Director,
  Category,
  Review,
  db,
};
