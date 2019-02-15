import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/seo'
import Header from 'src/components/header'
import Hero from 'src/components/hero'
import About from 'src/components/about'
import Speakers from 'src/components/speakers'
import Location from 'src/components/location'
import Sponsors from 'src/components/sponsors'
import Footer from 'src/components/footer'

const getSpeakerData = speakers => {
  return speakers.edges.map(speaker => {
    return {
      id: speaker.node.id,
      name: speaker.node.childMarkdownRemark.frontmatter.name,
      title: speaker.node.childMarkdownRemark.frontmatter.title,
      image:
        speaker.node.childMarkdownRemark.frontmatter.image.childImageSharp
          .fluid,
      path: speaker.node.childMarkdownRemark.frontmatter.path,
    }
  })
}

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="III. Láthatatlan Konferencia"
      keywords={[`konferencia`, `rendezvény`, `Láthatatlan Egyetem`]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Hero />
    <div className="container">
      <section id="esemenyrol" className="row anchor content-block">
        <div className="col">
          <h2>Az eseményről</h2>
          <About />
        </div>
      </section>
      <p className="text-center my-5">
        <a
          className="btn btn-primary"
          role="button"
          href="http://salesautopilot.s3.amazonaws.com/newsletter/letter/nl90422/ns169359/subscribe.html"
        >
          <span className="h1">Megveszem a jegyemet!</span>
        </a>
      </p>
      <section id="eloadok" className="row anchor content-block">
        <div className="col">
          <h2>Előadók</h2>
          <Speakers speakerData={getSpeakerData(data.speakers)} />
        </div>
      </section>
      <section id="helyszin" className="row anchor content-block">
        <div className="col">
          <h2>Helyszín</h2>
          <Location />
        </div>
      </section>
      <section id="vasarlas" className="row anchor content-block">
        <div className="col">
          <h2>Jegyvásárlás</h2>
          <p className="my-5 text-center">
            <a
              className="btn btn-primary"
              role="button"
              href="http://salesautopilot.s3.amazonaws.com/newsletter/letter/nl90422/ns169359/subscribe.html"
            >
              <span className="h1">Megveszem a jegyemet!</span>
            </a>
          </p>
        </div>
      </section>
      <section id="tamogatok" className="row anchor content-block">
        <div className="col">
          <h2>Támogatók</h2>
          <Sponsors />
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    speakers: allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              path
              name
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
