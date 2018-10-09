import React from 'react';


export default ({ title, children }) => (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> DOCUPICKS</title>
        <link rel="stylesheet" href="./css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      </head>
      <body>
        <div className="navigation">
           <nav className="navbar is-black">
            <div className="navbar-brand ">
              <a className="navbar-item-height: 35px;" href="/home">
                <img src="/images/misc/logo.png" alt="" />
              </a>
              <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="navbar-item">
              <div className="field">
                <div className="control">
                  <input className="input is-large is-warning is-expanded " type="text" placeholder="Search" />
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-light">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-warning">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="buttons-group-header">
              <a className="button is-link is-active is-medium" href="#">Recently Added</a>
              <a className="button is-link is-active is-medium" href="#">Popular</a>
              <a className="button is-link is-active is-medium" href="#">Genres</a>
              <a className="button is-link is-active is-medium" href="#">Networks</a>
              <a className="button is-link is-active is-medium" href="#">My List</a>
            </div>
          </div>
          <div className = "container">
          { children }
        </div>
        <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" />
        </div>
      </body>
    </html>
  );

