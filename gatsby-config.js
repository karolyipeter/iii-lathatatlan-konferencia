const path = require('path')

module.exports = {
  siteMetadata: {
    title: `III. Láthatatlan Konferencia - 2019. 02. 23.`,
    description: `A láthatatlan konferencia az életvezetési témák, a témákban járatos szakemberek és az érdeklődők fóruma, mely gondolatébresztő előadásokkal, lelkes előadókkal és a kapcsolódási lehetőség megteremtésével igyekszik az arra érdeklődőknek szolgálni.`,
    author: `Károlyi Péter Márton`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakers`,
        path: `${__dirname}/src/speakers`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
