import "./navigationBar.css";
import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavigationBar = () => {
  return (
    <div className="navbar-outer-container">
      {["lg"].map((expand) => (
        <Navbar collapseOnSelect key={expand} expand={expand} className="mb-3 navbar-container" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/" className="nav-brand">
              <img src={Logo}></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Nav.Link href="/"><span>BCR</span></Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navigationLink navigationList">
                  <Nav.Link href="#ourServices">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testi">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavigationBar;

{/* <div className="nav-mobile">
  <div className="bcr">
    <h1>BCR</h1>
  </div>
  <div>
    <a href="#ourServices">Our Services</a>
  </div>
  <div>
    <a href="#whyUs">Our Services</a>
  </div>
  <div>
    <a href="#Testimony">Our Services</a>
  </div>
  <div>
    <a href="#FAQ">Our Services</a>
  </div>
</div>; */}
