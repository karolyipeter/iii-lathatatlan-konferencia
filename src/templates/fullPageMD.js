import React from 'react'
import { graphql } from 'gatsby'

const Template = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <main className="container">
      <div className="row">
        <div className="col" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`

export default Template
