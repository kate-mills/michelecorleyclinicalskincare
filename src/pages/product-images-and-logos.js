import React from 'react'

import PageModel from '../components/PageModel'

import styled from 'styled-components'

const Products = () => {
  return (
    <PageModel title={`Product Images & Logos`}
      centeredTitle
      description={`The following resources are available for your use in representing Michele Corley Clinical Skin Care products.`}
    >
      <ProductsWrapper>
        <p className="txt-center">The following resources are available for your use in representing Michele Corley Clinical Skin Care products.</p>
        <h2 className="poppy">Cleansers</h2>
        <h2 className="poppy">Toners</h2>
        <h2 className="poppy">Moisturizers and SPF</h2>
        <h2 className="poppy">Eyes and Lips</h2>
        <h2 className="poppy">Serums and Specialty</h2>
        <h2 className="poppy">Exfoliants</h2>
        <h2 className="poppy">Masks</h2>
        <h2 className="poppy">Multi-Product Photos</h2>
        <h2 className="poppy">Logos</h2>
      </ProductsWrapper>
    </PageModel>
  )
}

const ProductsWrapper = styled.section``

export default Products
