import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addCategories } from "../../store/dataObjs";
import Header from "../../components/Header";
import CardPayment from "../../components/CardPayment";
import CarouselHome from "../../components/CarouselHome";
import RenderProducts from "../../components/RenderProducts";
import ContainerMP from "../../components/ContainerMP";
import SafetyComponent from "../../components/SafetyComponent";
import Recommended from "../../components/Recommended";
import { getCategories } from "../../services/api";
import ContainerMP2 from "../../components/ContainerMP2";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import "./index.scss";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.dataObjs.objProducts);

  useEffect(() => {
    // getCategories().then((response) => {
    //   dispatch(addCategories(response));
    // });
  }, [dispatch]);

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
        <HomeCategories />
        <section className="products">
          {products?.map((alvo) => (
            <RenderProducts key={uuidv4()} alvo={alvo} />
          ))}
        </section>
      </section>
    </div>
  );
}
