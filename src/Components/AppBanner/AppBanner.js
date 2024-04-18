import React from 'react';
import './appBanner.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function AppBanner() {
  return (
    <section className='banner-container'>
        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./Images/ladakh.jpg" alt="ladakh" /></SwiperSlide>
        <SwiperSlide><img src="./Images/manali.jpg" alt="manali" /></SwiperSlide>
        <SwiperSlide><img src="./Images/kerela.jpg" alt="kerela" /></SwiperSlide>
        <SwiperSlide><img src="./Images/rajasthan.jpg" alt="rajasthan" /></SwiperSlide>
        <SwiperSlide><img src="./Images/mountains.jpg" alt="mountains" /></SwiperSlide>
        <SwiperSlide><img src="./Images/beach.jpg" alt="beach" /></SwiperSlide>
      </Swiper>

      <div className='text-overlay'>
        <p>Join Your Next Escape Today!</p>
      </div>
    </section>
  )
}

export default AppBanner