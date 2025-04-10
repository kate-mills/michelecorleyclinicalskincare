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
          sort: [{data: {statecode: ASC}}, {data: {city: ASC}}, {data: {name: ASC}}]
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
          sort: {data: {state: ASC}}
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
