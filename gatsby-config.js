module.exports = {
  pathPrefix: "/",
  siteMetadata: require("./site-metadata.json"),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`],
      },
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: require("./src/data/menus.json"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          url: "https://www.pintask.app/",
          title:
            "Sahadaki işlerinizi ve ekiplerinizi harita üzerinde koordine edin",
          description:
            "Harita tabanlı saha iş takip ve ekip yönetim uygulaması. Saha ekiplerinize harita üzerinde iş atayın, çalışanlarınızın konumlarını takip edin, sahadan anlık haberdar olun. Çalışanlarınızın performansını ve işlerinizi analiz ederek veriminizi arttırın. Saha iş takip ve ekip yönetiminde en iyi yardımcınız Pintask ile istediğiniz belge ve bilgilere her zaman ulaşın.",
          site_name: "Pintask",
        },
        description: "Saha İş Takip ve Ekip Yönetim Uygulaması",
        title: "Pintask",
      },
    },
  ],
};
