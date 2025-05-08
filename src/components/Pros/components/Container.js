import React from 'react'
import styled from 'styled-components'
import ProOrderFixedLink from './ProOrderFixedLink'

const Container = ({ title, isPro=true, children, className }) => (
  <StyledContainer className={className}>
    {isPro && ( <ProOrderFixedLink/>)}
    <h1>{title}</h1>
    <article>{children}</article>
  </StyledContainer>
)

const StyledContainer = styled.section`
  & {
    & a {
      color: var(--poppy);
      &.btn {
        margin-block: 1rem;
      }
    }

    & h2 {
      text-align: center;
    }
    & hr {
      margin-block: 1rem;
      width: 100%;
    }

    > article {
      > div {
        padding: 1rem;
      }
    }

  }
`

export default Container
