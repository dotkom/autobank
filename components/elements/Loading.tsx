import React from 'react';

type props = {
  size?: sizeEnum;
};

const sizeEnum = {
  sm: 'w-4 h-4',
  base: 'w-6 h-6',
  lg: 'w-10 h-10',
  xl: 'w-16 h-16',
  xxl: 'w-32 h-32',
};

type sizeEnum = typeof sizeEnum[keyof typeof sizeEnum];

const Loading = ({ size = 'base' }: props) => {
  console.log(sizeEnum[size]);

  return (
    <div
      className={`animate-spin border-t-transparent ease-linear rounded-full border-4 border-accent ${sizeEnum[size]}`}
    ></div>
  );
};

export default Loading;
