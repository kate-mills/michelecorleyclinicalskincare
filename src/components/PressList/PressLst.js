import React from 'react'
import Press from './Press'

const PressList = ({ lst }) => {
  return (
    <section className="press">
      <h2 className="sr-only">
        Skin Care in the Press Award-winning professional skincare products for
        dry and oily skin types to sensitive, sun-damaged and acne-prone skin
        exclusively sold through licensed skincare professionals.
      </h2>
      <ul className="press-list">
        {lst.map(({ id, data }) => {
          return <Press key={id} data={data} />
        })}
      </ul>
    </section>
  )
}
export default PressList
