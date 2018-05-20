import React from "react";
import Link from "gatsby-link";
import images from "../images/imageindex";
import timelapse from "../images/The bee movie_ but every time there say bee it speeds up [360p].mp4";

const IndexPage = () => (
  <div
    className="uk-child-width-1-1@m uk-grid-small uk-grid-match"
    data-uk-grid
  >
    <div>
      <div className="uk-inline uk-width-1-1 uk-height-large">
        {/* <video
          loop
          muted
          playsinline
          data-uk-video="autoplay: inview"
          className="uk-width-1-1"
        >
          <source src={timelapse} type="video/mp4" />
          <source src={timelapse} type="video/ogg" />
        </video> */}
        <img
          src={images[0]}
          alt=""
          style={{ filter: "blur(5px)", width: "100vw" }}
        />
        <div className="uk-overlay uk-overlay-default uk-position-center">
          <blockquote className="blockquote">
            <p className="mb-0">
              “It may be unfair, but what happens in a few days, sometimes even
              a single day, can change the course of a whole lifetime...”
            </p>
            <footer className="blockquote-footer">
              Khaled Hosseini, <cite title="Source Title">The Kite Runner</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div className="uk-card uk-card-default uk-card-body uk-overlay uk-overlay-default">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        data-uk-slideshow="animation: push; autoplay: true; autoplay-interval: 8000; min-height: 400; max-height: 700"
      >
        <ul className="uk-slideshow-items">
          <li>
            <img src={images[1]} alt="" data-uk-cover />
            <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
              <h3 className="uk-margin-remove">sampdle text</h3>
              <p className="uk-margin-remove">sample text</p>
            </div>
          </li>
          <li>
            <img src={images[2]} alt="" data-uk-cover />
            <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
              <h3 className="uk-margin-remove">
                Documentary crew hard at work!
              </h3>
              <p className="uk-margin-remove">sample text</p>
            </div>
          </li>
          <li>
            <img src={images[3]} alt="" data-uk-cover />
            <div className="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
              <h3 className="uk-margin-remove">safsfsafsaafsample text</h3>
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
                <img
                  src={images[1]}
                  alt=""
                  style={{ maxWidth: 100, minWidth: 50, width: "5vw" }}
                />
              </a>
            </li>
            <li data-uk-slideshow-item="1">
              <a href="#">
                <img
                  src={images[2]}
                  alt=""
                  style={{ maxWidth: 100, minWidth: 50, width: "5vw" }}
                />
              </a>
            </li>
            <li data-uk-slideshow-item="2">
              <a href="#">
                <img
                  src={images[3]}
                  alt=""
                  style={{ maxWidth: 100, minWidth: 50, width: "5vw" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <div className="uk-card uk-card-default uk-card-body uk-responsive-width">
      <h3 className="uk-card-title">Default</h3>
      <p>
        Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div> */}
  </div>
);

export default IndexPage;
