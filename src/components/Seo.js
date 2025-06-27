import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import SchemaOrg from './SchemaOrg'

const Seo = ({
  title: pageTitle = '',
  description = '',
  image = '',
  noindex = false,
  snippet = '',
  pathname = '',
  children,
}) => {
  const { site } = useSiteMetadata()

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    baseUrl,
    twitterUsername,
    organization,
    icon,
  } = site.siteMetadata

  const seo = {
    title: pageTitle || defaultTitle,
    description: description || defaultDescription,
    image: `${baseUrl}${image || defaultImage}`,
    url: `${baseUrl}${pathname}`,
    icon: `${baseUrl}${icon}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content="Michele Corley" />
      <link rel="icon" href={icon} />

      {noindex && <meta name="robots" content="noindex" />}
      {snippet && <script type="application/ld+json">{snippet}</script>}

      {/* Bing verification */}
      <meta name="msvalidate.01" content="20FF3D765E811E2F83BA607B8A11B97D" />

      {/* Facebook card */}
      <meta
        name="facebook-domain-verification"
        content="eehvueakms0wtv6s1pvu24x1mudowo"
      />
      <meta property="fb:app_id" content={'609921403815629'} />

      {/* OGP */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      <meta property="og:type" content="website" />
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:site_name"
        content="Michele Corley Clinical Skin Care"
      />

      {/* Google domain verification */}
      <meta
        name="google-site-verification"
        content="UCsd__pMS96eV_ySAD3-M1elhEEinYkWjTdmj2braF8"
      />

      {/* Pinterest domain verification */}
      <meta name="p:domain_verify" content="1b2f20084653c8e1e95acbf4fd3a842c" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.url && <meta name="twitter:url" content={seo.url} />}

      {children}
      <SchemaOrg
        description={seo.description}
        baseUrl={baseUrl}
        image={seo.image}
        organization={organization}
      />
    </>
  )
}

export default Seo
