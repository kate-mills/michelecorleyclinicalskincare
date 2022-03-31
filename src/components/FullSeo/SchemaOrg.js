import React from 'react'
import { seoLinks } from '../../constants/links'

import { Helmet } from 'react-helmet'

export default React.memo(
  ({
    url,
    compoundTitle,
    defaultTitle,
    pageTitle,
    image,
    description,
    baseUrl,
    author,
    organization,
    dateModified,
    sameAs,
  }) => {
    const linkCrumbs = seoLinks.map(link => {
      return {
        type: 'ListItem',
        name: link.page,
        position: link.id,
        item: `${baseUrl}${link.path}`,
        image,
      }
    })
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        '@id': organization.url,
        description: description,
        email: organization.email,
        image: image,
        logo: organization.logo,
        name: organization.name,
        priceRange: organization.priceRange,
        sameAs: organization.sameAs,
        telephone: organization.telephone,
        url: organization.url,
        address: {
          '@type': 'PostalAddress',
          addressCountry: organization.address.country,
          addressLocality: organization.address.city,
          addressRegion: organization.address.state,
          name: organization.name,
          postalCode: organization.address.zip,
          streetAddress: organization.address.street,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        name: 'navigation',
        itemListElement: linkCrumbs,
      },
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
