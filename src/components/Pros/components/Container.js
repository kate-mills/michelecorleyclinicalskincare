import React from 'react'

const Container = ({ title, children }) => (
  <section className={'pro'}>
    <h1>{title}</h1>
    <p className="txt-center">
      Explore professional PDF and video resources below to enhance your Michele
      Corley Clinical Skin Care product knowledge.
    </p>
    {children}
  </section>
)

export default Container
