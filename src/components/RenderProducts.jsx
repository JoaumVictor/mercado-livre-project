import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/RenderProducts.scss';

export default function RenderProducts({ alvo }) {
  const { title, thumbnail, price, id } = alvo;
  const addToCart = () => {
    const previousCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...previousCart, alvo]));
  };

  return (
    <div
      className="card-product"
      data-testid="product"
    >
      <Link
        className="card-product-link"
        data-testid="product-detail-link"
        to={ `/produto/${id}` }
      >
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
      </Link>
      <button
        onClick={ addToCart }
        data-testid="product-add-to-cart"
        type="button"
      >
        Adicionar as Carrinho
      </button>
    </div>
  );
}

RenderProducts.propTypes = {
  alvo: PropTypes.object,
}.isRequired;
