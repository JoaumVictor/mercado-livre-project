import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { getProductsFromCategoryAndQuery } from '../services/api';
import logomarca from '../images/logomarca.png';
import disney from '../images/disney.png';

export default function Header({ setObjProducts }) {
  const [ inputSearch, setInputSearch ] = useState('');

  const getProducts = () => {
    getProductsFromCategoryAndQuery('', inputSearch).then((obj) => {
      setObjProducts(obj.results);
    });
  };
  const setInput = ({ target }) => setInputSearch(target.value);

  return (
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
            onChange={ setInput }
            data-testid="query-input"
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <BsSearch
            className="icon-car"
            data-testid="query-button"
            type="button"
            onClick={ getProducts }
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
  )
}
