import React from 'react';
import '../styles/CardPayment.scss';
import pixIcon from '../images/svg1.svg';
import creditIcon from '../images/svg2.svg';
import parcelIcon from '../images/svg3.svg';


export default function CardPayment() {
  return (
    <section className="card-payment-section">
      <div>
        <p className='spotlight'>Pagamento rápido e seguro</p>
        <p className='bgray-color small-font'>com Mercadinho Pago</p>
      </div>
      <img src={ creditIcon } alt="" />
      <div>
        <p className='spotlight'>Até 12 vezes sem juros</p>
        <p className="blue-color small-font">Ver Mais</p>
      </div>
      <img src={ parcelIcon } alt="" />
      <div>
        <p className='spotlight'>Parcelado no boleto</p>
        <p className="blue-color small-font">Conheça o Mercadinho Crédito</p>
      </div>
      <img src={ pixIcon } alt="" />
      <div>
        <p className='spotlight'>Via Pix</p>
        <p className="blue-color small-font">Ver Mais</p>
      </div>
    </section>
  )
}
