import React from 'react';
import AboutMeMain from '../components/aboutMeSection/AboutMeMain';
import HeroGradient from '../components/heroSection/HeroGradient';
import { motion } from 'framer-motion';

const AboutMePage = () => {
  return (
    <div className="pt-[120px]">
      <HeroGradient />
      <AboutMeMain />
    </div>
  );
};

export default AboutMePage;
