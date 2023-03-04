import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import About from './pages/About';
import Projectgallery from "./components/Projectgallery";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/projectgallery" element={<Projectgallery/>} />
            <Route path="/project" element={<Project/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
