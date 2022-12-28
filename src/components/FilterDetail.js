import { Link } from "react-router-dom";
import "../components/filterDetail.css"

const FilterDetail = (props) => {
  return (
    <div className="filterDetail-container">
      <div className="filter-content-detail input">
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input">
        <label>Kategori</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      {/* Input Harga */}
      <div className="filter-content-detail input">
        <label>Harga Sewa</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>

      <div className="filter-content-detail input">
        <label>Status</label>
        <input onChange={props.fName} placeholder="" disabled></input>
      </div>
      <div className="button-gantiMobil">
        <Link to={"/searchcar"}><button>Ganti Mobil</button></Link>
        
      </div>
    </div>
  );
};

export default FilterDetail;