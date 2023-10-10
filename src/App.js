import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Components/Shop';
import ProductDetails from './Components/ProductDetails';
import Cart from './Pages//Cart/Cart';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="w-full bg-[#E3E6E6] min-h-screen min-w-[280px]">
      <Header />
      <div className="max-w-[1500px] m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
