import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addCategories, addProducts } from '../store/dataObjs';
import Header from '../components/Header';
import Categories from '../components/Categories';
import RenderProducts from '../components/RenderProducts';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/Home.scss';
import '../styles/Header.scss';

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dataObjs.objCategories);
  const products = useSelector((state) => state.dataObjs.objProducts);

  useEffect(() => {
    getCategories().then((response) => {
      dispatch(addCategories(response));
    });
  }, [dispatch]);

  const renderCategories = (id) => {
    getProductsFromCategoryAndQuery(id, '').then((obj) => {
      dispatch(addProducts(obj.results));
    });
  };

  return (
    <div className="home-content">
      <Header />
      <section className="products-container">
        <section className="categories">
          { categories?.map((item, index) => (
              <Categories key={ index } funk={ renderCategories } item={ item } />
            ))}
        </section>
        <section className="products">
          { products?.map((alvo) => (<RenderProducts
              key={ uuidv4() }
              alvo={ alvo }
            />))}
        </section>
      </section>
    </div>
  );
}
