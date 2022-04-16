import React from 'react';
import Carousel from 'nuka-carousel';
import '../styles/CarouselHome.scss';
import slide1 from '../images/carousel1.jpg';
import slide2 from '../images/carousel2.jpg';
import slide3 from '../images/carousel3.jpg';
import slide4 from '../images/carousel4.jpg';
import slide5 from '../images/carousel5.jpg';

export default function CarouselHome() {
  return (
    <Carousel
      defaultControlsConfig={{
        nextButtonText: '>',
        nextButtonStyle: {
          background: 'none',
          color: 'white',
          fontSize: '40px',
        },
        prevButtonStyle: {
          background: 'none',
          color: 'white',
          fontSize: '40px',
        },
        prevButtonText: '<',
        pagingDotsStyle: {
          fill: 'white',
          fontSize: '16px',
          width: '30px',
        }
      }}
      swiping={ true }
      pauseOnHover={ true }
      autoplay={ true }
      autoplayInterval={ 10000 }
      wrapAround={ true }
      slidesToShow={ 1 }
      adaptiveHeight={ true }
      className="carousel-content"
    >
      <img src={ slide1 } alt="" />
      <img src={ slide2 } alt="" />
      <img src={ slide3 } alt="" />
      <img src={ slide4 } alt="" />
      <img src={ slide5 } alt="" />
    </Carousel>
  )
}
