import React from 'react';
import Carousel from 'nuka-carousel';
import image1 from '../images/image1-mp2.png';
import image2 from '../images/image2-mp2.png';
import image3 from '../images/image3-mp2.png';
import image4 from '../images/image4-mp2.png';

import '../styles/ContainerMP2.scss';

export default function ContainerMP2() {
  return (
    <section className="ContainerMP2-container">
      <div>
        <p>Benefícios do Mercadinho Pontos</p>
      </div>
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
            fill: 'transparent',
            fontSize: '0px',
          }
        }}
        wrapAround={ true }
        swiping={ true }
        slidesToShow={ 3 }
        adaptiveHeight={ true }
        className="ContainerMP2-carousel"
      >
        <img src={ image1 } alt="" className="image" />
        <img src={ image2 } alt="" className="image" />
        <img src={ image3 } alt="" className="image" />
        <img src={ image4 } alt="" className="image" />
      </Carousel>
    </section>
  )
}
