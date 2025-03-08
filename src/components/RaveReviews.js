import * as React from 'react'


const RaveReviews = ({ lst }) => {
  return (
    <ul id="rave-review-list">
      {lst.map(data => {
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

export default RaveReviews 
