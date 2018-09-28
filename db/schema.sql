-- DROP tables
DROP TABLE IF EXISTS movies_categories_xref;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS houses;
DROP TABLE IF EXISTS colors;

-- CREATE tables
CREATE TABLE movies (
imdb_id SMALLINT PRIMARY KEY,
type VARCHAR(45) NOT NULL,
release_year DATE,
title VARCHAR(128)
duration SMALLINT,
description VARCHAR(255) NOT NULL,
trailer_url VARCHAR(255) UNIQUE,
youtube_url VARCHAR(255) UNIQUE,
netflix_url VARCHAR(255) UNIQUE,
hulu_url VARCHAR(255) UNIQUE,
amazon_prime_url VARCHAR(255) UNIQUE
);

CREATE TABLE directors (
id SERIAL PRIMARY KEY,
name VARCHAR(45) UNIQUE NOT NULL,
imdb_id SMALLINT REFERENCES movies(imdb_id)
);

CREATE TABLE categories (
id SERIAL PRIMARY KEY,
name VARCHAR(45) UNIQUE
);

CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
imdb_id SMALLINT REFERENCES movies(imdb_id),
imdb_rating DECIMAL(10,2),
tomatometer SMALLINT,
metacrtic_score SMALLINT
);

CREATE TABLE movies_categories_xref (
imdb_id SMALLINT REFERENCES movies(imdb_id),
category_id SERIAL REFERENCES categories(id)
);
