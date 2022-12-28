import React from 'react'

import Layout from '../components/layout'
import Title from '../components/Title'
import SEO from '../components/FullSeo'

const PageModel = ({
  seoTitle,
  title,
  snippet,
  description,
  keywords,
  image,
  noindex,
  centeredTitle,
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


      {centeredTitle && (
        <Title color={'var(--mainBlack)'} size={'2.3876rem'} title={title} />
      )}
      {children}
    </Layout>
  )
}

PageModel.defaultProps = {
  centeredTitle: false,
  description: '',
  image: 'https://michelecorleyclinicalskincare.com/logo.jpg',
  homePage: false,
  keywords: [],
  noindex: false,
  seoTitle: '',
  title: '',
}
export default PageModel
