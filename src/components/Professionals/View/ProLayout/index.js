import React from 'react'
import SEO from '../../../../components/FullSeo'
import ProNavigation from './pronavigation'
import Layout from '../../../layout'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../../../../utils/auth'

function capFirstLetter(propertyName) {
  function lowerToTitle(match, offset, string) {
    return match.toUpperCase()
  }
  return propertyName.replace(/\b[a-z]/g, lowerToTitle)
}

const ProLayout = ({ data, title, location, children }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate(`/app/login`)
    return null
  }
  let activePath =
    location?.pathname === '/app/education'
      ? '/app/education/manuals'
      : location.pathname
  let proTitle = activePath.split('/').slice(-1)[0].replace('-', ' ')

  return (
    <Layout noindex>
      <SEO title={`EDUCATION - ${capFirstLetter(proTitle)}`}
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <div>
        <h1 className={`poppy txt-center`}>Education - {proTitle} </h1>
        <ProNavigation activePath={activePath} />
      </div>
      {children}

      {/* Orders */}
      <div>
        <hr style={{ marginBlock: '1rem' }} />
        <section style={{ textAlign: 'center' }}>
          <h2 className={'poppy'}>Order Specifics</h2>
          <div>
            <ul data-bullet-list>
              <li>
                <p>Please note we have a $150 minimum order.</p>
              </li>
              <li>
                <p>Orders shipped via UPS within 1-3 business days</p>
              </li>
              <li>
                <p>MC, Visa, American Express, and Discover are accepted</p>
              </li>
            </ul>
          </div>
        </section>
        <hr style={{ marginBlock: '1rem' }} />
      </div>
    </Layout>
  )
}

export default ProLayout
