import React from 'react';
import Carousel from 'nuka-carousel';

import '../styles/Recommended.scss';

export default function Recommended() {
  return (
    <section className="recommended-container">
      <div>
        <p>Baseada na sua última pesquisa</p>
      </div>
      <div className="recommended-content-1">
        <Carousel
          defaultControlsConfig={ {
            nextButtonText: '>',
            nextButtonStyle: {
              background: 'none',
              color: 'black',
              fontSize: '40px',
            },
            prevButtonStyle: {
              background: 'none',
              color: 'black',
              fontSize: '40px',
            },
            prevButtonText: '<',
            pagingDotsStyle: {
              fill: 'transparent',
              fontSize: '0px',
              width: '30px',
            },
          } }
          wrapAround
          cellSpacing={ 50 }
          swiping
          slidesToShow={ 3 }
          adaptiveHeight
          className="recommended-carousel"
        >
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
          <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/unnamed-2-e1618521494381.jpg" alt="" />
        </Carousel>
      </div>
    </section>
  );
}
