import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => (
  <div>
    <div>
      <Navbar />
    </div>
    <div>{children}</div>
  </div>
);

export default Layout