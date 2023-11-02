import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MainPage from "./Components/MainPage";
import AddItem from "./Components/AddItem";
import CloseServises from "./Components/CloseServises";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/MainPage" />} />
        <Route path="/MainPage" element={<MainPage />} />.
        <Route path="add" element={<AddItem />} />
        <Route path="CloseServises" element={<CloseServises />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
