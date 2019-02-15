import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/seo'
import Header from 'src/components/header'
import Hero from 'src/components/hero'
import Footer from 'src/components/footer'

const Template = ({ data }) => {
  const { html } = data.markdownRemark
  const { name, title } = data.markdownRemark.frontmatter
  return (
    <>
      <SEO
        title={`${name} - ${title}`}
        keywords={[name, title, `Láthatatlan Konferencia`]}
      />
      <Header siteTitle={`${name} - ${title}`} />
      <Hero title={name} subtitle={title} />
      <main className="container">
        <div className="row">
          <div
            className="col"
            style={{ minHeight: '100vh' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        title
      }
    }
  }
`

export default Template
