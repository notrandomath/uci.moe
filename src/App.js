import Topbar from "./components/topbar/Topbar.js";
import Footer from "./components/footer/Footer.js";
import Menu from "./components/menu/Menu.js";
import Content from "./pages/Content.js";

import "./app.scss";
import { useState } from "react";

function App() {
  // keeps track of whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    // checks if darkmode is enabled on browser for default state
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <div className="app">
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Content/>
        <Footer menuOpen={menuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
