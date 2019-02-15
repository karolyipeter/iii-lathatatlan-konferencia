import React from 'react'
import styles from 'src/styles/hero.module.scss'

const Hero = ({ title, subtitle, subsubtitle }) => (
    <section>
        <div className={'jumbotron jumbotron-fluid ' + styles.hero}>
            <div className="container text-light">
                <h1 className="display-4 font-weight-bold">{title}</h1>
                <p className="font-weight-bold">{subtitle}</p>
                <p className="text-uppercase">{subsubtitle}</p>
            </div>
        </div>
    </section>
)

export default Hero
