import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Change from "./components/Change";
import { useEffect, useRef } from "react";
import Header from "./components/Header";

const App = () => {
  const firstLoading = useRef(true),
    location = useLocation(),
    navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home firstLoading={firstLoading} />} />
        <Route path="/change/:id" element={<Change />} />
      </Routes>
    </div>
  );
};

export default App;
