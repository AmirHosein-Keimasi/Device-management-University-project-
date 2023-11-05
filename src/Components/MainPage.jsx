import React from "react";
import ItemCard from "./ItemCard";
import MainContainer from "./DividereContainer";
import { Helmet } from "react-helmet-async";

const MainPage = ({ helmetTitle }) => {
  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <MainContainer />
      <ItemCard />
    </>
  );
};

export default MainPage;
