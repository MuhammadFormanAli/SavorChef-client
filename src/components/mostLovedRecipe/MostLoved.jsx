import React, { useState } from 'react';
import "./most.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";


import "swiper/css";
import { Container } from 'react-bootstrap';

const MostLoved = () => {


  return (
      <div className='pb-5 pt-2 bg-secondary'>
    <Container >
	  <h3 className='text-center fw-bolder fs-1 my-3'>
        Most Loved Recipes
      </h3>
      
      <Swiper 
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}

        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
		
		<SwiperSlide className='swiper1'><span className='fs-1 text-white'>Avocado Salad</span></SwiperSlide>
        <SwiperSlide className='swiper2'><span className='fs-1 text-white'>Chicken Stir-Fry</span></SwiperSlide>
        <SwiperSlide className='swiper3'><span className='fs-1 text-white'>Shrimp Fried Rice</span></SwiperSlide>
        <SwiperSlide className='swiper4'><span className='fs-1 text-white'>Wonton Soup</span></SwiperSlide>
        <SwiperSlide className='swiper5'><span className='fs-1 text-white'>Hot and Sour Soup</span></SwiperSlide>
        <SwiperSlide className='swiper6'><span className='fs-1 text-white'>Kung Pao Chicken</span></SwiperSlide>
        <SwiperSlide className='swiper7'><span className='fs-1 text-white'>Scallion Pancakes</span></SwiperSlide>
		

      </Swiper>
    </Container>
	  </div>
  );
}
    


export default MostLoved;