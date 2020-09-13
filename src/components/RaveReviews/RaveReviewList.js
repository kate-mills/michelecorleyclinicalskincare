import React from 'react'
import RaveReview from './RaveReview'

const RaveReviewList = ({ reviews }) => {
  return (
    <section className="rr-list">
      {reviews.map(data => {
        return <RaveReview key={data.id} data={data} />
      })}
    </section>
  )
}
export default RaveReviewList
