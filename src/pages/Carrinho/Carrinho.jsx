import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import logomarca from '../../images/logomarca.png';
import disney from '../../images/disney.png';
import RenderProductsCart from '../../components/RenderProductsCart';

export default class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.atualizaCarrinho();
  }

  atualizaCarrinho = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ cartProducts: currentCart });
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div className="carrinho-content">

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
          <p>
            Quantidade de itens
            <span>
              { cartProducts.length }
            </span>
          </p>

          {cartProducts.length > 0 ? (
            console.log(cartProducts),
            cartProducts.map((each) => (<RenderProductsCart
              key={ uuidv4() }
              item={ each }
            />))
          ) : (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )}

        </main>

      </div>
    );
  }
}
