import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/seo'
import Header from 'src/components/header'
import Hero from 'src/components/hero'
import About from 'src/components/about'
import Schedule from 'src/components/schedule'
import Speakers from 'src/components/speakers'
import Location from 'src/components/location'
import Sponsors from 'src/components/sponsors'
import Footer from 'src/components/footer'

const getSpeakerData = speakers => {
  return speakers.edges.map(({ node }) => {
    return {
      id: node.id,
      name: node.childMarkdownRemark.frontmatter.name,
      title: node.childMarkdownRemark.frontmatter.title,
      time: node.childMarkdownRemark.frontmatter.time,
      description: node.childMarkdownRemark.excerpt,
      image: node.childMarkdownRemark.frontmatter.image.childImageSharp.fluid,
      path: node.childMarkdownRemark.frontmatter.path,
    }
  })
}

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Főoldal"
      keywords={[`konferencia`, `rendezvény`, `Láthatatlan Egyetem`]}
    />
    <Header siteTitle="III. Láthatatlan Konferencia" showNav={true} />
    <Hero
      title="III. Láthatatlan Konferencia"
      subtitle="2019. 02. 23."
      subsubtitle="Budapest"
    />
    <main className="container">
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
      <section id="program" className="row anchor content-block">
        <div className="col">
          <h2>Program</h2>
          <Schedule speakerData={getSpeakerData(data.speakers)} />
        </div>
      </section>
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
    </main>
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
    speakers: allFile(
      filter: { sourceInstanceName: { eq: "speakers" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            excerpt
            frontmatter {
              path
              name
              title
              time
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
