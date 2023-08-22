import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Stores from "./pages/Stores/Stores";
import User from "./pages/User/User";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";



function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Shop />} />
          <Route path="/products/category/:category" element={<Shop />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/users" element={<User />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
  }

export default App;
