require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
  siteMetadata: {
    title: `Michele Corley Clinical Skin Care`,
    description: `Achieve beautifully healthy skin. Discover professional skincare loaded with powerful peptides, potent antioxidants, stable vitamin C, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives.`,
    dateModified: `${new Date().toISOString()}`,
    author: `MCC`,
    twitterUsername: `@katie_napa`,
    image: `/logo-300x200.jpeg`,
    icon: `/favicon-32x32.png`,
    url: `https://michelecorleyclinicalskincare.com`,
    baseUrl: `https://michelecorleyclinicalskincare.com`,
    siteUrl: `https://michelecorleyclinicalskincare.com`,
    defaultImage: `https://michelecorleyclinicalskincare.com/logo-300x200.jpeg`,
    organization: {
      address: {
        street: `604 Bladen St.`,
        city: `Beaufort`,
        state: `SC`,
        zip: `29902`,
        country: `US`,
      },
      email: `customerservice@michelecorley.com`,
      name: `Michele Corley Clinical Skin Care`,
      url: `https://michelecorleyclinicalskincare.com`,
      logo: `https://michelecorleyclinicalskincare.com/logo.jpg`,
      telephone: `843-929-8677`,
      priceRange: `$$`,
      sameAs: [
        `https://vimeo.com/michelecorley`,
        `https://facebook.com/michelecorleyclinicalskincare/`,
        `https://instagram.com/michelecorleyskincare/`,
        `https://www.pinterest.com/michelecorleyskincare/`,
        `https://www.youtube.com/@michelecorleyskincare/`,
      ],
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.MCC_AIRTABLE_ACCESS,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `MccArticles`,
            mapping: { image: `fileNode` },
          },
          /*{ baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID, tableName: `BeforeAfter`, mapping: { media: `fileNode` }, },*/
          {
            baseId: process.env.GATSBY_AIRTABLE_PAGES_BASE_ID,
            tableName: `RaveReviews`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PAGES_BASE_ID,
            tableName: `Press`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PAGES_BASE_ID,
            tableName: `BeforeAfter`,
            mapping: { media: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Facials`,
            mapping: { pdf: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Media`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_PROFESSIONALS_BASE_ID,
            tableName: `Manuals`,
            mapping: { pdf: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_WHOLESALE_BASE_ID,
            tableName: `Spas`,
          },
        ],
      },
    },
  ],
}
