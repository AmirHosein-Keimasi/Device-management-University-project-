import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MainPage from "./Components/MainPage";
import AddItem from "./Components/AddItem";
import NearestService from "./Components/NearestService";
import NotFound from "./Components/NotFound";
import ViewItem from "./Components/ViewItem";
import Mainlayouts from "./Layouts/Themes/Mainlayouts";
import { useEffect, useState ,useCallback} from "react";
import { getcategorys } from "./Server/servises";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "./Components/particles";
import Media from './Components/Media.jsx'

function App() {



  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  
  }, []);
  const [CategoryAlldata, setCategorydata] = useState([]);



  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getcategorys();
        setCategorydata(data);
        // console.log(CategoryAlldata);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode("darktheme");
  }, []);

  const handelThemeCheng = () => {
    setMode((prevMode) =>
      prevMode === "lightTheme" ? "darktheme" : "lightTheme"
    );
  };

  return (
    <>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      /> */}
      <Mainlayouts mode={mode}>
        <Navbar CategoryAlldata={CategoryAlldata} handelThemeCheng={handelThemeCheng} />
        <Routes>
          <Route
            path="/"
            element={<MainPage CategoryAlldata={CategoryAlldata} helmetTitle=" مدیریت دیوایس ها" />}
          />{" "}
          <Route
            path="id_category/:itemId"
            element={<ViewItem CategoryAlldata={CategoryAlldata} helmetTitle=" مدیریت دیوایس ها || دیوایس ها" />}
          />
          <Route
            path="/MainPage/add"
            element={
              <AddItem  CategoryAlldata={CategoryAlldata} helmetTitle=" مدیریت دیوایس ها || اضافه کردن دیوایس" />
            }
          />
          <Route
            path="/NearestService"
            element={
              <NearestService helmetTitle=" مدیریت دیوایس ها || نزدیک ترین دیوایس ها" />
            }
          />
          <Route
            path="*"
            element={<NotFound helmetTitle=" صفحه مورد نظر یافت نشد" />}
          />
        </Routes>
        <Media/>
      </Mainlayouts>
    </>
  );
}

export default App;
