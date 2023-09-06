import React from "react";
import "./carrusel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/css/effect-coverflow";
import promo1 from "/Promo1.png";
import promo2 from "/Promo2.png";

const Carrusel = () => {
  return (
    <div className="containerr">
      <div className="swiperContainer">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: "", clickable: true }}
          initialSlide={2}
          className="swiper_container"
        >
          <SwiperSlide className="swiper-slide">
            <img src={promo1} />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={promo2} />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={promo1} />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={promo2} />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={promo1} />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={promo2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrusel;
