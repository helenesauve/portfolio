import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Hero from './components/Hero';
import Footer from "./components/Footer"
import Wrapper from './components/Wrapper';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<ProjectCard/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
