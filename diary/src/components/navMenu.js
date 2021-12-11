import React from "react";
import { Link } from "react-router-dom";
import { slide as Nav } from "react-burger-menu";
import "../styles/NavMenu.css";

const NavMenu = () => {
  return (
    <Nav>
      <Link to={""} className="menu-item">
        Home
      </Link>

      <Link to={"Diaries"} className="menu-item">
        Diaries
      </Link>

      <Link to={"Entries"} className="menu-item">
        Entries
      </Link>
    </Nav>
  );
};

export default NavMenu;
