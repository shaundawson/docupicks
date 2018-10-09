import React from 'react';
import Movie Card from './MovieCard';


import Movies from '../data/movies';


class MovieCard extends React.Component {
  render() {
    return (
         <div className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="./images/posters/the_staircase.jpg" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">{ movieTitle }</p>
                                    <p class="subtitle is-7">{ duration }</p>
                                </div>
                            </div>
                            <div class="content">
                                { description }
                                <a href="#">Watch Trailer</a>
                                <span>&nbsp &nbsp &nbsp</span>
                                <a href="#">Save To Watchlist</a>
                            </div>
                        </div>
                    </div>
                    </div>
    );
  }
}

module.exports = MovieCard;
