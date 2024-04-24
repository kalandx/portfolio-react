import React from 'react';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout/Layout';
import Landing from "./pages/Landing.jsx"
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import Thanks from "./pages/Thanks.jsx"
import './App.css';

function App() {
  return (
   <Routes>
   <Route path="/" element={<Layout/>}>
    <Route path="/Landing" element={<Landing/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Skills" element={<Skills/>}/>
    <Route path="Projects" element={<Projects/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Thanks" element={<Thanks/>}/>
   </Route>
   </Routes>
  );
}

export default App;
