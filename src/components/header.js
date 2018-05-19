import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav
      className="uk-navbar-container"
      data-uk-navbar="mode: click"
      style={{ position: "relative", "z-index": 980 }}
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Kite Runner Mural</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="gallery">Gallery</Link>
          </li>
          <li>
            <Link to="blogs">Individual Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
