import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import '../styles/Produto.scss';
import logomarca from '../images/logomarca.png';
import disney from '../images/disney.png';
import { getProductForId } from '../services/api';

export default class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      productImg: '',
      productPrice: '',
      productObj: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductForId(id).then((obj) => {
      this.setState({
        productId: id,
        productPrice: obj.price
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        productImg: obj.thumbnail.replace('-I.jpg', '-J.jpg'),
        productObj: obj,
      });
    });
  }

  addToCart = () => {
    const { productObj } = this.state;
    console.log(productObj);
    const previousCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...previousCart, productObj]));
  };

  render() {
    const { productObj, productId, productImg, productPrice } = this.state;
    return (
      <div className="produto-content">

        <header className="header-content">
          <img className="logomarca" src={ logomarca } alt="" />
          <input
            onChange={ this.setInput }
            data-testid="query-input"
            type="text"
          />
          <BsSearch
            className="icon-car"
            data-testid="query-button"
            type="button"
            onClick={ this.getProducts }
          />
          <img className="disney" src={ disney } alt="" />
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <AiOutlineShoppingCart
              className="car-button"
              type="button"
            />
          </Link>
        </header>

        <main className="main-content">
          <div className="main-div">
            <h4 data-testid="product-detail-name">{ productObj.title }</h4>
            <img
              src={ productImg }
              alt={ productObj.title }
            />
            <p>{ productPrice }</p>
            <p>{ productId }</p>
            <button
              onClick={ this.addToCart }
              data-testid="product-detail-add-to-cart"
              type="button"
            >
              Adicionar as Carrinho
            </button>
          </div>
        </main>

      </div>
    );
  }
}

Produto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
