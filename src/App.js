import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Components/Shop';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="w-full min-h-screen min-w-[280px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
