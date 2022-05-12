import React from 'react'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';




import testimonialData from '../data/testimonialData'



export default function Testimonials() {
    

    return (
        <section id="testimonials">
            <div className="section__header">
                <h5>Client Feeback</h5>
                <h2>Testimonials</h2>
            </div>
            <Swiper 
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonialData.map(({image, name, review}, index) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__img">
                                <img src={image} alt="" />
                            </div>
                            <h5 className='client-name'>{name}</h5>
                            <small className='client-review'>{review}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
