import React from "react";
import {Link} from "gatsby";
import {FaAlignRight} from "react-icons/fa";

import logo from "../assets/logo.svg";
import PageLinks from "../components/PageLinks";


const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/" >
        <img className="navbar__logo-img" src={logo} alt="logo" />
      </Link>

      <PageLinks
        listClass="navbar__list"
        itemClass="navbar__item"
        linkClass="navbar__link"
      />

      <button
        className="navbar__toggle"
        type="button"
        aria-label="Open sidebar"
        onClick={toggleSidebar}
      >
        <FaAlignRight className="navbar__toggle-img" />
      </button>
    </nav>
  );
};


export default Navbar;
