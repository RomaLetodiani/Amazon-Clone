import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages//Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import { useData } from './Contexts/ProductContext';
import Loading from './Components/Loading';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ErrorPage from './Pages/Error/ErrorPage';

const App = () => {
  const { loading } = useData();

  return (
    <div className="w-full bg-[#E3E6E6] min-h-screen min-w-[280px]">
      {loading ? (
        <Loading minH="min-h-screen" text="Amazon" />
      ) : (
        <>
          <Header />
          <main className="max-w-[1500px] m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:categoryId" element={<Shop />} />
              <Route
                path="/shop/:categoryId/:id"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
