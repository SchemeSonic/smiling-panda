import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";

import { safePrefix } from "../utils";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          title={
            _.get(this.props, "pageContext.frontmatter.title") &&
            _.get(this.props, "pageContext.frontmatter.title") +
              " - " +
              _.get(this.props, "pageContext.site.siteMetadata.title")
          }
          meta={[
            { name: "description", content: "Pintask" },
            { name: "keywords", content: "Pintask, saha" },
            { property: "og:type", content: "website" },
          ]}
        >
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initialScale=1.0"
          />
          <meta name="google" content="notranslate" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
            rel="stylesheet"
          />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />
          <div>
            <Breadcrumb location="./Social.js" crumbLabel="About Us" />
          </div>
        </Helmet>
        <div
          id="page"
          className={
            "site palette-" +
            _.get(this.props, "pageContext.site.siteMetadata.palette")
          }
        >
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
