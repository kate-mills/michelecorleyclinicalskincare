require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michele Corley Clinical Skincare`,
    description: `Professional skin care products available through licensed estheticians. Clean, safe, efficacious formulas.`,
    dateModified: `${new Date().toISOString()}`,
    author: `MCC`,
    twitterUsername: `@katie_napa`,
    image: `/seoimage.jpg`,
    url: `https://www.michelecorleyclinicalskincare.com`,
    baseUrl: `https://www.michelecorleyclinicalskincare.com`,
    siteUrl: `https://www.michelecorleyclinicalskincare.com`,
    defaultImage: `https://www.michelecorleyclinicalskincare.com/seoimage.jpg`,
    organization: {
      address: {
        street: `1400 Lafayette St.`,
        city: `Beaufort`,
        state: `SC`,
        zip: `29902`,
        country: `USA`,
      },
      email: `customerservice@michelecorley.com`,
      name: `Michele Corley Clinical Skincare`,
      url: `https://www.michelecorleyclinicalskincare.com`,
      logo: `https://www.michelecorleyclinicalskincare.com/seoimage.jpg`,
      telephone: `707-287-0555`,
      priceRange: `$$`,
      sameAs: [
        `https://vimeo.com/michelecorley`,
        `https://www.facebook.com/michelecorleyclinicalskincare`,
        `https://www.instagram.com/michelecorleyskincare`,
      ],
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://www.michelecorleyclinicalskincare.com`,
        sitemap: `https://www.michelecorleyclinicalskincare.com/sitemap.xml`,
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: '/new-page-3' },
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
        name: `michele corley clinical skincare`,
        short_name: `mcc`,
        start_url: `/`,
        background_color: `#dcdcdc`,
        theme_color: `#dcdcdc`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'maskable',
          },
        ],
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
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: false,
      },
    },
  ],
}
