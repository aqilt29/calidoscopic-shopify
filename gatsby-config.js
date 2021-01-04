require('dotenv').config()
const siteURL = new URL(process.env.TARGET_ADDRESS)

module.exports = {
  siteMetadata: {
    title: `Calidoscopic Design`,
    description: `Jason Verdi | Professional Designer | Branding Consultant | Portfolio | Showcase`,
    author: `@calidoscopic`
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_DOMAIN,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `jura\:400,700`,
          `source sans pro\:200,600i`
        ],
        display: 'swap'
      }
    },
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
        name: `Calidoscopic Design`,
        short_name: `Calidoscopic`,
        start_url: `/`,
        lang: `en`, 
        background_color: `#fff`,
        theme_color: `#efefef`,
        display: `minimal-ui`,
        icon: `src/images/calidoscopic-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.CLOUD_BUCKET_NAME,
        protocol: siteURL.protocol.slice(0, -1),
        hostname: siteURL.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: siteURL.href.slice(0, -1),
      },
    }
  ],
}