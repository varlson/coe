import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Slide() {
  return (
    <div className="bg-slate-400 p-2 shadow-xl">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-[calc(100vh-45vh)] grid"
      >
        <SwiperSlide className=" text-center p-2">
          <div className="flex items-end justify-center self-end h-full">
            <div className="text-center rgba500 p-3 rounded-md text-white font-Jura font-bold text-xl">
              quaerat eligendi ratione dolorum, qui culpa expedita unde autem
              itaque, nihil atque sed?
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 2</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 3</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 4</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 5</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 6</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 7</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 8</SwiperSlide>
        <SwiperSlide className=" text-center p-2">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
