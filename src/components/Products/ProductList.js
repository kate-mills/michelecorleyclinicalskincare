import React from 'react'
import Product from './Product'

const PreFilteredList = ({products, acneIcon={}}) => {

  console.log(acneIcon)
  return (
    <section className="product-list">
      {products.edges.map(({ node }) => {
        return <Product
          key={node.contentful_id}
          product={node}
          acneIcon={node.acneSafe ? acneIcon : null}
          />
      })}
    </section>
  )
}

export default PreFilteredList
