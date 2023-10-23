import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import { useData } from '../../Contexts/ProductContext';
import ProductSlider from '../Slider/ProductSlider';
import { useDispatch } from 'react-redux';
import { addItem, getTotal } from '../../Redux/slices/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const { productData } = useData();
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
            <div className="flex flex-col flex-1 justify-center lg:items-start items-center gap-5">
              <div className="flex gap-5 lg:flex-row flex-col lg:items-start justify-center items-center">
                <div className="lg:max-w-[400px] flex-1 max-w-[300px] md:min-w-[300px] min-w-[220px]">
                  <img
                    className="w-full"
                    alt={product.name}
                    src={product.image || product.images[0]}
                  />
                </div>
                <div className="lg:max-w-2xl">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <h3 className="text-lg mt-10">Product's Description:</h3>
                  <p>
                    {expanded
                      ? product.description
                      : product.description.slice(0, 500)}
                    {product.description.length > 500 && (
                      <button
                        className="text-[#232f3e] font-bold"
                        onClick={toggleDescription}
                      >
                        {expanded ? '- Show Less' : '... See More'}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 max-[600px]:flex-col lg:flex-col  lg:max-w-[250px]">
              <div className="border-2 flex flex-col flex-1 gap-5 items-start p-5 rounded-lg">
                <div className="flex gap-3">
                  <h3 className="w-20">Price:</h3>
                  <h3 className="font-bold text-lg">${product.price}</h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Brand: </h3>
                  <h3 className="flex-1">{product.brand}</h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Model:</h3>
                  <h3 className="flex-1">{product.model}</h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Ships from:</h3>
                  <h3 className="flex-1">Amazon.com</h3>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-[#FFD814] min-w-[120px] border shadow-lg rounded-lg px-3 py-1 hover:bg-[#F7CA00] text-[#232f3e]"
                >
                  {addingToCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
              <div className="border-2 flex flex-col gap-5 flex-1 p-5 rounded-lg">
                <div className="flex gap-3">
                  <h3 className="w-20">Sold by:</h3>
                  <h3 className="flex-1">Amazon.com</h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Returns:</h3>
                  <h3 className="flex-1">
                    Eligible for Return, Refund or Replacement within 30 days of
                    receipt
                  </h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Payment:</h3>
                  <h3 className="flex-1">Secure transaction</h3>
                </div>
                <div className="flex gap-3">
                  <h3 className="w-20">Support:</h3>
                  <h3 className="flex-1">Product support included</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <ProductSlider
              items={productData.mostDemandProducts}
              sliderTitle={'Most Demand Products'}
            />
            <ProductSlider
              items={productData.latestProducts}
              sliderTitle={'Latest Products'}
            />
          </div>
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
