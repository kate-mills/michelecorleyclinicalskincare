import React from 'react'

import Product from './Product'

const Products = ({ lst }) => {
  return lst.map(({ data }) => <Product key={data.contentful_id} data={data} />)
}
export default Products
