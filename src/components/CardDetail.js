import "../components/cardDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  // Ambil id car
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="card-detail-outer-container">
      <div className="card-detail-inner-container">
        {Object.entries(car).length ? (
          <div className="card-detail-content">
            <div className="card-img-container">
              <img src={car.image} alt="car"></img>
            </div>
            <div className="card-heading-container">
              <h1>{car.name}</h1>
            </div>
            <div className="card-billing-container">
              <h1>Total</h1>
            <h1>Rp. {car.price} / Hari</h1>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardDetail;

  
