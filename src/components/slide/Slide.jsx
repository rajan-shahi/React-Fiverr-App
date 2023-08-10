import React from "react";
import "./slide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";
import 'swiper/css/navigation';

const Slide = () => {
  return (
    <Swiper
    modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <CatCard item={card} />
        </SwiperSlide>
      ))}

    



      ...
    </Swiper>
  );
};

export default Slide;
