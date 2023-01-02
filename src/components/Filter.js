import "../components/filter.css";

const Filter = (props) => {
  return (
    // <div className="filter-outer-container">
    <div className="filter-container">
      <div className="filter-content input">
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="Ketik Nama / Tipe mobil" className="inputFilter"></input>
      </div>
      <div className="filter-content input ">
        <label>Kategori</label>
        <select onClick={props.fCategory} name="category" id="category" className="dropdown">
          <option value="" disabled selected hidden>
            <span className="dropdown-placeholder">Masukan Kapasitas Mobil</span>
          </option>
          <option value="small">2 - 4 Orang</option>
          <option value="Medium">4 - 6 Orang</option>
          <option value="large">6 - 8 Orang</option>
        </select>
      </div>
      {/* Input Harga */}
      <div className="filter-content input">
        <label>Harga Sewa</label>
        <select onClick={props.fMinPrice} name="price" id="price" className="dropdown">
          <option value="" disabled selected hidden>
            Masukan Harga Sewa Per Hari
          </option>
          <option value="10000000">&#60; Rp 1.000.000 </option>
          <option value="1000000">&#62; Rp 1.000.000</option>
        </select>
      </div>
      <div className="filter-content input availability">
        <label>Status</label>
        <select onClick={props.fStatus} name="status" id="status" className="dropdown">
          <option value="" disabled selected hidden>
            Cek Ketersediaan
          </option>
          <option value="true">Disewa</option>
          <option value="false">Tersedia</option>
        </select>
      </div>
      <div className="button-cariMobil">
        <button onClick={props.handleFilter}>Cari Mobil</button>
      </div>
    </div>
    // </div>
  );
};

export default Filter;

// Harga Sewa Per Hari
{
  /* <div className="filter-content input">
  <label>Harga Sewa Per Hari</label>
  <input onChange={props.fMinPrice} placeholder="Masukan Harga Sewa Per Hari" type="number"></input>
</div>; */
}

//   <div className="input-harga-container">
//   <div className="filter-content input">
//     <label>Harga Sewa Per Hari</label>
//     <input
//     onChange={props.fMinPrice}
//     placeholder={props.isInputDisable ? null : 'Minimal Harga'}
//     className={props.isInputDisable ? 'filter-cars-input-name-disable' : 'filtercars-input-name'}
//     type='number'
//     ></input>
//     <input
//     onChange={props.fMaxPrice}
//     placeholder={props.isInputDisable ? null : 'Maksimal Harga'}
//     className={props.isInputDisable ? 'filtercars-input-name-disable' : 'filtercars-input-name'}
//     type='number'
//     ></input>
//   </div>
// </div>

// Other Price Filter Code
{
  /* <div>
  <div className="filtercars-input-title">
    <p className="filtercars-input-title-p">Harga</p>
  </div>
  <div className="filtercars-input-harga">
    <div>
      <input onChange={props.minPriceFilter} placeholder={props.isInputDisable ? null : "minimal harga"} className={props.isInputDisable ? "filtercars-input-name-disable" : "filtercars-input-name"} type="number" />
    </div>
    <div>
      <input onChange={props.maxPriceFilter} placeholder={props.isInputDisable ? null : "maksimal harga"} className={props.isInputDisable ? "filtercars-input-name-disable" : "filtercars-input-name"} type="number" />
    </div>
  </div>
</div>; */
}
