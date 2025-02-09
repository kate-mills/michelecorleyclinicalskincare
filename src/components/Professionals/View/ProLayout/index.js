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
  const isBrowser = typeof window !== "undefined"
  if( isBrowser && !isLoggedIn() && location.pathname !== `/pro/login`) {
    navigate(`/pro/login`)
    return null
  }
  let activePath =
    location?.pathname === '/pro'
      ? '/pro/manuals'
      : location.pathname
  let proTitle = activePath.split('/').slice(-1)[0].replace('-', ' ')

  return (
    <Layout noindex>
      <SEO title={`PRO - ${capFirstLetter(proTitle)}`}
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <div>
        <h1 className={`poppy txt-center`}>PRO - Education</h1>
        <ProNavigation activePath={activePath} />
      </div>
      {children}

      {/* Orders */}

      <div>
        <section style={{ textAlign: 'center' }}>
          <OnlineOrders/>
        <hr style={{ marginBlock: '1rem' }} />
          <OrderSpecifics/>
        <hr style={{ marginBlock: '1rem' }} />

        </section>
      </div>
    </Layout>
  )
}

const OrderSpecifics = ()=> {
  return(
    <div>
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
    </div>
  )
}


const OnlineOrders = () => {
  return (
    <div>
    {/* Ordering Online */}
      <h2 className={'poppy'}>Ordering Online</h2>
      {/* EMAIL - GET ACCESS TO ORDER */}
      <div>
        <p>If you need a login to place online orders contact us - 
          <a href="mailto:customerservice@michelecorley.com?subject=I%20Need%20Online%20Ordering%20Access&body=Please%20include%20your%20name,%20spa,%20phone%20number%20and%20other%20important%20details%20below." style={{color: 'var(--poppy)'}}>customerservice@michelecorley.com</a>
        </p>
      </div>
      {/* NOWCOMMERCE */}
      <div style={{marginBlockEnd: '1rem'}}>
        <p>If you already have a login, click below to place online orders.</p>
        <a href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867" target="_blank" rel="noreferrer" className="btn" >Place Online Order</a>
      </div>
    </div>
   )
}

export default ProLayout
