import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from './scenes/Home';
import Shop from './scenes/Shop';
import Checkout from "./scenes/Checkout";
import Navbar from "./scenes/global/Navbar/Navbar";
import Footer from "./scenes/global/Footer/Footer";
import About from "./scenes/About";
import Confirmation from "./scenes/Confirmation";
import AgeModal from "./scenes/global/AgeModal/AgeModal";
import Dashboard from "./scenes/Dashboard";
import Login from "./scenes/Login";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

function Content() {
  const { pathname } = useLocation();
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const ageVerifiedLocal = localStorage.getItem("ageVerified");
    if (ageVerifiedLocal) {
      setAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = () => {
    setAgeVerified(true);
    localStorage.setItem('ageVerified', 'true');
  };

  return (
    <>
      {!ageVerified && <AgeModal onVerified={handleAgeVerification} />}
      <ScrollToTop />
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/category/:category" element={<Shop />} />
          <Route path="/products/:productId" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
