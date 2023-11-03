import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MainPage from "./Components/MainPage";
import AddItem from "./Components/AddItem";
import NearestService from "./Components/NearestService";
import NotFound from "./Components/NotFound";
import ViewItem from "./Components/ViewItem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/MainPage" />} />
        <Route path="/MainPage/add" element={<AddItem />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/NearestService" element={<NearestService />} />
        <Route path="/MainPage/view/:itemId" element={<ViewItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
