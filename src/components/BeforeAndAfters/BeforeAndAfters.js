import React from 'react'
import BeforeAndAfter from './BeforeAndAfter'

const BeforeAndAfters = ({ lst }) => {
  return (
    <ul className="before-and-afters">
      {lst.map(({id, data}) => {
        return <BeforeAndAfter key={id} data={data} />
      })}
    </ul>
  )
}
export default BeforeAndAfters
