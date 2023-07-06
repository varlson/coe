import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { slide } from "../../test/datas";
// import required modules
import { Navigation, Autoplay } from "swiper";
import SlideItem from "./SlideItem";

export default function Slide() {
  return (
    <div className="bg shadow-xl">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-[calc(100vh-50vh)]s md:h-[calc(100vh-45vh)] lg:h-[calc(100vh-35vh)]  grid p-2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slide.map((slideItem) => (
          <SwiperSlide key={slideItem.id} className=" text-center ">
            <div className="">
              <SlideItem
                title={slideItem.title}
                img_url={slideItem.image_url}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
