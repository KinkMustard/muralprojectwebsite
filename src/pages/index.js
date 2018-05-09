import React from "react";
import Link from "gatsby-link";
import Hassan from "../images/hassan.png";
import Hassan2 from "../images/hassan2.png";
import Hassan3 from "../images/riphassan.jpg";

const IndexPage = () => (
  <div
    className="uk-position-relative uk-visible-toggle uk-light"
    data-uk-slideshow="animation: push; autoplay: true; autoplay-interval: 3000; min-height: 400; max-height: 700"
  >
    <ul className="uk-slideshow-items">
      <li>
        <img src={Hassan} alt="" data-uk-cover />
        <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
          <h3 className="uk-margin-remove">hassan was raped</h3>
          <p className="uk-margin-remove">sample text</p>
        </div>
      </li>
      <li>
        <img src={Hassan2} alt="" data-uk-cover />
        <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
          <h3 className="uk-margin-remove">hassan was raped</h3>
          <p className="uk-margin-remove">other sample text</p>
        </div>
      </li>
      <li>
        <img src={Hassan3} alt="" data-uk-cover />
        <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
          <h3 className="uk-margin-remove">hassan was raped</h3>
          <p className="uk-margin-remove">sample text</p>
        </div>
      </li>
    </ul>
    <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" />
    <a
      className="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      data-uk-uk-slidenav-previous
      data-uk-slideshow-item="previous"
    />
    <a
      className="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      data-uk-uk-slidenav-next
      data-uk-slideshow-item="next"
    />
  </div>
);

export default IndexPage;
