import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
    <div>
      <p className="review__text">
        "El servicio de atención al cliente fue excepcional. Resolvieron todas mis dudas rápidamente y con gran profesionalismo. Definitivamente recomendaré este servicio a mis amigos y familiares."
      </p>
      <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava01} alt="avatar" className="rounded" />
        <h6>Juan Pérez</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
        "La calidad de los productos superó mis expectativas. Cada detalle fue cuidadosamente considerado, y estoy extremadamente satisfecho con mi compra. ¡Sin duda volveré a comprar aquí!"
      </p>
      <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava02} alt="avatar" className="rounded" />
        <h6>María García</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
        "Una experiencia de compra increíble. El sitio web es fácil de navegar y encontré exactamente lo que buscaba. La entrega fue rápida y eficiente. ¡Muy recomendable!"
      </p>
      <div className="slider__content d-flex align-items-center gap-3">
        <img src={ava03} alt="avatar" className="rounded" />
        <h6>Carlos López</h6>
      </div>
    </div>
  </Slider>
  
  );
};

export default TestimonialSlider;
