import React from 'react'
import BeforeAfter from './BeforeAfter'

const BeforeAfterList = ({ bal }) => {
  return (
    <section className="ba-list">
      {bal.map(data => {
        return <BeforeAfter key={data.id} data={data} />
      })}
    </section>
  )
}
export default BeforeAfterList
