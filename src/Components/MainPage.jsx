import React from "react";
import ItemCard from "./ItemCard";
import MainContainer from "./DividereContainer";
import { Helmet } from "react-helmet-async";


const MainPage = ({ helmetTitle, CategoryAlldata }) => {
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <MainContainer />
      <ItemCard CategoryAlldata={CategoryAlldata} />
   
    </>
  );
};

export default MainPage;
