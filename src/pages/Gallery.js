import React from "react";
import Link from "gatsby-link";
import Placeholder from "../images/placeholder.jpg";
import bookImg from "../images/book.jpg";
import aroLogo from "../images/arologo.png";
// import * as ImageCollection from "../images";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/processpics", false, /\.(png|jpe?g|svg)$/)
);

const renderImages = () => {
  return images.map(i => {
    return (
      <div key={i}>
        <div className="uk-card uk-card-hover uk-card-default uk-height-max-small">
          <div className="uk-card-media-top uk-width-1-1 uk-height-1-1">
            <img src={i} alt="" className="uk-width-1-1 uk-height-1-1" />
          </div>
        </div>
      </div>
    );
  });
};

const about = () => (
  <div
    className="uk-child-width-1-5@m uk-grid-small uk-grid-match"
    data-uk-grid
    data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 100; repeat: true"
  >
    {renderImages()}
  </div>
);

export default about;
