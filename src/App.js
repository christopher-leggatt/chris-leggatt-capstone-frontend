import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";
import SiteHeader from "./components/global/SiteHeader/SiteHeader";
import Footer from "./components/global/Footer/Footer";
import About from "./pages/About";
import Confirmation from "./pages/Confirmation/Confirmation";
import AgeModal from "./components/AgeModal/AgeModal";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";


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
  const [verified, setVerified] = useState(true);

  return (
    <>
      {!verified && pathname !== "/checkout/success" && <AgeModal onVerified={() => setVerified(true)} />}
      <ScrollToTop />
      <main>
        <SiteHeader />
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
