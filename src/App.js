import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages//Cart/Cart';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useData } from './Contexts/ProductContext';
import Loading from './Components/Loading';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ErrorPage from './Pages/Error/ErrorPage';
import SignIn from './Pages/UserSign/SignIn';
import SignUp from './Pages/UserSign/SignUp';

const App = () => {
  const { loading } = useData();
  const location = useLocation();
  const shouldRenderHeaderAndFooter =
    !location.pathname.includes('/sign-in') &&
    !location.pathname.includes('/sign-up');
  return (
    <div className="w-full bg-[#E3E6E6] min-h-screen min-w-[280px]">
      {loading ? (
        <Loading minH="min-h-screen" text="Amazon" />
      ) : (
        <>
          {shouldRenderHeaderAndFooter && <Header />}
          <main
            className={`${
              shouldRenderHeaderAndFooter && 'max-w-[1500px]'
            } m-auto`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:categoryId" element={<Shop />} />
              <Route
                path="/shop/:categoryId/:id"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          {shouldRenderHeaderAndFooter && <Footer />}
        </>
      )}
    </div>
  );
};

export default App;
