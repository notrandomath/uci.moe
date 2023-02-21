import * as React from "react";
import Topbar from "../topbar/topbar";
import Footer from "../footer/Footer";
import Content from "../content/Content.js";
import Menu from "../menu/Menu";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [footerShown, setFooterShown] = React.useState(false);

  // fetches darkmode from storage if it exists otherwise it's null
  const storedDarkmode = localStorage.getItem('darkmode');

  const [darkMode, setDarkMode] = React.useState(
   storedDarkmode != null ? storedDarkmode==="true" :
    // checks if darkmode is enabled on browser for default state
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // keeps darkmode persistent
  React.useEffect(() => {
    localStorage.setItem('darkmode', darkMode);
  }, [darkMode]);

  //only shows footer on scroll
  React.useEffect(() => {
    const handleScroll = event => {
      setFooterShown(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Content children={children}/>
        {footerShown && <Footer menuOpen={menuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />}
    </div>
  )
}