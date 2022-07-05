import React from 'react';

import '../styles/ContainerMP.scss';
import icon1 from '../images/iconSection1.svg';
import icon2 from '../images/iconSection2.svg';
import icon3 from '../images/iconSection3.png';
import icon4 from '../images/iconSection4.png';

export default function ContainerMP() {
  return (
    <section className="container-MP">
      <div className="sub-container-mp-1">
        <div className="sub-container-mp-1-1">
          Assine o nível 6
        </div>
        <div className="sub-container-mp-1-2">
          <p>A partir de</p>
          <p>
            R$ 19
            <sup>90</sup>
            /
            <span>mês</span>
          </p>
          <p>Conforme seu nível</p>
        </div>
      </div>

      <div className="sub-container-mp-2">
        <div>
          <p>Conte com os melhores benefícios no Mercadinho Livre e do Mercadinho Pago</p>
        </div>
        <div>
          <span>
            <img src={ icon1 } alt="" />
            <p>Disney+ sem custo</p>
          </span>
          <span>
            <img src={ icon2 } alt="" />
            <p>Star+ sem custo</p>
          </span>
          <span>
            <img src={ icon3 } alt="" />
            <p>Frete grátis e rápido a partir de R$ 79 e 45% OFF em fretes de menos de R$ 79</p>
          </span>
          <span>
            <img src={ icon4 } alt="" />
            <p>Mais descontos no Mercadinho Pago</p>
          </span>
        </div>
      </div>

      <div className="sub-container-mp-3">
        <button type="button">Assine</button>
      </div>
    </section>
  );
}
