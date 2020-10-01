import React from "react";
import {FaTimes} from "react-icons/fa";

import PageLinks from "../components/PageLinks";
import SocialLinks from "../components/SocialLinks";


const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={`sidebar ${(isOpen) ? `sidebar--show` : ``} `}>
      <button
        className="sidebar__close"
        type="button"
        onClick={toggleSidebar}
      >
        <FaTimes className="sidebar__close-img" />
      </button>

      <div className="sidebar__links-box">
        <PageLinks
          listClass={`${isOpen ? `sidebar__list` : ``}`}
          itemClass={`${isOpen ? `sidebar__item` : ``}`}
          linkClass={`${isOpen ? `sidebar__link` : ``}`}
        />

        <SocialLinks
          listClass={`${isOpen ? `sidebar__social-list` : ``}`}
          itemClass={`${isOpen ? `sidebar__social-item` : ``}`}
          linkClass={`${isOpen ? `sidebar__social-link` : ``}`}
        />
      </div>
    </aside>
  );
};


export default Sidebar;
