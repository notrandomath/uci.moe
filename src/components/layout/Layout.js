import * as React from "react";
import { globalHistory } from '@reach/router'
import Topbar from "../topbar/topbar";
import Footer from "../footer/Footer";
import Content from "../content/Content.js";
import Menu from "../menu/Menu";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [footerShown, setFooterShown] = React.useState(false);

  // figures the default value for darkmode when it's being client rendered
  function getDefault() {
    const storedDarkmode = localStorage.getItem("darkmode");
    return storedDarkmode != null
      ? storedDarkmode === "true"
      : // checks if darkmode is enabled on browser for default state
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // https://github.com/dance2die/react-use-localstorage/issues/24 - makes sure it's not being server rendered
  const useSSRLocalStorage = (initial) =>
    typeof window !== "undefined"
      ? getDefault()
      : [initial]; // eslint-disable-line react-hooks/rules-of-hooks

  const [darkMode, setDarkMode] = React.useState(
    useSSRLocalStorage(false)
  );

  // keeps darkmode persistent
  React.useEffect(() => {
    localStorage.setItem("darkmode", darkMode);
  }, [darkMode]);

  //only shows footer on scroll
  React.useEffect(() => {
    const handleScroll = (event) => {
      setFooterShown(window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //hides footer on page change
  React.useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setFooterShown(false)
    })
  }, [setFooterShown])

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content children={children} />
      {footerShown && (
        <Footer
          menuOpen={menuOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
}
