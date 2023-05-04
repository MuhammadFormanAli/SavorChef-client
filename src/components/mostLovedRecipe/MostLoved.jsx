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
        <Container>
      <h3 className='text-center fw-bolder fs-1 my-3'>
        Most Loved Recipes
      </h3>
      <br />
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

        modules={[Pagination,Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >

        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe1.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe2.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe3.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe4.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe5.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe6.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='sp1'> <img src="https://poetic-sable-3448b5.netlify.app/img/recipe7.png" alt="" /></div></SwiperSlide>
      </Swiper>
    </Container>
  );
}
    


export default MostLoved;