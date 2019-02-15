import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "barion.png" }) {
          childImageSharp {
            fixed(width: 297, height: 36) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <footer
        id="elerhetoseg"
        class="anchor bg-dark text-light contact"
        style={{
          padding: '8rem 0',
        }}
      >
        <div class="container">
          <div class="row text-center">
            <div class="col">
              <h2 class="mb-4">Elérhetőségek</h2>
              <p>
                A konferencia szervezője a{' '}
                <a href="https://lathatatlanegyetem.hu/">
                  Láthatatlan Egyetem Egyesület
                </a>
              </p>
              <p>
                <a href="mailto:konferencia@lathatatlanegyetem.hu">
                  konferencia@lathatatlanegyetem.hu
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/lathatatlanegyetem/">
                  facebook.com/lathatatlanegyetem
                </a>
              </p>
              <p>
                <a href="/terms">ÁSZF</a>
              </p>
              <a href="https://www.barion.com/hu/tajekoztato-biztonsagos-online-fizetesrol">
                <Img fixed={data.file.childImageSharp.fixed} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
