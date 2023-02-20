import * as React from "react"
import Topbar from "../components/topbar/Topbar.js";
import Footer from "../components/footer/Footer.js";
import Content from "../components/content/Content.js";

const IndexPage = () => {
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
    <div className="app">
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Content/>
        {footerShown && <Footer menuOpen={menuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
