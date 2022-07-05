import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import '../styles/Header.scss';
import { useDispatch } from 'react-redux';
import { addProducts } from '../store/dataObjs';
import { getProductsFromCategoryAndQuery } from '../services/api';
import disney from '../images/disney.png';
import logo from '../images/mercado-livre-logomarca.png';

export default function Header() {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState('');

  const getProducts = () => {
    getProductsFromCategoryAndQuery('', inputSearch).then((obj) => {
      dispatch(addProducts(obj.results));
    });
  };
  const setInput = ({ target }) => setInputSearch(target.value);

  return (
    <header className="header-content">

      <div className="header-div-1">
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
          <div className="bar"> </div>
          <BsSearch
            className="icon-button"
            data-testid="query-button"
            type="button"
            onClick={ getProducts }
          />
        </div>
        <div className="header-div-2-options">
          <button className="link-button" type="button">Categorias</button>
          <button className="link-button" type="button">Histórico</button>
          <button className="link-button" type="button">Ofertas do dia</button>
          <button className="link-button" type="button">Supermercado</button>
          <button className="link-button" type="button">Moda</button>
          <button className="link-button" type="button">Vender</button>
          <button className="link-button" type="button">Contato</button>
        </div>
      </div>

      <div className="header-div-3">
        <img className="disney" src={ disney } alt="" />
        <div className="sub-div-3">
          <button className="link-button" type="button">Cadastre-se</button>
          <button className="link-button" type="button">Entre</button>
          <button className="link-button" type="button">Compras</button>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <AiOutlineShoppingCart
              className="car-button"
              type="button"
            />
          </Link>
        </div>
      </div>

    </header>
  );
}
