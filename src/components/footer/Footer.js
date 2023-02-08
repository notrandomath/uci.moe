import "./footer.scss";
import "../../global.scss";
import Toggle from "react-toggle";
import "../toggleButton/toggleButton.scss";

export default function Footer({menuOpen, darkMode, setDarkMode}) {
  return (
    <div className={"footer " + (menuOpen && "active")}>
      <div className="left"></div>
      <div className="right">
        <span>{darkMode ? "Darkmode ON" : "Darkmode OFF"}</span>
        <Toggle
          className="toggle"
          icons={false}
          defaultChecked={darkMode}
          onChange={() => {setDarkMode(!darkMode)}}
          //TODO: make state save so that you don't have to keep untoggling or toggling from default
        />
      </div>
    </div>
  );
}
