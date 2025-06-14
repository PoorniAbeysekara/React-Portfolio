import React from 'react';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative border border-mutedGold rounded-md p-2 flex flex-col items-center justify-center w-[120px] h-[80px] shadow-[5px_5px_15px_rgba(255,215,0,0.3)] sm:w-[120px] sm:h-[120px]
    transform hover:translate-y-[-5px] hover:shadow-[10px_10px_15px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-500">
      <div className="text-richMetallicGold text-5xl">{imgSvg}</div>
      <p className="mt-2 text-center text-oliveGreen text-sm sm:text-base font-medium text-white">{text}</p>
    </div>
  );
};

export default SingleSkill;
