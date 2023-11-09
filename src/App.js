import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MainPage from "./Components/MainPage";
import AddItem from "./Components/AddItem";
import NearestService from "./Components/NearestService";
import NotFound from "./Components/NotFound";
import ViewItem from "./Components/ViewItem";
import Mainlayouts from "./Layouts/Themes/Mainlayouts";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode("darktheme");
  }, []);

  const handelThemeCheng = () => {
    setMode((prevMode) => (prevMode === "lightTheme" ? "darktheme" : "lightTheme"));
  };

  return (
    <>
      <Mainlayouts mode={mode}>
        <Navbar handelThemeCheng={handelThemeCheng}/>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/MainPage" helmetTitle=" مدیریت دیوایس ها" />
            }
          />
          <Route
            path="/MainPage/add"
            element={
              <AddItem helmetTitle=" مدیریت دیوایس ها || اضافه کردن دیوایس" />
            }
          />
          <Route
            path="/MainPage"
            element={<MainPage helmetTitle=" مدیریت دیوایس ها" />}
          />
          <Route
            path="/MainPage/Category/:itemId"
            element={<ViewItem helmetTitle=" مدیریت دیوایس ها || دیوایس ها" />}
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
      </Mainlayouts>
    </>
  );
}

export default App;
