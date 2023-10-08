import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import book from '../../assets/images/HomeBanner/Books.jpg';
import beauty from '../../assets/images/HomeBanner/beauty.jpg';
import gaming from '../../assets/images/HomeBanner/Gaming.jpg';
import kitchen from '../../assets/images/HomeBanner/kitchen.jpg';
import toys from '../../assets/images/HomeBanner/toys.jpg';
import styled from 'styled-components';

const slideImages = [book, beauty, gaming, kitchen, toys];

const Banners = styled.div`
  .ban {
    background-size: cover;
    background-repeat: no-repeat;
    height: 37vw;
    min-height: 150px;
  }
  button {
    height: 40% !important;
    border-radius: 0 !important;
    width: 2vh !important;
    top: 0 !important;
    background: transparent !important;
    transition: all 0.2s ease-in-out !important;
    padding: 10px;
    box-sizing: content-box;
    &:hover {
      background: rgba(255, 255, 255, 0.6) !important;
    }
  }
`;

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Banners>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="ban"
                style={{ backgroundImage: `url(${slideImage})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </Banners>
    </div>
  );
};
