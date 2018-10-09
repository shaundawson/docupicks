import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from './DefaultLayout';



export default ({ movies }) => (
  <DefaultLayout title = "Docupicks">
  <section className="card-section">
          <div className="columns is-centered">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4"> Movie Title</p>
                      <p className="subtitle is-7">IMDB RATING: 9/10</p>
                    </div>
                  </div>
                  <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                    <a href="#">Watch Trailer</a>
                    <span> | </span>
                    <a href="#">Save To Watchlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                            </figure>
                        </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">Movie Title</p>
                            <p className="subtitle is-7">IMDB RATING: 9/10</p>
                          </div>
                        </div>
                        <div className="content">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                          <a href="#">Watch Trailer</a>
                          <span> | </span>
                          <a href="#">Save To Watchlist</a>
                        </div>
                      </div>
                    </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Movie Title</p>
                      <p className="subtitle is-7">IMDB RATING: 9/10</p>
                    </div>
                  </div>
                  <div className="content">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                    <a href="#">Watch Trailer</a>
                    <span> | </span>
                     <a href="#">Save To Watchlist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="card-section">
          <div className="columns is-centered">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Movie Title </p>
                      <p className="subtitle is-7">IMDB RATING: 9/10</p>
                    </div>
                  </div>
                  <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                    <a href="#">Watch Trailer</a>
                    <span> | </span>
                    <a href="#">Save To Watchlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-2by1">
                                <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                            </figure>
                        </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">Movie Title</p>
                            <p className="subtitle is-7">IMDB RATING: 9/10</p>
                          </div>
                        </div>
                        <div className="content">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                          <a href="#">Watch Trailer</a>
                          <span> | </span>
                          <a href="#">Save To Watchlist</a>
                        </div>
                      </div>
                    </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src="./images/posters/the_staircase.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Movie Title</p>
                      <p className="subtitle is-7">IMDB RATING: 9/10</p>
                    </div>
                  </div>
                  <div className="content">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                    <a href="#">Watch Trailer</a>
                    <span> | </span>
                     <a href="#">Save To Watchlist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
  );

