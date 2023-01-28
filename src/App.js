import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import AllServices from './components/Services/AllServices';
import ContactUs from './components/ContactUs';
import { useState } from 'react';

function App() {

  return (
    <div className="App pageContainer">
      <BrowserRouter>
        <Navbar />
        <div className="containerWrap mainContent">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allServices' element={<AllServices />} />
            <Route path='/contactUs' element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
