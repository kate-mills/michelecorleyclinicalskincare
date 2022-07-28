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
        dateModified
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
const SEO = ({
  keywords,
  title:seoTitle,
  description,
  image,
  article,
  snippet,
  noindex,
}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    defaultImage,
    twitterUsername,
    organization,
    dateModified,
  } = site.siteMetadata

  const formatTitle = (title) => {
    let plain = `${title}${title.length < 47 ? ' | Michele Corley':''}`
    let fancy = `${title} | Michele Corley Clinical Skin Care`
    return plain.length < 29 ? fancy : plain
  }

  let defaultSeoImage = `${baseUrl}${defaultImage}`

  let defaultKeywords = `professional, skincare, skin, care, products, estheticians`
  const seo = {
    keywords:
      keywords.length > 0
        ? `${keywords.join(', ')}, ${defaultKeywords}`
        : defaultKeywords,
    title: seoTitle.length === 0 ? defaultTitle :formatTitle(seoTitle),
    dateModified: dateModified,
    description: description || defaultDescription,
    image: `${image || defaultSeoImage}`,
    url: `${baseUrl}${pathname}`,
  }

  return (
    <React.Fragment>
      <Helmet defaultTitle="Michele Corley Clinical Skin Care"  title={seo.title} htmlAttributes={{ lang: 'en' }} >
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content="Michele Corley" />

        {seo.url && <link rel="canonical" href={seo.url} />}
        {snippet && <script type="application/ld+json">{snippet}</script>}
        {noindex && <meta name="robots" content="noindex nofollow" /> }

        {/* Google domain verification */}
        <meta
          name="google-site-verification"
          content="__EndWSs5BPjx6w6bft3xWpgofxOEdBQBaEdh7js_M0"
        />

        {/* Bing verification */}
        <meta name="msvalidate.01" content="20FF3D765E811E2F83BA607B8A11B97D" />

        {/* Pinterest domain verification */}
        <meta
          name="p:domain_verify"
          content="1b2f20084653c8e1e95acbf4fd3a842c"
        />

        {/* facebook card */}
        <meta
          name="facebook-domain-verification"
          content="eehvueakms0wtv6s1pvu24x1mudowo"
        />
        <meta property="fb:app_id" content={'609921403815629'} />

        {seo.url && <meta property="og:url" content={seo.url} />}
        {article ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>

      <SchemaOrg
        compoundTitle={`${seo.title} | Michele Corley Clinical Skin Care`}
        defaultTitle={'Michele Corley Clinical Skin Care'}
        pageTitle={seo.title}
        description={seo.description}
        baseUrl={baseUrl}
        image={seo.image}
        dateModified={dateModified}
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
  article: PropTypes.bool,
  snippet: PropTypes.string,
  keywords: PropTypes.array,
}

SEO.defaultProps = {
  keywords: [],
  title: null,
  description: null,
  image: null,
  article: false,
  snippet: null,
  noindex: false,
}
