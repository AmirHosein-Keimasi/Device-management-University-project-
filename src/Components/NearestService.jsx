import React from "react";
import { Helmet } from "react-helmet-async";

const NearestService = ({ helmetTitle }) => {
  return (
    <div>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
    
    </div>
  );
};

export default NearestService;
