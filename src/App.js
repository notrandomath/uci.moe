import Topbar from "./components/topbar/Topbar.js";
import Menu from "./components/menu/Menu.js";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">        
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="content"></div>
    </div>
  );
}

export default App;
