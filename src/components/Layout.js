import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";

import { safePrefix } from "../utils";
import Header from "./Header";
import Footer from "./Footer";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, "pageContext.frontmatter.title") &&
              _.get(this.props, "pageContext.frontmatter.title") + " - "}
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
          </title>
          {/* <meta
            name="viewport"
            content="width=device-width, initialScale=1.0"
          />
          <meta name="google" content="notranslate" />  */}

          {/* <meta charSet="utf-8" />
          <meta
            name="description"
            content="Harita tabanlı saha iş takip ve ekip yönetim uygulaması. Saha ekiplerinize harita üzerinde iş atayın, çalışanlarınızın konumlarını takip edin, sahadan anlık haberdar olun. Çalışanlarınızın performansını ve işlerinizi analiz ederek veriminizi arttırın. Saha iş takip ve ekip yönetiminde en iyi yardımcınız Pintask ile istediğiniz belge ve bilgilere her zaman ulaşın."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
            rel="stylesheet"
          />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} /> */}
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
