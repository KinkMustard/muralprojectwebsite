import React from "react";
import Link from "gatsby-link";
import Placeholder from "../images/placeholder.jpg";
import bookImg from "../images/book.jpg";
import aroLogo from "../images/arologo.png";
import images from "../images/imageindex";
// import * as ImageCollection from "../images";

const renderImages = () => {
  return images.map(i => {
    return (
      <div key={i}>
        <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
          <img
            src={i}
            alt=""
            className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
          />
        </div>
      </div>
    );
  });
};

const about = () => (
  <div
    className="uk-child-width-1-2@s uk-child-width-1-3@m"
    data-uk-grid="masonry: true"
    data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 100; repeat: true"
    data-uk-sortable="handle: .uk-card"
  >
    {renderImages()}
  </div>
);

export default about;
