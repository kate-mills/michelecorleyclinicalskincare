const React = require('react')
const config = require('./gatsby-config')

exports.onRenderBody = ({ pathname, setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents(
    <link id={'canonical'} rel="canonical" href={`${config.siteMetadata.siteUrl}${pathname}`} />
  )
  setHtmlAttributes({ lang: `en` })
}
