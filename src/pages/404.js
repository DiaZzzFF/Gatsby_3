import React from "react";
import {Link} from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";


const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Dead End" />

      <section className="error">
        <h1 className="visually-hidden">The page does not exist (404)</h1>

        <div className="error__wrapper error-container">
          <h2 className="error__heading">
            oops it&apos;s a dead end
          </h2>

          <Link className="error__btn btn" to="/">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  );
};


export default ErrorPage;
