import React from 'react'
import Press from './Press'

const AllPressList = ({ pressList }) => {
  return (
    <section className="press-list">
      <h2 className="sr-only">
        Skin Care in the Press Award-winning professional skincare products for
        dry and oily skin types to sensitive, sun-damaged and acne-prone skin
        exclusively sold through licensed skincare professionals.
      </h2>

      {pressList.map(data => {
        return <Press key={data.id} data={data} />
      })}
    </section>
  )
}
export default AllPressList
