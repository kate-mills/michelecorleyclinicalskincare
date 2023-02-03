require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michele Corley Clinical Skin Care`,
    description: `Achieve beautifully healthy skin. Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives.`,
    dateModified: `${new Date().toISOString()}`,
    author: `MCC`,
    twitterUsername: `@katie_napa`,
    image: `/logo.jpg`,
    url: `https://michelecorleyclinicalskincare.com`,
    baseUrl: `https://michelecorleyclinicalskincare.com`,
    siteUrl: `https://michelecorleyclinicalskincare.com`,
    defaultImage: `https://michelecorleyclinicalskincare.com/logo.jpg`,
    organization: {
      address: {
        street: `1400 Lafayette St.`,
        city: `Beaufort`,
        state: `SC`,
        zip: `29902`,
        country: `USA`,
      },
      email: `customerservice@michelecorley.com`,
      name: `Michele Corley Clinical Skin Care`,
      url: `https://michelecorleyclinicalskincare.com`,
      logo:`https://michelecorleyclinicalskincare.com/logo.jpg`,
      telephone: `707-287-0555`,
      priceRange: `$$`,
      sameAs: [
        `https://vimeo.com/michelecorley`,
        `https://www.facebook.com/michelecorleyclinicalskincare`,
        `https://www.instagram.com/michelecorleyskincare`,
        `https://www.pinterest.com/michelecorleyskincare`,
      ],
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://michelecorleyclinicalskincare.com`,
        sitemap: `https://michelecorleyclinicalskincare.com/sitemap.xml`,
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: '/app' },
          { userAgent: '*', disallow: '/app/login' },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prof`,
        path: `${__dirname}/src/prof`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michele Corley Clinical Skin Care`,
        description: `Professional skin care products available through licensed estheticians. Clean, safe, efficacious formulas.`,
        short_name: `mcc`,
        start_url: `/`,
        background_color: `#dcdcdc`,
        theme_color: `#dcdcdc`,
        display: `standalone`,
        icon: `src/images/maskable_icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
 /*{ resolve: `gatsby-plugin-google-fonts`, options: { fonts: [ `montserrat:400,600` // you can also specify font weights and styles ], display: 'swap' } },*/
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://foo.com', 'https://bar.com'],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
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
        ],
      },
    },
  ],
}
