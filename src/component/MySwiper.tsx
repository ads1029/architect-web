// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import image1 from "../../public/asset/1.jpeg";
import image2 from "../../public/asset/2.jpeg";
import image3 from "../../public/asset/3.jpeg";
import image4 from "../../public/asset/4.jpeg";
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
const MySwiper = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        // navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={image1} alt="image1" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="image1" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="image1" layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} alt="image1" layout="fill" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySwiper;
