import "../components/cardFilter.css";
import { Link } from "react-router-dom";


const CardFilter = (props) => {
  return (
    // <div className="cardFilter-outer-container">
      <div className="cardFilter-inner-container">
        {props.carData.length
          ? props.carData.map((items) => {
              return (
                  <div className="carData">
                    <div className="container-img">
                  <img src={items.image}></img>
                  </div>
                  <div className="container-h1">
                  <h1>{items.name}</h1>
                  <h1>Rp. {items.price} / Hari </h1>
                  </div>
                  <div className="container-p">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="container-btn">
                    <Link to={`/cardetail/${items.id}`}>
                    <button>Pilih Mobil</button></Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    // </div>
  );
};

export default CardFilter;

// const CardFilter = (props) => {
//   // Nampung data mobil
//   const [carData, setCarData] = useState([]);

// useEffect(() => {
//   axios
//     .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
//     .then((res) => {
//       setCarData(res.data.cars);
//     })
//     .catch((err) => console.log(err.message));
// }, []);

 // Liat Data API
  // console.log(carData);