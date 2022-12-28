import React from 'react'
import BeforeAfter from './BeforeAfter'

const BeforeAfterList = ({ bal }) => {
  return (
    <section className="ba-list">
      {bal.map((data, idx) => {
        return <BeforeAfter key={data.id} idx={idx} data={data} />
      })}
    </section>
  )
}
export default BeforeAfterList
