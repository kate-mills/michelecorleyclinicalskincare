import React from 'react'
import UpcomingClass from './UpcomingClass'

const UpcomingClassList = ({ upcomingClasses }) => {
  return (
    <section className="upcoming-classes">
      {upcomingClasses.map(data => {
        return <UpcomingClass key={data.id} data={data} />
      })}
    </section>
  )
}
export default UpcomingClassList
