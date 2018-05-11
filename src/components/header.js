import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav
      className="uk-navbar-container"
      data-uk-navbar
      style={{ position: "relative", "z-index": 980 }}
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Kite Runner Mural</a>
          </li>
          <li>
            <Link to="about">About</Link>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active">
                  <a href="#">sample text</a>
                </li>
                <li>
                  <a href="#">sample text</a>
                </li>
                <li>
                  <a href="#">sample text</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Individual Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
