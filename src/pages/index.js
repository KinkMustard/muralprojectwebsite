import React from "react";
import Link from "gatsby-link";
import paletteImg from "../images/processpics/paletteprocess.jpg";
import documentingImg from "../images/processpics/documenting.jpg";

const IndexPage = () => (
  <div>
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      data-uk-slideshow="animation: push; autoplay: true; autoplay-interval: 8000; min-height: 400; max-height: 700"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={paletteImg} alt="" data-uk-cover />
          <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
            <h3 className="uk-margin-remove">sample text</h3>
            <p className="uk-margin-remove">sample text</p>
          </div>
        </li>
        <li>
          <img src={documentingImg} alt="" data-uk-cover />
          <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
            <h3 className="uk-margin-remove">sample text</h3>
            <p className="uk-margin-remove">sample text</p>
          </div>
        </li>
      </ul>
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
      <div className="uk-position-bottom-center uk-position-small">
        <ul className="uk-thumbnav">
          <li data-uk-slideshow-item="0">
            <a href="#">
              <img src={paletteImg} width="100" alt="" />
            </a>
          </li>
          <li data-uk-slideshow-item="2">
            <a href="#">
              <img src={documentingImg} width="100" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="uk-card uk-card-default uk-card-body uk-responsive-width">
      <h3 className="uk-card-title">Default</h3>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
);

export default IndexPage;
