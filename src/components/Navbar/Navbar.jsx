import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/thanks">Thanks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
