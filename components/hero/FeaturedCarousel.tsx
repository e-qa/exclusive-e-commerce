'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const FeaturedCarousel = () => {
  return (
    <div className="border-2 mb-12">
      <Swiper
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Navigation, Pagination]}
        className="mySwiper h-[36.3rem]"
      >
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-full gap-5 px-0 md:px-10 lg:px-10 xl:px-20">
            <div className="w-52 h-52 rounded-full bg-primary text-white relative  font-bold">
              <div className="w-1 h-10 bg-[#e5e7eb] absolute -top-10 left-24"></div>
              <div className="w-10 h-10 rounded-full absolute top-4 left-20 bg-white"></div>
              <span className="absolute bottom-20 left-[74px] font-bold text-2xl">
                SALE
              </span>
            </div>
            <h4 className="text-5xl">45% OFF</h4>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              earum. Adipisci molestiae velit at. Labore architecto eaque
              tenetur est soluta numquam mollitia
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded">
              View Sale
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-full gap-5 px-0 md:px-10 lg:px-10 xl:px-20">
            <div className="w-52 h-52 rounded-full bg-primary text-white relative  font-bold">
              <div className="w-1 h-10 bg-[#e5e7eb] absolute -top-10 left-24"></div>
              <div className="w-10 h-10 rounded-full absolute top-4 left-20 bg-white"></div>
              <span className="absolute bottom-20 left-[74px] font-bold text-2xl">
                SALE
              </span>
            </div>
            <h4 className="text-5xl">45% OFF</h4>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              earum. Adipisci molestiae velit at. Labore architecto eaque
              tenetur est soluta numquam mollitia
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded">
              View Sale
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
