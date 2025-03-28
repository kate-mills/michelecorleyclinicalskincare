module.exports = {
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
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `BeforeAfter`,
            mapping: { media: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_EDUCATION_BASE_ID,
            tableName: `Classes`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_MARKETING_BASE_ID,
            tableName: `RaveReviews`,
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_MARKETING_BASE_ID,
            tableName: `Press`,
            mapping: { image: `fileNode` },
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
