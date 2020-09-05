import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article }) => {
  const { location } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet title={seo.title}>
      <meta
        name="description"
        content={
          "Harita tabanlı saha iş takip ve ekip yönetim uygulaması. Saha ekiplerinize harita üzerinde iş atayın, çalışanlarınızın konumlarını takip edin, sahadan anlık haberdar olun. Çalışanlarınızın performansını ve işlerinizi analiz ederek veriminizi arttırın. Saha iş takip ve ekip yönetiminde en iyi yardımcınız Pintask ile istediğiniz belge ve bilgilere her zaman ulaşın."
        }
      />
      {seo.title && <meta property="og:title" content={seo.title} />}

      <meta
        property="og:description"
        content={
          "Harita tabanlı saha iş takip ve ekip yönetim uygulaması. Saha ekiplerinize harita üzerinde iş atayın, çalışanlarınızın konumlarını takip edin, sahadan anlık haberdar olun. Çalışanlarınızın performansını ve işlerinizi analiz ederek veriminizi arttırın. Saha iş takip ve ekip yönetiminde en iyi yardımcınız Pintask ile istediğiniz belge ve bilgilere her zaman ulaşın."
        }
      />
    </Helmet>
  );
};
export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        palette
        header {
          title
          logo_img
          has_nav
          menu {
            actions {
              label
              url
            }
          }
        }
        footer {
          has_nav
          logo_img
          tagline
          nav_title
          has_social
          social_title
          has_subscribe
          subscribe_title
          subscribe_content
          content
          links {
            text
            url
            new_window
          }
        }
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
