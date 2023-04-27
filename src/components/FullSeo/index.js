import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import SchemaOrg from './SchemaOrg'

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        baseUrl
        defaultImage: image
        twitterUsername
        organization {
          email
          name
          url
          logo
          priceRange
          telephone
          sameAs
          address {
            street
            city
            state
            zip
            country
          }
        }
      }
    }
  }
`
const SEO = ({ title: seoTitle, description, image, snippet, noindex }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    defaultImage,
    twitterUsername,
    organization,
  } = site.siteMetadata


  let defaultSeoImage = `${baseUrl}${defaultImage}`

  const seo = {
    title: seoTitle || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultSeoImage}`,
    url: `${baseUrl}${pathname}`,
  }

  return (
    <React.Fragment>
      <Helmet defaultTitle="Michele Corley Clinical Skin Care" title={seo.title} htmlAttributes={{ lang: 'en' }}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="author" content="Michele Corley" />

        {noindex && <meta name="robots" content="noindex nofollow" />}
        {snippet && <script type="application/ld+json">{snippet}</script>}

        {/* Bing verification */}
        <meta name="msvalidate.01" content="20FF3D765E811E2F83BA607B8A11B97D" />

        {/* Facebook card */}
        <meta name="facebook-domain-verification" content="eehvueakms0wtv6s1pvu24x1mudowo" />
        <meta property="fb:app_id" content={'609921403815629'} />

        {/* OGP */}
        {seo.title && <meta property="og:title" content={seo.title} />}
        <meta property="og:type" content="website" />
        {seo.image && <meta property="og:image" content={seo.image} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.description && ( <meta property="og:description" content={seo.description} />)}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Michele Corley Clinical Skin Care" />

        {/* Google domain verification */}
        <meta name="google-site-verification" content="__EndWSs5BPjx6w6bft3xWpgofxOEdBQBaEdh7js_M0" />

        {/* Pinterest domain verification */}
        <meta name="p:domain_verify" content="1b2f20084653c8e1e95acbf4fd3a842c" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && ( <meta name="twitter:creator" content={twitterUsername} />)}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && ( <meta name="twitter:description" content={seo.description} />)}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>

      <SchemaOrg
        description={seo.description}
        baseUrl={baseUrl}
        image={seo.image}
        organization={organization}
      />
    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  snippet: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  snippet: null,
  noindex: false,
}
