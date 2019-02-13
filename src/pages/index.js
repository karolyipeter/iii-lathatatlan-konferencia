import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/seo'
import Header from 'src/components/header'
import Hero from 'src/components/hero'
import About from 'src/components/about'
import Speakers from 'src/components/speakers'
import Location from 'src/components/location'
import Footer from 'src/components/footer'

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
            <section id="eloadok" className="row anchor content-block">
                <div className="col">
                    <h2>Előadók</h2>
                    <Speakers />
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
                    <p className="lead">Hamarosan...</p>
                </div>
            </section>
        </div>
        <Footer />
    </>
)

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default IndexPage
