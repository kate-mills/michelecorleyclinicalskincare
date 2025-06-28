const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/pros/)) {
    page.matchPath = `/pros/*`

    // Update the page.
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = {}

  results.categoryData = await graphql(`
    query GetCategories {
      categories: allContentfulMccCategory {
        nodes {
          slug
          name
          description {
            description
          }
        }
      }
    }
  `)

  results.productData = await graphql(`
    query GetProducts {
      products: allContentfulMccProduct {
        nodes {
          name
          slug
          description {
            description
          }
        }
      }
    }
  `)

  results.mediaData = await graphql(`
    query GetLogos {
      logos: allContentfulMccMediaImg {
        nodes {
          name
          slug
        }
      }
    }
  `)

  results.categoryData.data.categories.nodes.forEach(category => {
    const {
      slug,
      name,
      description: { description },
    } = category

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        name: name.toLowerCase(),
        title: `Michele Corley ${name}`,
        description,
      },
    })
  })

  results.productData.data.products.nodes.forEach(product => {
    const {
      slug,
      name,
      description: { description },
    } = product

    createPage({
      path: `/products/${slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug,
        title: name,
        description,
      },
    })

    createPage({
      path: `/product-images-and-logos/${slug}`,
      component: path.resolve(`src/templates/product-image-template.js`),
      context: {
        slug,
        title: `Download ${name} Images`,
        description: `Download images of ${name}.`,
      },
    })
  })

  results.mediaData.data.logos.nodes.forEach(logo => {
    const { slug, name } = logo

    createPage({
      path: `/product-images-and-logos/${slug}`,
      component: path.resolve(`src/templates/logo-image-template.js`),
      context: {
        slug,
        title: `Download Michele Corley ${name}`,
        description: `Download Michele Corley ${name}`,
      },
    })
  })
}
