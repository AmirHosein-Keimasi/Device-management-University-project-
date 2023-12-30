import ItemCard from "./ItemCard";
import MainContainer from "./DividereContainer";
import { Helmet } from "react-helmet-async";
import FabAdd from "./FabAdd";
import AddCategory from "./AddCategory"
import Addinputs from "./Addinputs";


const MainPage = ({ helmetTitle, CategoryAlldata }) => {
 

  return (
    <>
     <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <MainContainer />
      <ItemCard CategoryAlldata={CategoryAlldata} />
      <FabAdd />
   {/* <Addinputs/> */}
    </>
  );
};

export default MainPage;
