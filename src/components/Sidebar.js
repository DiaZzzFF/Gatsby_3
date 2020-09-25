import { Link } from "gatsby";
import React from "react";
import {FaTimes} from "react-icons/fa";

import PageLinks from "../constants/links";
import SocialLinks from "../constants/socialLinks";


const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={`sidebar ${(isOpen) ? `show-sidebar` : ``} `}>
      <button
        className="close-btn"
        type="button"
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>

      <div className="side-container">
        <PageLinks styleClass={`${isOpen ? `sidebar-links` : ``}`} />
        <SocialLinks styleClass={`${isOpen ? `sidebar-icons` : ``}`} />
      </div>
    </aside>
  );
};


export default Sidebar;
