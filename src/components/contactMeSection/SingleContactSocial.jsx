import React from 'react'

const SingleContactSocial = ({Icon, link}) => {
  return (
    <div className="text-2xl h-12 border border-sageTintedOlive text-sageTintedOlive hover:text-richMetallicGold hover:border-richMetallicGold transition-all duration-500 rounded-full p-3 flex items-center justify-center">
        <a href={link} className="cursor-pointer">
            <Icon />
        </a>
    </div>
  );
};

export default SingleContactSocial;