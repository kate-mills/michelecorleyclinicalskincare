import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          baseUrl
          defaultImage: image
          icon
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
  `)

  return {site: data.site}
}
