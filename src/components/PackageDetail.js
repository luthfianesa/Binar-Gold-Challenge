import "../components/packageDetail.css";
import Accordion from "react-bootstrap/Accordion";

const PackageDetail = () => {
  return (
    <div className="packageDetail-container">
      <Accordion className="accordion-packageDetail" defaultActiveKey={["2"]} alwaysOpen>
        {/* 1 */}
        <h1 className="txt-heading heading">Tentang Paket</h1>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="header"><span className="txt-heading heading-accordion">Include</span></Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </Accordion.Body>
          {/* 2 */}
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordion-item">
          <Accordion.Header className="header"><span className="txt-heading heading-accordion">Exclude</span></Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Tidak termasuk biaya makan sopir Rp 75.000 / hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Accordion.Body>
          {/* 3 */}
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordion-item">
          <Accordion.Header className="header"><span className="txt-heading heading-accordion">Refund, Reschedule, Overtime</span></Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Tidak termasuk biaya makan sopir Rp 75.000 / hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000 / jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000 / hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000 / jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000 / hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000 / jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PackageDetail;
