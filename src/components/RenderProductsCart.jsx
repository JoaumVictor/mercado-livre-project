import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class RenderProductsCart extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  componentDidMount() {
    const { item } = this.props;
    console.log(item);
  }

  handleQuantity = (valor) => {
    const { item } = this.props;
    const { quantity } = this.state;
    if (valor === '+') this.setState({ quantity: quantity + 1 });
    if (quantity === 0) return console.log(item.id);
    if (valor === '-' && quantity > 0) this.setState({ quantity: quantity - 1 });
  };

  render() {
    const { item: { title, thumbnail, price, id } } = this.props;
    const { quantity } = this.state;
    return (
      <div className="card-cart-product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p>{ id }</p>
        <button
          onClick={ () => this.handleQuantity('-') }
          data-testid="product-decrease-quantity"
          type="button"
        >
          menos
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          onClick={ () => this.handleQuantity('+') }
          data-testid="product-increase-quantity"
          type="button"
        >
          mais
        </button>
      </div>
    );
  }
}

RenderProductsCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  // func: PropTypes.func.isRequired,
};
