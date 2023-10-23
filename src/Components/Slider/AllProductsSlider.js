import React, { Component } from 'react';
import Slider from 'react-slick';
import { SliderDiv } from './SlyderDiv';
import { Link } from 'react-router-dom';

export default class AllProductSlider extends Component {
  render() {
    const { sliderTitle, items } = this.props;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <SliderDiv>
        <h2 className="text-[#0F1111] font-bold text-xl mb-3">{sliderTitle}</h2>
        <Slider {...settings}>
          {items.map((item) => (
            <Link to={`/shop/${item.categoryId}/${item.id}`}>
              <div key={item.id}>
                <img
                  className="m-auto w-auto h-auto max-w-[270px] max-h-[200px] cover object-center aspect-square"
                  src={item.images[0]}
                  alt={item.title}
                />
              </div>
            </Link>
          ))}
        </Slider>
      </SliderDiv>
    );
  }
}
