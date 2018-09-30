DROP TABLE IF EXISTS movies_categories_xref;
DROP TABLE IF EXISTS networks_movies_xref;
DROP TABLE IF EXISTS directors;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS networks;
DROP TABLE IF EXISTS movies;


CREATE TABLE movies (
imdb_id VARCHAR(9) PRIMARY KEY,
type VARCHAR(45) NOT NULL,
title VARCHAR(128) UNIQUE NOT NULL,
release_year SMALLINT,
description TEXT,
duration SMALLINT,
trailer_url VARCHAR(255)
);

CREATE TABLE networks (
imdb_id VARCHAR(9) REFERENCES movies(imdb_id),
youtube_url VARCHAR(255),
netflix_url VARCHAR(255),
hulu_url VARCHAR(255),
amazon_prime_url VARCHAR(255),
PRIMARY KEY (imdb_id)
);

CREATE TABLE directors (
id SERIAL PRIMARY KEY ,
fname VARCHAR(45) ,
lname VARCHAR(45) ,
movie_title VARCHAR(128) REFERENCES movies(title)
);

CREATE TABLE categories (
id SERIAL PRIMARY KEY ,
imdb_id VARCHAR(9) REFERENCES movies(imdb_id),
main VARCHAR(45),
secondary VARCHAR(45)
);

CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
movie_title VARCHAR(9) REFERENCES movies(title),
imdb_rating DECIMAL(10,1),
tomatometer SMALLINT,
metacrtic_score SMALLINT
);

CREATE TABLE movies_categories_xref (
imdb_id VARCHAR(9) REFERENCES movies(imdb_id),
category_id SERIAL REFERENCES categories(id),
PRIMARY KEY(imdb_id, category_id)
);
