import React from 'react';

const MissedPeronImage = ({ src, alt }) => {
  return (
    <div data-testid="MissedPeronImage">
      <img
        src={src}
        alt={alt}
        className="w-32 h-32 sm:w-64 sm:h-64 rounded-full border border-gray-300 mx-auto hover:shadow-2xl"
      />
    </div>
  );
};

export default MissedPeronImage;
