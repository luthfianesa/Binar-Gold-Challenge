import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SearchCar from "./pages/SearchCar"
import CarDetail from "./pages/CarDetail"
import { useEffect } from "react";


const App = () => {
  const DocumentTitle = () => {
    useEffect(() => {
      document.title = "Binar Car Rent"
    })
  }
  return (
    <div>
      <DocumentTitle />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/searchcar" element={<SearchCar/>}/>
        <Route path="/cardetail/:id/" element={<CarDetail/>}/>
      </Routes>
    </div>
  );
};

export default App;
