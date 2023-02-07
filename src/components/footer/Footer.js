import "./footer.scss";
import "../../global.scss";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Footer({menuOpen, darkMode, setDarkMode}) {
  return (
    <div className={"footer " + (menuOpen && "active")}>
      <div className="left"></div>
      <div className="right">
        <span>Darkmode</span>
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
