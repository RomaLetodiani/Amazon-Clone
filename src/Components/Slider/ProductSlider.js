import React, { Component } from 'react';
import Slider from 'react-slick';
import ItemDiv from './ItemDiv';
import { SliderDiv } from './SlyderDiv';
import { Link } from 'react-router-dom';

export default class ProductSlider extends Component {
  render() {
    const { sliderTitle, items } = this.props;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      items.length > 0 && (
        <SliderDiv>
          <h2 className="text-[#0F1111] font-bold text-xl mb-3">
            {sliderTitle}
          </h2>
          <Slider {...settings}>
            {items.map((item) => (
              <Link to={`/shop/${item.categoryId}/${item.id}`} key={item.id}>
                <div>
                  <ItemDiv item={item} />
                </div>
              </Link>
            ))}
          </Slider>
        </SliderDiv>
      )
    );
  }
}
