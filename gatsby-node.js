const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const fullPageTemplate = path.resolve('src/templates/fullPageMD.js')
  const speakerTemplate = path.resolve('src/templates/speaker.js')

  return graphql(`
    {
      allFile(filter: { sourceInstanceName: { in: ["pages", "speakers"] } }) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              frontmatter {
                path
              }
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      return Promise.reject(results.errors)
    }

    results.data.allFile.edges.forEach(({ node }) => {
      if (node.childMarkdownRemark) {
        createPage({
          path: node.childMarkdownRemark.frontmatter.path,
          component:
            node.sourceInstanceName === 'speakers'
              ? speakerTemplate
              : fullPageTemplate,
          context: {},
        })
      }
    })
  })
}
