import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Posts from './components/Posts';
import MainPage from './pages/MainPage';
import CarouselPage from './pages/CarouselPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/carousel" element={<CarouselPage />} />
      </Routes>
    </div>
  );
}

export default App;
