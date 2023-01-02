import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchCar from "./pages/SearchCar";
import CarDetail from "./pages/CarDetail";
import React, { useEffect } from "react";

const App = () => {
  function Example() {
    useEffect(() => {
      document.title = "Binar Car Rent";
    }, []);
  }
  return (
    <div>
      <Example />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchcar" element={<SearchCar />} />
        <Route path="/cardetail/:id/" element={<CarDetail />} />
      </Routes>
    </div>
  );
};

export default App;
