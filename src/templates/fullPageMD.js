import React from 'react'
import { graphql } from 'gatsby'

const Template = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <div className="container">
      <div className="row">
        <div className="col" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
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
