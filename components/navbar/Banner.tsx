'use client';
import { IoIosClose } from 'react-icons/io';
import Button from '../button/Button';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const getLocalStorageData = window.localStorage.getItem('banner');
    setIsVisible(getLocalStorageData === 'false' ? false : true);
  }, []);

  const handleClose = () => {
    setOpacity(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (opacity === 0) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      localStorage.setItem('banner', 'false');
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [opacity]);

  return (
    isVisible && (
      <div
        className={`w-full py-3 bg-primary text-white transition-opacity duration-1000`}
        style={{ opacity: opacity / 100 }}
      >
        <div className="container">
          <div className="text-center flex items-center justify-center gap-0 lg:gap-20">
            <div className="flex gap-1 flex-wrap items-center justify-center">
              <span className="text-[11px]  lg:text-base">
                Get Up to <b>40% OFF </b>New-Season Styles
              </span>
              <Button
                type="button"
                className="capitalize text-[10px] lg:text-sm p-1 bg-blue-800"
              >
                men
              </Button>
              <Button
                type="button"
                className="capitalize text-[10px] lg:text-sm p-1 bg-blue-800"
              >
                women
              </Button>
              <small className="ml-1 text-[10px] lg:text-[12px] text-slate-300">
                * Limited time only.
              </small>
            </div>
            <div className="absolute right-0 top-0 lg:right-1 lg:top-1">
              <Button type="button" onClick={() => handleClose()}>
                <IoIosClose className="" size={40} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;