import { Link } from "react-router-dom";
import "../components/filterDetail.css";
import ChevronIcon from "../assets/fi_chevron-down.png";
import CalendarIcon from "../assets/fi_calendar.png";
import ClockIcon from "../assets/fi_clock.png"
import UsersIcon from "../assets/fi_users.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilterDetail = (props) => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res)
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="filterDetail-container">
      <div className="filter-content-detail input input-1">
        <div className="chosenData chosenCarName">
          <h1>{car.name}</h1>
        </div>
        <div className="filterDetail-icon icon-1">
          <img src={ChevronIcon}></img>
        </div>
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input input-2">
      <div className="chosenData chosenCarCategory">
          {/* <h1>{car.category}</h1> */}
          <h1>Medium</h1>
        </div>
        <div className="filterDetail-icon icon-2">
          <img src={CalendarIcon}></img>
        </div>
        <label>Kategori</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      {/* Input Harga */}
      <div className="filter-content-detail input input-3">
      <div className="chosenData chosenCarPrice">
          <h1>Rp. {car.price}</h1>
        </div>
      <div className="filterDetail-icon icon-3">
          <img src={ClockIcon}></img>
        </div>
        <label>Harga Sewa</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input input-4">
      <div className="chosenData chosenCarStatus">
          {/* <h1>{car.status}</h1> */}
          <h1>Tersedia</h1>
        </div>
      <div className="filterDetail-icon icon-4">
          <img src={UsersIcon}></img>
        </div>
        <label>Status</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="button-gantiMobil">
        <Link to={"/searchcar"}>
          <button>Ganti Mobil</button>
        </Link>
      </div>
    </div>
  );
};

export default FilterDetail;
