import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className="shadow-mutedGoldMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-deepForestGreenMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="shadow-mutedGoldMediumShadow absolute top-[300px] left-0 -z-10 opacity-50"></div>
        <div className="shadow-deepForestGreenMediumShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;