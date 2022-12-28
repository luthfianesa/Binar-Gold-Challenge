import "./ourServices.css";
import Woman from "../assets/img_service.png";
import Eclipse from "../assets/ellipse22.png";

const OurServices = (props) => {
  return (
    <div id="ourServices" className="ourServices-container">
      <div className="img-ourServices-container">
        <img src={Woman}></img>
      </div>
      <div className="txt-ourServices-container">
        <h1>Best Car Rental for any kind of trip </h1>
        <p className="p-1">Sewa mobil bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        {/* Nerima data dari homepage */}
        <div className="looped-inner-container">
          {props.dataOurServices.map((items) => {
            return (
              <div className="looped-txt">
                <div className="eclipse-container">
                  <img src={Eclipse} alt="eclipse-checklist" className="eclipse"></img>
                </div>
                <div className="items-text-container">
                  <p className="p-2">{items.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
