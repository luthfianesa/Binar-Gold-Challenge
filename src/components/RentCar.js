import { Link } from "react-router-dom";
import "./rentCar.css"

const RentCar = () => {
  return (
    <div className="sewaMobil-container">
      <div className="sewaMobil-content-container">
        <div className="sewaMobil-content">
          <h1>Ayo Sewa Mobil Sekarang Juga !</h1>
        </div>
        <div className="sewaMobil-content">
          <p>Kami berkomitmen untuk selalu menyediakan mobil kualitas terbaik dengan harga yang terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </p>
        </div>
        <div className="sewaMobil-content">
          <Link to="/searchcar/"><button>Mulai Sewa Mobil</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default RentCar;