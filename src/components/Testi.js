import "./testi.css"
import TestiPic1 from "../assets/img_photo-1.png";
import TestiPic2 from "../assets/img_photo-2.png";
import TestiPic3 from "../assets/img_photo-2.png";
import Star from "../assets/rate-star.png";
import Carousel from "react-bootstrap/Carousel";

const Testi = () => {
  return (
    <div id="testi" className="testi-container">
      <div className="txt-testi">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="carousel-outer-container">
        <Carousel slide={false} variant="dark" className="carousel-inner-container">
          {/* 1 */}
          <Carousel.Item className="carousel-item">
            <div className="img-carousel">
              <img className="" src={TestiPic1} alt="First slide" />
            </div>
            <div className="txt-carousel">
              <img src={Star} alt="rate-star"></img>
              <p>“ I'm so happy to know Binar Car rental, because they are always help me whenever i need a car to hangout with friends. Really recommended rent car! ”
              </p>
              <span>Deana Dee 27, Surabaya</span>
            </div>
          </Carousel.Item>
          {/* 2 */}
          <Carousel.Item className="carousel-item">
            <div className="img-carousel">
              <img className="" src={TestiPic2} alt="Second slide" />
            </div>
            <div className="txt-carousel">
              <img src={Star} alt="rate-star"></img>
              <p>“ Hell yeah man, never expect i got super services from this awesome car rent. Absolutely gotta do some rent car again ”</p>
              <span>John Dee 32, Gresik</span>
            </div>
          </Carousel.Item>
          {/* 3 */}
          <Carousel.Item className="carousel-item">
            <div className="img-carousel">
              <img className="" src={TestiPic3} alt="Third slide" />
            </div>
            <div className="txt-carousel">
              <img src={Star} alt="rate-star"></img>
              <p>“ Before, i had many bad experiences with some car rent. But Binar Car Rent is totally different, they offer you with plenty good services and fast response ”</p>
              <span>Man Dee 32, Mojokerto</span>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testi;