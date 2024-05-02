import React from "react";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
      <Title />
    </>
  );
};

export default Layout;
