import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home.js";
import About from "./about/About.js";
import "./content.scss"

export default function Content() {
  return (
    <div className="content">
      <div className='background'>
          <Router>
            <Routes>
              <Route path="/uci.moe" exact element={<Home />} />
              <Route path="/uci.moe/about" exact element={<About />} />
            </Routes>
          </Router>
      </div>
    </div>
  )
}
