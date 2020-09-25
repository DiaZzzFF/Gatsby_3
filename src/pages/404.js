import React from "react";
import {Link} from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";


const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Dead End" />

      <main className="error-page">
        <div className="error-container">
          <h1>oops it&apos;s a dead end</h1>

          <Link className="btn" to="/">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};


export default ErrorPage;
