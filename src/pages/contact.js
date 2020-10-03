import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";


const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <section className="contact">
        <h2 className="visually-hidden">Contact</h2>

        <div className="contact__wrapper">
          <h3 className="contact__heading">
            get in touch
          </h3>

          <form
            className="contact__form"
            action="https://formspree.io/xleoeqwg"
            method="POST"
          >
            <div className="contact__box">
              <label className="visually-hidden" htmlFor="contact-name">Name</label>
              <input
                className="contact__input"
                type="text"
                name="name"
                id="contact-name"
                placeholder="name"
                required
              />

              <label className="visually-hidden" htmlFor="contact-email">Email</label>
              <input
                className="contact__input"
                type="email"
                name="email"
                id="contact-email"
                placeholder="email"
                required
              />

              <textarea
                className="contact__textarea"
                name="message"
                rows="10"
                placeholder="message"
                required
              />
            </div>

            <button className="contact__btn" type="submit">
              submit here
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};


export default ContactPage;
