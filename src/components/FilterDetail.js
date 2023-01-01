import { Link } from "react-router-dom";
import "../components/filterDetail.css";
import ChevronIcon from "../assets/fi_chevron-down.png";
import CalendarIcon from "../assets/fi_calendar.png";
import ClockIcon from "../assets/fi_clock.png"
import UsersIcon from "../assets/fi_users.png"

const FilterDetail = (props) => {
  return (
    <div className="filterDetail-container">
      <div className="filter-content-detail input">
        <div className="filterDetail-icon icon-1">
          <img src={ChevronIcon}></img>
        </div>
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input">
        <div className="filterDetail-icon icon-2">
          <img src={CalendarIcon}></img>
        </div>
        <label>Kategori</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      {/* Input Harga */}
      <div className="filter-content-detail input">
      <div className="filterDetail-icon icon-3">
          <img src={ClockIcon}></img>
        </div>
        <label>Harga Sewa</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input">
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
