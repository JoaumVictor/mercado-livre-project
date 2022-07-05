import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { addProducts } from '../../store/dataObjs';
import Categories from '../Categories';

const HomeCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dataObjs.objCategories);

  const renderCategories = (id) => {
    getProductsFromCategoryAndQuery(id, '').then((obj) => {
      dispatch(addProducts(obj.results));
    });
  };

  return (
    <section className="categories">
      { categories?.map((item, index) => (
        <Categories key={ index } funk={ renderCategories } item={ item } />
      ))}
    </section>
  );
};

export default HomeCategories;
