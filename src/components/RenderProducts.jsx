import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/RenderProducts.scss';

export default class RenderProducts extends Component {
  addToCart = () => {
    const { alvo } = this.props;
    console.log(alvo);
    const previousCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...previousCart, alvo]));
  };

  render() {
    const { alvo: { title, thumbnail, price, id } } = this.props;
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
          onClick={ this.addToCart }
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar as Carrinho
        </button>
      </div>
    );
  }
}

RenderProducts.propTypes = {
  alvo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
