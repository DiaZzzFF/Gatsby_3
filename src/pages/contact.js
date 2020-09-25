import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>

          <form
            action="https://formspree.io/xleoeqwg"
            method="POST"
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="name"
                required
              />

              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="email"
                required
              />

              <textarea
                className="form-control"
                name="message"
                placeholder="message"
                rows="10"
                required
              />
            </div>

            <button className="submit-btn btn" type="submit">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};


export default ContactPage;
