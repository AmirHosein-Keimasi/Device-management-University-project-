import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MainPage from "./Components/MainPage";
import AddItem from "./Components/AddItem";
import NearestService from "./Components/NearestService";
import NotFound from "./Components/NotFound";
import ViewItem from "./Components/ViewItem";
import Mainlayouts from "./Layouts/Themes/Mainlayouts";
import { useEffect, useState, useCallback, useMemo } from "react";
import { getcategorys } from "./Server/servises";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "./Components/particles";
import Media from "./Components/Media.jsx";
import { MyContext } from "./Context/MyContext";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useTheme from "@mui/system/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ServiceRecord from "./Components/ServiceRecord.jsx";
import {
  CursorifyProvider,
  DefaultCursor,
  useCursorify,
  useCursorifyDispatch,
  useCursorifyState,
  useUpdateCursorify,
  EmojiCursor
} from "@cursorify/react";
import AddCategory from "./Components/AddCategory.jsx";

function App() {
  const [CategoryAlldata, setCategorydata] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getcategorys();
        setCategorydata(data);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchDate();
    };
  }, []);

  // Design Particel
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  // Set DarkMode
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
      <CursorifyProvider
        cursor={<DefaultCursor />}
        delay={10}
        opacity={10}
        visibleDefaultCursor={false}
        breakpoint={997}
      >
        {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      /> */}
        <MyContext.Provider
          value={{
            CategoryAlldata,
            setCategorydata,
            // DatePick,
            // setDatePick,
            // AdapterJalali,
          }}
        >
          <Mainlayouts mode={mode}>
            <Navbar
              CategoryAlldata={CategoryAlldata}
              handelThemeCheng={handelThemeCheng}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    CategoryAlldata={CategoryAlldata}
                    helmetTitle=" مدیریت دیوایس ها"
                  />
                }
              />{" "}
              <Route
                path="id_category/:itemId"
                element={
                  <ViewItem
                    CategoryAlldata={CategoryAlldata}
                    helmetTitle=" مدیریت دیوایس ها || دیوایس ها"
                  />
                }
              />
              <Route
                path="/MainPage/add"
                element={
                  <AddItem
                    CategoryAlldata={CategoryAlldata}
                    helmetTitle=" مدیریت دیوایس ها || اضافه کردن دیوایس"
                  />
                }
              />
              <Route
                path="/AddCategory"
                element={
                  <AddCategory helmetTitle=" مدیریت دیوایس ها || نزدیک ترین دیوایس ها" />
                }
              />
              <Route
                path="/NearestService/id_product/:itemId"
                element={<ServiceRecord helmetTitle=" صفحه ثبت سرویس" />}
              />
              <Route
                path="id_category/:itemId/id_product/:itemId"
                element={<ServiceRecord helmetTitle=" صفحه ثبت سرویس" />}
              />
              <Route
                path="*"
                element={<NotFound helmetTitle=" صفحه مورد نظر یافت نشد" />}
              />
            </Routes>
            <Media />
          </Mainlayouts>
        </MyContext.Provider>{" "}
      </CursorifyProvider>
    </>
  );
}

export default App;
