import Topbar from "./components/topbar/Topbar.js";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <div className="topbar">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default App;
