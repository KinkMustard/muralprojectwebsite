import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "jquery";
import "uikit/dist/css/uikit.min.css";
// import "uikit/dist/js/uikit.js";
// import "uikit/dist/js/uikit-icons.min.js";
// import "uikit/dist/js/components/slideshow.min.js";
// import "uikit/dist/js/components/slideshow-animations.min.js";
// import "uikit/dist/js/components/slider.min.js";
import "./index.scss";
import Header from "../components/header";

class Layout extends React.Component {
  componentDidMount() {
    try {
      this.UIkit = require("uikit/dist/js/uikit");
      this.Icons = require("uikit/dist/js/uikit-icons");
      this.UIkit.use(this.Icons);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { data, children } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: "0 auto",
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children()}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
