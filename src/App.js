import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Stores from "./pages/Stores/Stores";
import User from "./pages/User/User";
import Checkout from "./pages/Checkout/Checkout";
import SiteHeader from "./components/global/SiteHeader/SiteHeader";
import Footer from "./components/global/Footer/Footer";
import About from "./pages/About/About";


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
        <ScrollToTop />
        <main>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/products/:productId" element={<Shop />} />
            <Route path="/products/category/:category" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<User />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
