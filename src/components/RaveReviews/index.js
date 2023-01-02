import React from 'react'

const RaveReviewList = ({ reviews }) => {
  return (
    <ul id="rave-review-list">
      {reviews.map(data => {
        const {
          id,
          data: { review, signature },
        } = data

        return (
          <li key={id}>
            <q className="italic">{review}</q>
            <p className="bold">
              &#126;{` `}
              {signature}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default RaveReviewList
