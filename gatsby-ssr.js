const React = require('react')
const config = require('./gatsby-config')


exports.onRenderBody = ({pathname, setHeadComponents,  setHtmlAttributes }) => {
  setHeadComponents([
    <link rel="canonical" href={`${config.siteMetadata.siteUrl}${pathname}`} key={'canonical'}/>,
  ])
  setHtmlAttributes({ lang: `en` })
}
