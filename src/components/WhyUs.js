import "./whyUs.css"
import Thumb from "../assets/icon_complete-1.png"
import Price from "../assets/icon_price-1.png"
import TwentyFourHours from "../assets/icon_24hrs-1.png"
import Professional from "../assets/icon_professional-1.png"

const WhyUs = () => {
  return (
    <div className="whyUs-container">
      <div id="whyUs" className="why-us-heading">
          <h1>Why Us</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <ul className="why-us-ul">
          <div className="card-container">
            <div><img src={Thumb} alt="icon-thumb" className="icon-why-us"></img></div>
          <h4>Mobil Lengkap</h4>
          <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div className="card-container">
          <div><img src={Price} alt="icon-price" className="icon-why-us"></img></div>
          <h4>Harga Murah</h4>
          <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div className="card-container">
          <div><img src={TwentyFourHours} alt="icon-clock" className="icon-why-us"></img></div>
          <h4>Layanan 24 Jam</h4>
          <p>Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div className="card-container">
          <div><img src={Professional} alt="icon-professional" className="icon-why-us"></img></div>
          <h4>Sopir Profesional</h4>
          <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </ul>
    </div>
  );
};

export default WhyUs;