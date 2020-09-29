import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};


export default Header;
