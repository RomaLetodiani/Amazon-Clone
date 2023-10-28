import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import { useDispatch } from 'react-redux';
import { addItem, getTotal } from '../../Redux/slices/cartSlice';
import ProductDetailsCards from './ProductDetailsCards';
import ProductDesc from './ProductDesc';
import RowSliders from '../Slider/RowSliders';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded((prev) => !prev);
  };

  const apiUrl = `https://amazon-digital-prod.azurewebsites.net/api/product/products/${id}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data here
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
        setLoading(false);
      });
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [apiUrl]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Handle the add to cart logic
    setAddingToCart(true);
    dispatch(addItem(product));

    dispatch(getTotal());

    setTimeout(() => {
      setAddingToCart(false);
    }, 1000);
  };

  return (
    <div className="p-5 min-h-[500px] flex flex-col justify-center items-center">
      {product && !loading && (
        <>
          <div className="bg-[#fff] w-full flex justify-center lg:items-start items-center gap-5 flex-col lg:flex-row rounded-lg p-5">
            <ProductDesc
              expanded={expanded}
              toggleDescription={toggleDescription}
              product={product}
            />
            <ProductDetailsCards
              product={product}
              handleAddToCart={handleAddToCart}
              addingToCart={addingToCart}
            />
          </div>

          <RowSliders />
        </>
      )}
      {loading && <Loading minH="min-h-[500px]" text="Loading..." />}
      {!product && !loading && (
        <div className="bg-[#f7f7f7] shadow-xl lg:max-w-full max-w-[240px] text-center text-xl rounded-lg p-5 m-auto">
          <h3>no item has been found on this Link, Please try another one</h3>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
