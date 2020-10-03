import React from "react";

import SocialLinks from "../components/SocialLinks";


const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks
        listClass="footer__list"
        linkClass="footer__link"
      />

      <p className="footer__copyright">
        copyright&copy;{new Date().getFullYear()}

        <span className="footer__license"> WebDev</span> all rights reserved
      </p>
    </footer>
  );
};


export default Footer;
