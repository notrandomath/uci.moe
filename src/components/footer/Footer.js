import "./footer.scss";
import "../../global.scss";
import { IconButton } from "@mui/material";
import {LightMode, DarkMode} from "@mui/icons-material";

export default function Footer({menuOpen, darkMode, setDarkMode}) {
  return (
    <div className={"footer " + (menuOpen && "active")}>
      <div className="left"></div>
      <div className="right">
        <span>{darkMode ? "Darkmode ON" : "Darkmode OFF"}</span>
        <IconButton
          className="toggle"
          onClick={() => {setDarkMode(!darkMode)}}
        >
          {darkMode ? <DarkMode fontSize="inherit"/> : <LightMode fontSize="inherit"/>}
        </IconButton>
      </div>
    </div>
  );
}
