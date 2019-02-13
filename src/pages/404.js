import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <h1>Az oldal nem található</h1>
        <Link to="/">Vissza a főoldalra</Link>
    </>
)

export default NotFoundPage
