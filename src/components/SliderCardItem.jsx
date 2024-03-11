import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderCard.css";

const SliderCardItem = ({ slides }) => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map((slide) => (
        <Col md={4} sm={12} xs={12} key={slide.id}>
          <SwiperSlide key={slide.id}>
            <div style={{ backgroundColor: slide.color }}>
              <Link
                to="/About"
                className="d-block"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-white mt-4 mb-3">{slide.heading}</h3>
                <h4 className="text-white">{slide.text}</h4>
              </Link>
            </div>
          </SwiperSlide>
        </Col>
      ))}
      <div className="slider-controler">
        <Row className="d-flex mt-3">
          <Col md={6} sm={6} xs={6} className="text-end">
            <div className="swiper-button-prev"></div>
          </Col>
          <Col md={6} sm={6} xs={6} className="text-start">
            <div className="swiper-button-next"></div>
          </Col>
        </Row>
      </div>
    </Swiper>
  );
};

export default SliderCardItem;
