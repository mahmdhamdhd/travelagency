import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/gallery" element={<Gallery/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/about" element={<About/>} />




    </Routes>
    <Footer/>
     
    </BrowserRouter>
    
  )
}
export default App
