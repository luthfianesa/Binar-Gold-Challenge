import "../components/filter.css";
import { Form } from "react-bootstrap";

const Filter = (props) => {
  return (
    // <div className="filter-outer-container">
    <div className="filter-container">
      {/* Nama Mobil */}
      <div className="filter-content input">
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="Ketik Nama / Tipe Mobil" className="inputFilter"></input>
      </div>
      {/* Kategori */}
      <div className="filter-content input ">
        <label>Kategori</label>
        <Form.Select onClick={props.fCategory} name="category" id="category" className="dropdown">
          <option value="" disabled selected hidden>
            <span className="dropdown-placeholder">Masukan Kapasitas Mobil</span>
          </option>
          <option value="">Masukan Kapasitas Mobil</option>
          <option value="small">2 - 4 Orang</option>
          <option value="Medium">4 - 6 Orang</option>
          <option value="large">6 - 8 Orang</option>
        </Form.Select>
      </div>

      {/* Harga Sewa */}
      <div className="filter-content input">
        <label>Harga Sewa</label>
        <Form.Select onChange={props.fPrice} className="dropdown">
          <option value="default">Pilih Harga Sewa Per Hari</option>
          <option value="cheap"> &lt; Rp. 400.000</option>
          <option value="middle">Rp. 400.000 - Rp. 600.000</option>
          <option value="expensive"> &gt; Rp. 600.000</option>
        </Form.Select>
      </div>

      {/* Status */}
      <div className="filter-content input availability">
        <label>Status</label>
        <Form.Select onClick={props.fStatus} name="status" id="status" className="dropdown">
          <option value="" disabled selected hidden>
            Cek Ketersediaan
          </option>
          <option value="">Cek Ketersediaan</option>
          <option value="true">Disewa</option>
          <option value="false">Tersedia</option>
        </Form.Select>
      </div>
      <div className="button-cariMobil">
        <button onClick={props.handleFilter}>Cari Mobil</button>
      </div>
    </div>
    // </div>
  );
};

export default Filter;

