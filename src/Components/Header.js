import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box"></div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Nepal</span>
            <span className="heading-primary--sub">Land of adventures</span>
          </h1>
          <a href="/" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    );
  }
}
