import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Components/ProductDetails';
import Cart from './Pages//Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import { useData } from './Contexts/ProductContext';
import Loading from './Components/Loading';

const App = () => {
  const { loading } = useData();

  return (
    <div className="w-full bg-[#E3E6E6] min-h-screen min-w-[280px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="max-w-[1500px] m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop">
                <Route index element={<Shop />} />
                <Route path=":category/:id" element={<ProductDetails />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
