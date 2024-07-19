import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Entrega Rápida",
    imgUrl: featureImg01,
    desc: "Descubre nuestra entrega rápida y eficiente para satisfacer tu hambre en minutos.",
  },
  {
    title: "Super Comida en el Lugar",
    imgUrl: featureImg02,
    desc: "Disfruta de nuestras instalaciones para comer y degustar en un ambiente agradable.",
  },
  {
    title: "Fácil Recogida",
    imgUrl: featureImg03,
    desc: "Recoge tus pedidos fácilmente en nuestro punto de recogida cercano.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    switch (category) {
      case "ALL":
        setAllProducts(products);
        break;
      case "BURGER":
        setAllProducts(products.filter((item) => item.category === "Burger"));
        break;
      case "PIZZA":
        setAllProducts(products.filter((item) => item.category === "Pizza"));
        break;
      case "BREAD":
        setAllProducts(products.filter((item) => item.category === "Bread"));
        break;
      default:
        setAllProducts(products);
    }
  }, [category]);

  return (
    <Helmet title="Inicio">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Forma fácil de hacer un pedido</h5>
                <h1 className="mb-4 hero__title">
                  <span>¿HAMBRIENTO?</span> Solo espera <br /> la comida en
                  <span> tu puerta</span>
                </h1>
                <p>
                  Descubre la forma más fácil y rápida de satisfacer tu hambre
                  sin salir de casa.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Ordena ahora <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/alimentos">Ver todos los alimentos</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    Sin cargo de envío
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    Pago seguro al 100%
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="imagen del héroe" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Lo que servimos</h5>
              <h2 className="feature__title">
                Siéntate y relájate en casa
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Descubre nuestra amplia selección de deliciosos alimentos para
                satisfacer todos los gustos.
              </p>
              <p className="feature__text">
                Ofrecemos opciones frescas y sabrosas, perfectas para cualquier
                ocasión.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="imagen de característica"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Más Pedidos</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  Todo
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Hamburguesas
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizzas
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Pan
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="por qué-vivagula" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Por qué <span>ViVagula?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Descubre por qué elegirnos para satisfacer tu hambre y
                  antojos.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Comidas
                      frescas y sabrosas
                    </p>
                    <p className="choose__us-desc">
                      Descubre nuestros alimentos frescos y sabrosos que
                      satisfacen tus antojos.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Soporte de
                      calidad
                    </p>
                    <p className="choose__us-desc">
                      Obtén soporte de calidad cuando necesites ayuda con tus
                      pedidos.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Entrega rápida
                    </p>
                    <p className="choose__us-desc">
                      Disfruta de nuestra entrega rápida para satisfacer tu
                      hambre en minutos.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="network__available">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="network__location">
                <h2 className="network__available-title">
                  Red disponible en
                  <br /> <span>ViVagula</span>
                </h2>
                <p className="network__available-desc">
                  Descubre nuestras ubicaciones disponibles para satisfacer tu
                  hambre y antojos.
                </p>
                <div className="network__info mt-4">
                  <Row>
                    <Col lg="6">
                      <p className="network__info-title d-flex align-items-center gap-2">
                        <i className="ri-map-pin-line"></i> Red de Ubicación
                      </p>
                      <p className="network__info-desc">
                        Descubre nuestras ubicaciones disponibles para
                        satisfacer tu hambre y antojos.
                      </p>
                    </Col>
                    <Col lg="6">
                      <p className="network__info-title d-flex align-items-center gap-2">
                        <i className="ri-user-line"></i> Usuario Requerido
                      </p>
                      <p className="network__info-desc">
                        Usuario y contraseña necesarios para disfrutar de
                        nuestra red.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="vivagula disponible en" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="testimonial__section">
                <TestimonialSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
