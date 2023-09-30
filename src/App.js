import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";
import Checkout from "./pages/Checkout/Checkout";
import SiteHeader from "./components/global/SiteHeader/SiteHeader";
import Footer from "./components/global/Footer/Footer";
import About from "./pages/About/About";
import Confirmation from "./pages/Confirmation/Confirmation";
import AgeModal from "./components/AgeModal/AgeModal";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  const [verified, setVerified] = useState(false);

    // if (!verified) {
    //     return <AgeModal onVerified={() => setVerified(true)} />;
    // }
  return (
    <div className="App">
      <BrowserRouter>
      {!verified && <AgeModal onVerified={() => setVerified(true)} />}
        <ScrollToTop />
        <main>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/products/category/:category" element={<Shop />} />
            <Route path="/products/:productId" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<Confirmation />} />

          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
