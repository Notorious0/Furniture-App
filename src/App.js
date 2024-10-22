import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';  
import About from './About';  
import Contact from './Contact';  
import Katalog from './Katalog';
import ProductDetail from './ProductDetail';
import Basket from './Basket'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;



