import { useStaticQuery, graphql } from 'gatsby'

export const useSpaData = () => {
  const {
    allAirtable: { airtableSpas },
    allWebSpas: { airtableWebSpas },
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
        allWebSpas: allAirtable(
          filter: { table: { eq: "Spas" }, data: { webstore: { ne: null } } }
          sort: { fields: [data___statecode, data___city, data___name] }
        ) {
          airtableWebSpas: nodes {
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
      }
    `
  )
  return { airtableSpas,airtableWebSpas }
}
