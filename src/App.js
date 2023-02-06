import Topbar from "./components/topbar/Topbar.js";
import Menu from "./components/menu/Menu.js";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
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
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
