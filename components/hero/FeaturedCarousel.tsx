'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const FeaturedCarousel = () => {
  return (
    <div className="border-2 mb-10">
      <Swiper
        navigation={false}
        modules={[Navigation]}
        className="mySwiper h-[590px]"
      >
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-full gap-10">
            <h4 className="text-5xl">45% OFF</h4>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded">
              View Sale
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-full gap-10">
            <h4 className="text-5xl">45% OFF</h4>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded">
              View Sale
            </button>
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center h-full gap-10">
            <h4 className="text-5xl">45% OFF</h4>

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
