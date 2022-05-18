import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addCategories, addProducts } from '../store/dataObjs';
import '../styles/Home.scss';
import Header from '../components/Header';
import CardPayment from '../components/CardPayment';
import Categories from '../components/Categories';
import CarouselHome from '../components/CarouselHome';
import RenderProducts from '../components/RenderProducts';
import ContainerMP from '../components/ContainerMP';
import SafetyComponent from '../components/SafetyComponent';
import Recommended from '../components/Recommended';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ContainerMP2 from '../components/ContainerMP2';

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
      <CarouselHome />
      <CardPayment />
      <Recommended />
      <ContainerMP />
      <ContainerMP2 />
      <SafetyComponent />
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
