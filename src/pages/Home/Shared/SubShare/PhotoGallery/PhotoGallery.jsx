/* 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Certificate1 from "../../../../../assets/Photo/certificate1.jpg"
import Certificate2 from "../../../../../assets/Photo/certificate2.jpg"
import Certificate3 from "../../../../../assets/Photo/certificate3.jpg"
import Certificate4 from "../../../../../assets/Photo/certificate4.jpg"
import Certificate5 from "../../../../../assets/Photo/certificate5.jpg"
import Certificate6 from "../../../../../assets/Photo/certificate6.jpg" 

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const PhotoGallery = () => {
    

    return (
        <div><Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
         <SwiperSlide> <img src={Certificate1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate3} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate4} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate5} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate6} alt="" /></SwiperSlide>
        
      </Swiper>
            
            
        </div>
    );
};

export default PhotoGallery; */