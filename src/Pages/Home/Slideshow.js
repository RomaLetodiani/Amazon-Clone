import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import { slideImages } from '../../Components/Consts';

const Banners = styled.div`
  .ban {
    background-size: cover;
    background-repeat: no-repeat;
    height: clamp(150px, 37vw, 600px);
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
