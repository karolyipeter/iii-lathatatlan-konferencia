import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Az oldal nem található</h1>
    <Link to="/">Vissza a főoldalra</Link>
  </Layout>
);

export default NotFoundPage;
