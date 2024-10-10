'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay ,Pagination ,Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation';  
import {partnerslider} from '../../../data';
const Partner = () => {
    return (
        
        <div className="text-center pt-10 lg:px-16 px-5 py-5 mb-10">
            <div className="xl:w-[700px] m-auto mb-14 sm:w-full">
                <h1 className="text-xl lg:text-3xl  font-semibold ">Our Partners</h1>
                <div className='border-primary_color m-auto w-[20%] lg:w-[10%] border-t-8 rounded-lg my-5'/>
                <p className="text-slate-600">Value Technologies proudly is the partner of the highest end brands for Engineering Solutions Sector and Apparel & non-apparel solutions sector.</p>
            </div>
      <Swiper
       modules={[Autoplay , Navigation]}
       autoplay={{ delay: 1500}}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      speed={1500}
      pagination={true}
    breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
      }}
      
       className="mySwiper text-xl mt-10 text-center"
       >
       { partnerslider.map((resp)=>(
          <>
          <SwiperSlide className='text-center'>
          <img key={resp.id} className='xl:w-full ' src={resp.src} alt=""  />
          <h1 className='text-[70px] mt-8 text-xl font-bold'>{resp.title}</h1>
        </SwiperSlide>
          </>

        ))} 
   
      
      </Swiper>
    </div>
    )
};
export default Partner;