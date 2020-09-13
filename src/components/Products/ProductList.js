import React from 'react'
import Product from './Product'

const PreFilteredList = ({ products }) => {
  return (
    <section className="product-list">
      {products.edges.map(({ node }) => {
        return <Product key={node.contentful_id} product={node} />
      })}
    </section>
  )
}

export default PreFilteredList
