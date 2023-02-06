import Topbar from "./components/topbar/Topbar.js";
import Menu from "./components/menu/Menu.js";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  // keeps track of whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" exact element={<div></div>} />
            <Route path="/about" exact element={<div></div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
