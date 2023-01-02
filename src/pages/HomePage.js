import "./pages.css"
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import OurServices from "../components/OurServices";

import { useState } from "react";
import WhyUs from "../components/WhyUs";
import Testi from "../components/Testi";
import RentCar from "../components/RentCar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
// import NavbarTest from "../components/NavbarTest";

const HomePage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: "Sewa Mobil dengan Supir di Bali 12 Jam",
    },
    {
      id: 2,
      text: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      id: 3,
      text: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      id: 4,
      text: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      id: 5,
      text: "Layanan Airport Transfer / Drop In - Drop Out",
    },
  ]);
  
  return (
    <div>
      <div className="container-for-header-and-navbar">
        <NavigationBar />
        {/* <NavbarTest /> */}
        <Header isBtnShow={true}/>
        {/* Lempar data ke OurServices */}
      </div>
        <OurServices dataOurServices={data}/>
        <WhyUs />
        <Testi />
        <RentCar />
        <Faq />
        <Footer />
    </div>
  );
};

export default HomePage;