const Sequelize = require('sequelize');

//Connect to the database, and set up some behavior
const sequelize = new Sequelize({
  database: 'docupicks_db',
  dialect:  'postgres',
  define:   {
    underscored: true, //underscores instead of capitals
    returning:   true, //force to always return values
  },
});

sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});

// Models
  const Movie = sequelize.define('movies', {
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
      key: 'release_year',
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
    });

  const Network = sequelize.define('networks', {
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

  const Director = sequelize.define('directors', {
    fname: {
      type: Sequelize.STRING(45),
    },
    lname: {
      type: Sequelize.STRING(45),
    },
    movieTitle: {
      type: Sequelize.STRING(128),
      unique: true,
    },
    });

  const Category = sequelize.define('categories', {
    subject: {
      type: Sequelize.STRING(45),
      unique :true,
    },
    });

  const Review = sequelize.define('reviews', {
    imdbRating: {
      type: Sequelize.DECIMAL(10,1),
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

// 1:M
Movie.hasMany(Director);
Director.belongsTo(Movie);

Network.hasMany(Movie);
Movie.belongsTo(Network);

// 1:1
Review.belongsTo(Movie, { foreignKey: 'imdb_id' });

// M:M
Category.belongsToMany(Movie, { through: 'movies_categories_xref' });
Movie.belongsToMany(Category, { through: 'movies_categories_xref' });


// Create the tables in the database
sequelize.sync();

// Export the models from the file
module.exports = {
  Movie,
  Network,
  Director,
  Category,
  Review,
  sequelize,
};

