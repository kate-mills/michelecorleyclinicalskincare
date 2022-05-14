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
const SEO = ({ title, description, image, article, snippet, noindex }) => {
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
  const formatTitle = () => {
    let plain = `${title || defaultTitle}`
    let fancy = `${title || defaultTitle} | Michele Corley`
    return plain.length < 46 ? fancy : plain
  }

  let defaultSeoImage = `${baseUrl}${defaultImage}`

  const seo = {
    title: formatTitle(),
    dateModified: dateModified,
    description: description || defaultDescription,
    image: `${image || defaultSeoImage}`,
    url: `${baseUrl}${pathname}`,
  }
  return (
    <React.Fragment>
      <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="keywords" content="wholesale, professional, skincare, skin, care, products, estheticians"/>
        <meta name="author" content="Michele Corley"/>
        {seo.url &&  <link rel="canonical" href={seo.url} />}
        {snippet && <script type="application/ld+json">{snippet}</script>}
        {noindex  ?  <meta name="robots" content="noindex nofollow"/> : <meta name="robots" content="index follow"/>}

        {/* Google domain verification */}
        <meta
          name="google-site-verification"
          content="__EndWSs5BPjx6w6bft3xWpgofxOEdBQBaEdh7js_M0"
        />
        {/* Pinterest domain verification */}
        <meta
          name="p:domain_verify"
          content="1b2f20084653c8e1e95acbf4fd3a842c"
        />

        {/* facebook card */}
        <meta name="facebook-domain-verification" content="eehvueakms0wtv6s1pvu24x1mudowo" />
        <meta property="fb:app_id" content={"609921403815629"}/>

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
        compoundTitle={`${seo.title} | Ally Digital Solutions`}
        defaultTitle={'Ally Digital Solutions'}
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
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  snippet: null,
  noindex: false,
}
