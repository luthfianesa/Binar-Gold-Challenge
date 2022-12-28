import "./header.css"
import Car from "../assets/img_car-2.png"
import { Link } from "react-router-dom"


const Header = (props) => {
  return (
    <div className="header-container">
      <div className="txt-header-container">
          <h1>Sewa & Rental Mobil Terbaik </h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          {
            props.isBtnShow ? (<Link to="/searchcar"><button className="btn-header">Mulai Sewa Mobil</button></Link>) : null
          }
          
        </div>
        <div className="img-container">
          <img className="img-header" src={Car}></img>
        </div>
    </div>
  );
};

export default Header;