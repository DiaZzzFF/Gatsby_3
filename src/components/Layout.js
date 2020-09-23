import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// import "../css/main.css"


const Layout = ({children}) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};


export default Layout;
