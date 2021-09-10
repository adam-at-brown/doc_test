module.exports = {
  siteMetadata: {
    title: `BrownU Mobile 2.0 Documentation`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/markdown-pages`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `style-pages`,
          path: `${__dirname}/src/markdown-pages/style-guide`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `liferay-pages`,
          path: `${__dirname}/src/markdown-pages/liferay`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `builds-pages`,
          path: `${__dirname}/src/markdown-pages/builds`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `dependencies-pages`,
          path: `${__dirname}/src/markdown-pages/dependencies`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 1200,
        },
      },
    ],
  },
},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
