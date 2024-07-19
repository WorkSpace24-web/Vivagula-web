import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <p>
              Un espacio moderno y elegante donde podrás disfrutar de una experiencia gastronómica inolvidable. Su cocina se caracteriza por su creatividad e innovación, ofreciendo platos gourmet que sorprenderán a tu paladar.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Horario de Entrega</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Lunes - Domingo</span>
                <p>10:00am - 16:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Lunes - Domingo</span>
              <p>20:00am - 02:00am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contacto</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Ubicación: Paseo de los poetas, Alvarado-1229, Salta.</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Teléfono: +549-3875-8311-225</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Ubicación: Plaza Alvarado, Cnel. Moldes-9, Salta.</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Teléfono: +549-3874-713-196</span>
              </ListGroupItem>


              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: ViVagula@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Boletín Informativo</h5>
            <p>Suscríbete a nuestro boletín</p>
            <div className="newsletter">
              <input type="email" placeholder="Ingresa tu email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, sitio web creado por - F.M.C - Todos los
              derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
