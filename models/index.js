const Sequelize = require('sequelize');

// Connect to the database, and set up some behavior
const db = new Sequelize({
  database: 'docupicks_db',
  dialect: 'postgres',
  define: {
    underscored: true, // underscores instead of capitals
    returning: true, // force to always return values
  },
});


// Models
const Movie = db.define('movies', {
  imdbId: {
    type: Sequelize.STRING(9),
    primaryKey: true,
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
    key: 'trailer_url',
  },
  category: {
    type: Sequelize.STRING(45),
  },
});

const Network = db.define('networks', {
  movieTitle: {
    type: Sequelize.STRING(128),
    primaryKey: true,
  },
  youtubeUrl: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  netflixUrl: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  huluUrl: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  amazonPrimeUrl: {
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
    unique: true,
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

// Relationships


Movie.hasMany(Director);
Director.belongsTo(Movie);

Network.hasMany(Movie);
Movie.belongsTo(Network);

Review.belongsTo(Movie);

Category.belongsToMany(Movie, { through: 'movies_categories_xref' });
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
