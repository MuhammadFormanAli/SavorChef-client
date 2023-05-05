// import React from 'react';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Container } from "react-bootstrap";
import LazyLoad from "react-lazy-load";


const Banner = () => {
    return (
        <Container>
            <LazyLoad>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 5000 }}
                >

                    <SwiperSlide>
                        <div className="banner-swiper-1">
                            <h1 className="text-left">
                                It's Not Just A Food <br /> It's An Experience
                            </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-swiper-2">
                            <h1 className="text-left">
                                It's Not Just A Food <br /> It's An Experience
                            </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-swiper-3">
                            <h1 className="text-left">
                                It's Not Just A Food <br /> It's An Experience
                            </h1>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </LazyLoad>

        </Container>
    );
};

export default Banner;
