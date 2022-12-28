import "./footer.css"
import Facebook from "../assets/icon_facebook.png";
import Instagram from "../assets/icon_instagram.png";
import Twitter from "../assets/icon_twitter.png";
import Mail from "../assets/icon_mail.png";
import Twitch from "../assets/icon_twitch.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="address">
          Jalan Suroyo No. 161 Mayangan Kota<br></br> Probolinggo 672000
        </p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="footer-navigation">
        <ul className="txt-ul">
          <a href="#ourServices" className="txt-li">
            <li>Our Services</li>
          </a>
          <a href="#whyUs" className="txt-li">
            <li>Why Us</li>
          </a>
          <a href="#testi" className="txt-li">
            <li>Testimonial</li>
          </a>
          <a href="#faq" className="txt-li">
            <li>FAQ</li>
          </a>
        </ul>
      </div>
      <div className="footer-content connect-with-us">
        <p className="txt-connect">Connect with us</p>
        <div className="icon-container">
          <a href="https://facebook.com" target="_blank">
            <img src={Facebook} alt="facebook-icon" className="footer-icon"></img>
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={Instagram} alt="instagram-icon" className="footer-icon"></img>
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={Twitter} alt="twitter-icon" className="footer-icon"></img>
          </a>
          <a href="https://gmail.com" target="_blank">
            <img src={Mail} alt="mail-icon" className="footer-icon"></img>
          </a>
          <a href="https://twitch.com" target="_blank">
            <img src={Twitch} alt="twitch-icon" className="footer-icon"></img>
          </a>
        </div>
      </div>
      <div className="footer-content copyright-footer">
        <p className="copyright">Copyright Binar 2022</p>
        <img src={Logo} alt="navbrand" className="copyright"></img>
      </div>
    </div>
  );
};

export default Footer;