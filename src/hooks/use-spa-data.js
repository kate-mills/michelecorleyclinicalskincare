import { useStaticQuery, graphql } from 'gatsby'

export const useSpaData = () => {
  const {
    allAirtable: { airtableSpas },
    allDefaultSpas: { airtableDefaultSpas },
  } = useStaticQuery(
    graphql`
      query {
        allAirtable(
          filter: { table: { eq: "Spas" } }
          sort: { fields: [data___statecode, data___city, data___name] }
        ) {
          totalCount
          airtableSpas: nodes {
            airtable_id: id
            data {
              spaid
              contact
              email
              url
              name
              phone
              address
              city
              state
              statecode
              zip
              webstore
            }
          }
        }
        allDefaultSpas: allAirtable(
          filter: { table: { eq: "Spas" }, data: { defaultSpa: { eq: true } } }
          sort: { fields: data___state }
        ) {
          airtableDefaultSpas: nodes {
            airtable_id: id
            data {
              spaid
              email
              url
              name
              phone
              address
              city
              state
              statecode
              zip
              webstore
            }
          }
        }
      }
    `
  )
  return { airtableSpas, airtableDefaultSpas }
}
