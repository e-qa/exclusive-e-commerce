import Image from 'next/image';
import Button from '../button/Button';

const HeroSidebar = () => {
  return (
    <>
      <div className="relative w-full h-44 xl:h-56">
        <Image
          src="/images/image1.png"
          alt="banner"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold">
          <p className="text-4xl text-white">40% OFF</p>
          <div className="mt-3">
            <Button type="button" className="text-white">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-44 xl:h-56">
        <Image
          src="/images/image2.jpg"
          alt="banner"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold">
          <p className="text-white text-stroke text-4xl">Starting at $79</p>
          <div className="mt-3">
            <Button type="button" className="text-white">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSidebar;
