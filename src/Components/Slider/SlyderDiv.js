import styled from 'styled-components';

export const SliderDiv = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  button {
    z-index: 10;
    top: 50%;
    width: 50px;
    height: 0%;
    border-radius: 50px;

    transition: all 0.6s ease-in-out;
    &::before {
      font-size: 50px;
      opacity: 0;
      color: #fff;
      line-height: 3.4;
      transition: opacity 0.4s ease-in-out;
    }
  }
  .slick-prev {
    left: -15px;
  }
  .slick-next {
    right: -15px;
  }
  &:hover {
    button {
      height: 76%;
      background: #00000050;
      &::before {
        opacity: 1;
      }
    }
  }
`;
