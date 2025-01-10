import Banner from '@/components/hero/Banner';
import FeaturedProducts from '@/components/hero/FeaturedProducts';
import Features from '@/components/hero/Features';
import Hero from '@/components/hero/Hero';
import LatestProducts from '@/components/hero/LatestProducts';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Banner />
      <LatestProducts />
    </>
  );
}
