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
          imgRetail {
            localFile {
              publicURL
            }
          }
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

  results.categoryData.data.categories.nodes.forEach(category => {
    createPage({
      path: `/${category.slug}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        name: category.name.toLowerCase(),
        title: `Michele Corley ${category.name}`,
        description: category.description.description,
        category: { ...category },
      },
    })
  })
  results.productData.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
        title: `${product.name}`,
        description: product.description.description,
        image: product.imgRetail.localFile.publicURL,
      },
    })

    createPage({
      path: `/product-images-and-logos/${product.slug}`,
      component: path.resolve(`src/templates/product-image-template.js`),
      context: {
        slug: product.slug,
        title: `Get ${product.name} Images`,
        description: `Download images of ${product.name}.`,
      },
    })
  })
}
