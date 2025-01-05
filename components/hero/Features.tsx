'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { FaShippingFast } from 'react-icons/fa';
import { LuCircleDollarSign } from 'react-icons/lu';
import { Ri24HoursLine } from 'react-icons/ri';

const Features = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="my-5 py-2 lg:py-8 flex items-center justify-center container ">
        <div className="w-full">
          <Swiper
            spaceBetween={0}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <FaShippingFast className="text-2xl lg:text-5xl" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold">
                    FREE SHIPPING & RETURN
                  </h4>
                  <p className="text-xs lg:text-sm">
                    Free Shipping on All Orders Over $99.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-2 text-center">
                <div>
                  <LuCircleDollarSign className="text-2xl lg:text-5xl" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold">
                    MONEY BACK GUARANTEE
                  </h4>
                  <p className="text-xs lg:text-sm">
                    100% Money Back Guarantee
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <Ri24HoursLine className="text-2xl lg:text-5xl" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold">
                    ONLINE SUPPORT 24/7
                  </h4>
                  <p className="text-xs lg:text-sm">
                    Free Shipping on All Orders Over $99.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
