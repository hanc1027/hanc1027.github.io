import React from 'react';

export function MultipleImgBlock({imgList}) {
  const colAmount = imgList.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return <div class={`grid grid-cols-1 ${colAmount} justify-center gap-y-2 sm:gap-x-5 w-full`}>
    {imgList.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
  ))}</div>;
}

