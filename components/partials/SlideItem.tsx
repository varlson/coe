import React from "react";
import { SlideProps } from "../../types/types";
import { SwiperSlide } from "swiper/react";

function SlideItem({ title, img_url }: SlideProps) {
  return (
    <div>
      <SwiperSlide className="border border-black relative">
        <div className=" hidden lg:block absolute lg-title-item w-full">
          <div className="flex h-full">
            <p className="bg-slide-title self-end w-9/12 mx-auto p-3 rounded text-white">
              lllllll
            </p>
          </div>
        </div>
        <div className=" lg:hidden flex bottom-2 md:bottom-10 p-3 slide-title">
          <div className="rounded md:py-4 py-2 w-full md:w-9/12 m-auto bg-slide-title">
            <p>title</p>
          </div>
        </div>
        <img className="w-full object-contain lg:h-full" src={img_url} alt="" />
      </SwiperSlide>
    </div>
  );
}

export default SlideItem;
