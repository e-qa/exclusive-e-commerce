import Carousel from './Carousel';
import HeroSidebar from './HeroSidebar';

const Hero = () => {
  return (
    <div className="block lg:flex items-center pt-5 gap-2">
      <div className="w-full lg:w-2/3">
        <Carousel />
      </div>

      <aside className="w-full lg:w-1/3 hidden lg:flex flex-col justify-evenly gap-2">
        <HeroSidebar />
      </aside>
    </div>
  );
};

export default Hero;
