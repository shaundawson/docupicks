import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => (
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
);

export default Nav;
