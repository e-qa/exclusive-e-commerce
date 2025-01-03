'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Button from '../button/Button';
import { Kanit } from 'next/font/google';

const lobster = Kanit({ subsets: ['latin'], weight: '400' });

const Carousel = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/images/banner3.jpg"
                alt="banner"
                width={1000}
                height={1000}
                priority
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute top-0 right-2 bottom-0 flex items-center  justify-center ${lobster.className}`}
              >
                <div className="flex flex-col gap-0 xl:gap-2 text-white">
                  <h3 className="text-xl font-bold">STARTING AT $ 199</h3>
                  <h3 className="text-base lg:text-5xl font-bold">
                    Great Deals
                  </h3>
                  <p className="text-base lg:text-2xl font-bold mt-2">
                    Shop now and experience <br /> the best deals on your
                    favorite products!
                  </p>
                  <Button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image
                src="/images/banner1.jpg"
                alt="banner"
                width={1000}
                height={1000}
                priority
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute top-0 right-2 bottom-0 flex items-center  justify-center ${lobster.className}`}
              >
                <div className="flex flex-col gap-0 xl:gap-2 text-black">
                  <h3 className="text-xl font-bold">STARTING AT $ 199</h3>
                  <h3 className="text-base lg:text-5xl font-bold">
                    Great Deals
                  </h3>
                  <p className="text-base lg:text-2xl font-bold mt-2">
                    Shop now and experience <br /> the best deals on your
                    favorite products!
                  </p>
                  <Button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 lg:py-2 text-sm lg:text-base px-4 rounded"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
