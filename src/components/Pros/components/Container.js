import React from "react"

const Container = ({ title, children }) => (
  <section className={''}>
    <h1>{title}</h1>
    <p className="g-txt-center">
    </p>
    {children}
  </section>
)

export default Container 
