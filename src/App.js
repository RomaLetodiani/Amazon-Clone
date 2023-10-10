import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Shop from './Components/Shop';
import ProductDetails from './Components/ProductDetails';
import Cart from './Pages//Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import { useData } from './Contexts/ProductContext';
import ReactLoading from 'react-loading';

const App = () => {
  const { loading } = useData();

  return (
    <div className="w-full bg-[#E3E6E6] min-h-screen min-w-[280px]">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ReactLoading
            color={'#febd69'}
            type={'spinningBubbles'}
            height={'100%'}
            width={'clamp(200px,40vw,600px)'}
          />
          <h1 className="p-3 rounded-full border-4 border-[#febd69] absolute font-bold text-xl text-[#f3a744]">
            AMAZON
          </h1>
        </div>
      ) : (
        <>
          <Header />
          <main className="max-w-[1500px] m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop">
                <Route index element={<Shop />} />
                <Route path=":id" element={<ProductDetails />} />
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
