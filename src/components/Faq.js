import "./faq.css";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div id="faq" className="faq-container">
      <div className="faq-content">
        <div className="heading-faq">
          <h1>Frequently Asked Question</h1>
        </div>
        <div className="small-heading-faq">
          <p>Berikut adalah pertanyaan yang sering ditanyakan terkait sewa mobil </p>
        </div>
      </div>
      <Accordion className="accordion" alwaysOpen>
        {/* 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header className="header">
            <span>Apa saja syarat yang dibutuhkan ?</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Minimal berusia 18 tahun</li>
              <li>Memiliki KTP</li>
              <li>Memiliki SIM A</li>
            </ul>
          </Accordion.Body>
          {/* 2 */}
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="header">
            <span>Berapa hari minimal sewa mobil lepas kunci ?</span>
          </Accordion.Header>
          <Accordion.Body>3 hari adalah waktu minimal untuk sewa mobil lepas kunci</Accordion.Body>
          {/* 3 */}
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="header">
            <span>Berapa hari sebelumnya sebaiknya booking sewa mobil ?</span>
          </Accordion.Header>
          <Accordion.Body>Mohon untuk melakukan booking mobil 3 hari sebelumnya</Accordion.Body>
        </Accordion.Item>
        {/* 4 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header className="header">
            <span>Apakah ada biaya antar-jemput ?</span>
          </Accordion.Header>
          <Accordion.Body>Tidak ada biaya antar jemput</Accordion.Body>
        </Accordion.Item>
        {/* 5 */}
        <Accordion.Item eventKey="4">
          <Accordion.Header className="header">
            <span>Bagaimana jika terjadi kecelakaan saat peminjaman ?</span>
          </Accordion.Header>
          <Accordion.Body className="accident">
            <ul>
              <li>Jika terjadi kecelakan karena kelalaian, penyewa wajib mengganti rugi biaya perbaikan mobil. </li>
              <li>Jika kecelakaan terjadi akibat pengemudi lain dan ditunjukkan dengan bukti, pengemudi tidak diwajibkan membayar ganti rugi. Kami himbau untuk para pengemudi selalu berhati-hati dalam berkendara</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
