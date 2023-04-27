import React from 'react'
import { seoLinks } from '../../constants/seoLinks'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({ url, image, description, baseUrl, organization, sameAs }) => {
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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '32.434892463189364',
          longitude: '-80.67971044409107',
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
