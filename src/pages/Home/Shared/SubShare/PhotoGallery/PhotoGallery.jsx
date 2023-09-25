
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Certificate from "../../../../../assets/Photo/certificate1.jpg"

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
        
        <SwiperSlide className='p-15'> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={Certificate} alt="" /></SwiperSlide>
        
      </Swiper>
            
            
        </div>
    );
};

export default PhotoGallery;