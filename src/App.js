import React from 'react';
import './App.css';
import Header from './component/header/header';
import Contact from './component/contact/Contact';
import About from './component/About/About';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav/nav';
import Footer from './component/footer/Footer';
import Error from './component/Error/Error';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
