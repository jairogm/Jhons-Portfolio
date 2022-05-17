import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home, About, Blog, Contact, Projects } from './Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyles from './GlobalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
