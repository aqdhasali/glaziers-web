// src/pages/Home.jsx
import React from 'react';
import CardsSection from '../../components/Home/CardsSection';
import CarouselFour from '../../components/Home/CarouselFour';
import CarouselOne from '../../components/Home/CarouselOne';
import CarouselThree from '../../components/Home/CarouselThree';
import CarouselTwo from '../../components/Home/CarouselTwo';
import FAQ from '../../components/Home/FAQ';
import HeroContainer from '../../components/Home/HeroContainer';
import Process from '../../components/Home/Process';
import Services from '../../components/Home/Services';
import Showcase from '../../components/Home/Showcase';
import Testimonial from '../../components/Home/Testimonial';

export default function Home() {
  return (
    <>
      <HeroContainer />
      <CarouselOne />
      <CarouselTwo />
      <CardsSection />
      <CarouselThree />
      <CarouselFour />
      <Services />
      <Process />
      <Showcase />
      <Testimonial />
      <FAQ />
    </>
  );
}