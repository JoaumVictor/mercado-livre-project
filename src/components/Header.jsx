import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import '../styles/Header.scss';
import { addProducts } from '../store/dataObjs';
import { useDispatch } from 'react-redux';
import { getProductsFromCategoryAndQuery } from '../services/api';
import disney from '../images/disney.png';
import logo from '../images/mercado-livre-logomarca.png';

export default function Header() {
  const dispatch = useDispatch();
  const [ inputSearch, setInputSearch ] = useState('');

  const getProducts = () => {
    getProductsFromCategoryAndQuery('', inputSearch).then((obj) => {
      dispatch(addProducts(obj.results));
    });
  };
  const setInput = ({ target }) => setInputSearch(target.value);

  return (
    <header className="header-content">

      <div className='header-div-1'>
        <img className="logomarca" src={ logo } alt="" />
        <h1>mercadinho livre</h1>
      </div>

      <div className="header-div-2">
        <div className="header-div-2-search">
          <input
            className="input-search"
            onChange={ setInput }
            data-testid="query-input"
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <div className='bar'> </div>
          <BsSearch
            className="icon-button"
            data-testid="query-button"
            type="button"
            onClick={ getProducts }
          />
        </div>
        <div className="header-div-2-options">
          <p>Categorias</p>
          <p>Ofertas do dia</p>
          <p>Histórico</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Vender</p>
          <p>Contato</p>
        </div>
      </div>

      <div className='header-div-3'>
        <img className="disney" src={ disney } alt="" />
        <div className="sub-div-3">
          <p>Cadastre-se</p>
          <p>Entre</p>
          <p>Compras</p>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <AiOutlineShoppingCart
              className="car-button"
              type="button"
              />
          </Link>
        </div>
      </div>

    </header>
  )
}
