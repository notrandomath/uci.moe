import * as React from "react";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // if the topbar is open it would be called "topbar active" which we use in the CSS
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="left">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="right">
        {/* when you click the hamburger it changes menuOpen from true to false and vice versa */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}