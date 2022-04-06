import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Categories from '../components/Categories';
import RenderProducts from '../components/RenderProducts';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import logomarca from '../images/logomarca.png';
import disney from '../images/disney.png';
import '../styles/Home.scss';
import '../styles/Header.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      objCategories: [],
      objProducts: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ objCategories: response });
    });
  }

  renderCategories = (id) => {
    getProductsFromCategoryAndQuery(id, '').then((obj) => {
      this.setState({ objProducts: obj.results });
    });
  };

  getProducts = () => {
    const { inputText } = this.state;
    getProductsFromCategoryAndQuery('', inputText).then((obj) => {
      this.setState({ objProducts: obj.results });
      console.log(obj.results);
    });
  };

  setInput = ({ target }) => this.setState({ inputText: target.value });

  render() {
    const { objCategories, objProducts } = this.state;
    return (
      <div className="home-content">

        <header className="header-content">
          <div>
            <img className="logomarca" src={ logomarca } alt="" />
            <div>
              <p>Informe seu Cep</p>
            </div>
          </div>
          <div className="search-bar">
            <input
              className="input-search"
              onChange={ this.setInput }
              data-testid="query-input"
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
            />
            <BsSearch
              className="icon-car"
              data-testid="query-button"
              type="button"
              onClick={ this.getProducts }
            />
          </div>
          <img className="disney" src={ disney } alt="" />
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <AiOutlineShoppingCart
              className="car-button"
              type="button"
            />
          </Link>
        </header>

        <section className="products-container">
          <section className="categories">
            { objCategories
              .map((item, index) => (
                <Categories key={ index } funk={ this.renderCategories } item={ item } />
              ))}
          </section>
          <section className="products">
            { objProducts
              .map((alvo) => (<RenderProducts
                key={ uuidv4() }
                alvo={ alvo }
              />))}
          </section>
        </section>

        {/* <img src="https://pm1.narvii.com/6357/9a1bda2887b44c5f3d52767e12672ec19ccf3811_hq.jpg" alt="" /> */}

      </div>
    );
  }
}
