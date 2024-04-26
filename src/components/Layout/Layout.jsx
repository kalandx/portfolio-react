import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet/>
    </>
  );
};

export default Layout;
