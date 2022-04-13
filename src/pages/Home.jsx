import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from '../components/Header';
import Categories from '../components/Categories';
import RenderProducts from '../components/RenderProducts';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/Home.scss';
import '../styles/Header.scss';

export default function Home() {
  const [ objCategories, setObjCategories ] = useState([]);
  const [ objProducts, setObjProducts ] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      setObjCategories(response);
    });
  }, []);

  const renderCategories = (id) => {
    getProductsFromCategoryAndQuery(id, '').then((obj) => {
      setObjProducts(obj.results);
    });
  };

  return (
    <div className="home-content">
      <Header setObjProducts={ setObjProducts } />
      <section className="products-container">
        <section className="categories">
          { objCategories
            .map((item, index) => (
              <Categories key={ index } funk={ renderCategories } item={ item } />
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
    </div>
  );
}
