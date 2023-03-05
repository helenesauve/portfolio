import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
// import projects from "./projects.json";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/project" element={<Project/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
