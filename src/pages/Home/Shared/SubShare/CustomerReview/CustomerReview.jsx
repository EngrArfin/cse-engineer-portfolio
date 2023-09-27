import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Projectphoto1 from "../../../../../assets/Photo/Projectphoto1.jpg"
import Projectphoto2 from "../../../../../assets/Photo/Projectphoto2.jpg"
import Projectphoto3 from "../../../../../assets/Photo/Projectphoto3.jpg"
import Projectphoto4 from "../../../../../assets/Photo/Projectphoto4.jpg"
import Projectphoto5 from "../../../../../assets/Photo/Projectphoto5.jpg"
import Projectphoto6 from "../../../../../assets/Photo/Projectphoto6.jpg"


import { Pagination } from "swiper/modules";
import SmallTitle from "../SmallTitle/SmallTitle";
const CustomerReview = () => {
  return (
    <div>
        <SmallTitle smallHeading=" CUSTOMER REVIEW"></SmallTitle>
      <Swiper  
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >        
        <SwiperSlide> <img src={Projectphoto1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Projectphoto2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Projectphoto3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Projectphoto4} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Projectphoto5} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={Projectphoto6} alt="" /> </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default CustomerReview;
