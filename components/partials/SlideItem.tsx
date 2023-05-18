import React from "react";
import { SlideProps } from "../../types/types";
import { SwiperSlide } from "swiper/react";

function SlideItem({ title, img_url }: SlideProps) {
  return (
    <div>
      <SwiperSlide className="relative">
        <p className="p-3 bg-blue-300  left-0 right-0 absolute">title</p>
        <img className="h-full w-full object-contain" src={img_url} alt="" />
      </SwiperSlide>
    </div>
  );
}

export default SlideItem;
