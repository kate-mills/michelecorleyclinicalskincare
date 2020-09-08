import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/Title"
import SEO from "../components/seo"

const PageModel = ({ title, centeredTitle, defaultTitle, description, homePage, children }) => {
  return (
    <Layout>
      <SEO title={title} description={description}/>

      { centeredTitle && <PageTitle title={title} center/> }

      { defaultTitle && <PageTitle title={title} /> }

      { homePage && <PageTitle title="Beautifully Healthy Skin Starts Here" color="var(--mainBlack)" center/> }

      {children}

    </Layout>
  )
}
export default PageModel
