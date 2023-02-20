import * as React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    // if the menu is open it would be called "menu active" which we use in the CSS
    <div className={"menu " + (menuOpen && "active")}></div>
  );
}
