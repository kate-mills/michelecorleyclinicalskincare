import React from 'react'

const Container = ({ title, children, className }) => (
  <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
)

export default Container
