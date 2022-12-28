import React from 'react'

const RaveReview = ({ id, data: { data } }) => {
  return (
    <div>
      <p
        style={{
          fontStyle: 'italic',
          margin: '0',
          padding: '0 0 .5rem',
        }}
      >
        {`"${data.review}"`}
      </p>
      <p
        style={{
          fontWeight: '600',
        }}
      >
        &#126;{` `}
        {data.signature}
      </p>
    </div>
  )
}
export default RaveReview
