import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/FullSeo'

const PageModel = ({
  seoTitle,
  title,
  snippet,
  description,
  keywords,
  image,
  noindex,
  homePage,
  children,
}) => {
  return (
    <Layout>
      <SEO
        noindex={noindex}
        snippet={snippet}
        keywords={keywords}
        title={seoTitle || title}
        description={description}
        image={image}
      />


      {children}
    </Layout>
  )
}

PageModel.defaultProps = {
  description: '',
  image: 'https://michelecorleyclinicalskincare.com/michele-corley-logo.jpg',
  homePage: false,
  keywords: [],
  noindex: false,
  seoTitle: '',
  title: '',
}
export default PageModel
