import React from 'react'

import Layout from '../components/layout'
import PageTitle from '../components/Title'
import SEO from '../components/seo'

const PageModel = ({
  title,
  description,
  color,
  centeredTitle,
  defaultTitle,
  homePage,
  children,
}) => {
  return (
    <Layout>
      <SEO title={title} description={description} />

      {centeredTitle && <PageTitle title={title} color={color || ''} center />}

      {defaultTitle && <PageTitle title={title} color={color || ''} />}

      {homePage && (
        <PageTitle
          title="Beautifully Healthy Skin Starts Here"
          color="var(--mainBlack)"
          center
        />
      )}

      {children}
    </Layout>
  )
}
PageModel.defaultProps = {}
export default PageModel
