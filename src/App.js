import Topbar from "./components/topbar/Topbar.js";
import Footer from "./components/footer/Footer.js";
import Menu from "./components/menu/Menu.js";
import Content from "./pages/Content.js";

import "./app.scss";
import { useState, useEffect } from "react";

function App() {
  // keeps track of whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerShown, setFooterShown] = useState(false);

  // fetches darkmode from storage if it exists otherwise it's null
  const storedDarkmode = localStorage.getItem('darkmode');

  const [darkMode, setDarkMode] = useState(
   storedDarkmode != null ? storedDarkmode==="true" :
    // checks if darkmode is enabled on browser for default state
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  // keeps darkmode persistent
  useEffect(() => {
    localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  //
  useEffect(() => {
    const handleScroll = event => {
      setFooterShown(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Content/>
        {footerShown && <Footer menuOpen={menuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
    </div>
  );
}

export default App;
