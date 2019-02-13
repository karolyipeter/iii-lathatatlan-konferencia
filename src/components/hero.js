import React from 'react'
import styles from 'src/styles/hero.module.scss'

const Hero = () => (
    <section>
        <div className={'jumbotron jumbotron-fluid ' + styles.hero}>
            <div className="container text-light">
                <h1 className="display-4 font-weight-bold">
                    III. Láthatatlan Konferencia
                </h1>
                <p className="font-weight-bold">2019. 02. 23.</p>
                <p className="text-uppercase">Budapest</p>
            </div>
        </div>
    </section>
)

export default Hero
