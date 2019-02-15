const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const fullPageTemplate = path.resolve('src/templates/fullPageMD.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      return Promise.reject(results.errors)
    }

    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: fullPageTemplate,
        context: {},
      })
    })
  })
}
