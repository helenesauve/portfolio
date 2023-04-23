import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from './components/Home';
import Footer from "./components/Footer"
import Wrapper from './components/Wrapper';
import ProjectList from "./pages/ProjectList"
import Resume from "./components/Resume";
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<ProjectList/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;