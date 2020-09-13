import React from 'react'
import Press from './Press'

const AllPressList = ({ pressList }) => {
  return (
    <section className="press-list">
      {pressList.map(data => {
        return <Press key={data.id} data={data} />
      })}
    </section>
  )
}
export default AllPressList
