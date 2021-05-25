import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            defaultImage
          }
        }
      }
    `
  )

  const seoImg = image || site.siteMetadata.defaultImage
  const { pathname } = useLocation()
  const url = `${site.siteMetadata.siteUrl}/${pathname}`
  const metaDescription = description || site.siteMetadata.description

  return (
    <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={(title.length < 31) ? `%s | ${site.siteMetadata.title}`: title}
      meta={[
        {
          name:"google-site-verification",
          content:"__EndWSs5BPjx6w6bft3xWpgofxOEdBQBaEdh7js_M0",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}

    />
      <SchemaOrg
        image={image}
        seoImg={seoImg}
        defaultImg={site.siteMetadata.defaultImg}
        description={metaDescription}
        url={url}
      />
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
