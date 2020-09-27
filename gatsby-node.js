const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = {};

  results.productData = await graphql(`
    query GetProducts {
      products: allContentfulMccProduct {
        nodes {
          slug
        }
      }
    }
  `)

  results.mediaData = await graphql(`
    query GetMedias {
      medias: allContentfulMccMediaImg {
        nodes {
          slug
        }
      }
    }
  `)

  results.mediaData.data.medias.nodes.forEach(media => {
    createPage({
      path: `/product-images-and-logos/${media.slug}`,
      component: path.resolve(`src/templates/media-image-template.js`),
      context: { slug: media.slug },
    })
  })

  results.productData.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: { slug: product.slug },
    })
  })

  results.productData.data.products.nodes.forEach(product => {
    createPage({
      path: `/product-images-and-logos/${product.slug}`,
      component: path.resolve(`src/templates/product-image-template.js`),
      context: { slug: product.slug },
    })
  })


}
