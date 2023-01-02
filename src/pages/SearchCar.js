import "./pages.css";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import CardFilter from "../components/CardFilter";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchCar = () => {
  const [carData, setCarData] = useState([]);
  const [fName, setFName] = useState("");
  const [fCategory, setFCategory] = useState("");
  const [fMinPrice, setFMinPrice] = useState("");
  const [fMaxPrice, setFMaxPrice] = useState("");
  const [fStatus, setFStatus] = useState("");

  // Fungsi Handle Filter
  const handleFilter = (e) => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}&isRented=${fStatus}`)
      .then((res) => {
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
      .then((res) => {
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Fungsi handle query param

  const handleFilterName = (e) => {
    setFName(e.target.value);
    // console.log(e.target.value);
  };

  const handleFilterCategory = (e) => {
    setFCategory(e.target.value);
    // console.log(e.target.value);
  };

  const handlePrice = (e) => {
    if (e.target.value === "cheap"){
        setFMinPrice(0)
        setFMaxPrice(400000)
    } else if (e.target.value === "middle") {
        setFMinPrice(400000)
        setFMaxPrice(600000)
    } else if (e.target.value === "expensive") {
        setFMinPrice(600000)
        setFMaxPrice(100000000)
    } else if (e.target.value === "default") {
        setFMinPrice("")
        setFMaxPrice("")
    } else {
    }
}

  // const handleFilterMinPrice = (e) => {
  //   setFMinPrice(e.target.value);
  // };

  // const handleFilterMaxPrice = (e) => {
  //   setFMaxPrice(e.target.value);
  // };

  const handleFilterStatus = (e) => {
    setFStatus(e.target.value);
  };

  return (
    <div>
      <NavigationBar />
      <Header isBtnShow={false} />
      {/* Kirim Data */}
      <div className="container-for-filter-and-cardFilter">
        <div className="filter-container-onSearchPage">
          <Filter handleFilter={handleFilter} fName={handleFilterName} fCategory={handleFilterCategory}fPrice={handlePrice} fStatus={handleFilterStatus} isInputDisable={false} />
        </div>
        <div className="cardFilter-container-onSearchPage">
          <CardFilter carData={carData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchCar;
