import ProductSlider from '../../Components/Slider/ProductSlider';
import { useData } from '../../Contexts/ProductContext';

const RowSliders = () => {
  const { productData } = useData();

  return (
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
  );
};

export default RowSliders;
