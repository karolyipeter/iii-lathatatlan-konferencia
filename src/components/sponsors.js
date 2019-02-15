import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = () => (
  <StaticQuery
    query={graphql`
      {
        organizer: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "lathatatlan" }
        ) {
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        co_organizer: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "elteppkhok" }
        ) {
          childImageSharp {
            fixed(height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        others: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "sponsors/others" }
          }
        ) {
          edges {
            node {
              id
              childImageSharp {
                fixed(height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="text-center">
        <h4>Konferencia Szervezője</h4>
        <Img fixed={data.organizer.childImageSharp.fixed} />
        <h4>Konferencia Társszervezője</h4>
        <Img fixed={data.co_organizer.childImageSharp.fixed} />
        <h4>További támogatók</h4>
        {data.others.edges.map(edge => (
          <Img fixed={edge.node.childImageSharp.fixed} key={edge.node.id} />
        ))}
      </div>
    )}
  />
)

export default About
