import React from 'react';

export function MultipleImgBlock({imgList, isOriginSize = false, altText=""}) {
  // 2張圖片時，不縮小
  // 3張圖片時，才縮一樣大小
  // 可自由代入isOriginSize，選擇是否更新大小
  const colAmount = imgList.length === 2  || imgList.length === 4  ? 'sm:grid-cols-2' : 'sm:grid-cols-3';

  return <><div className={`grid grid-cols-1 ${colAmount} justify-center items-stretch gap-y-2 sm:gap-x-5 w-full`}>
    {imgList.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index + 1}`} className={isOriginSize ||imgList.length === 2 || imgList.length === 4 ? '' : 'post-mul-img'} />

  ))}</div>

  { altText !== "" && <div className="w-full flex justify-center mt-2 text-skin-altText  !text-sm"> {altText} </div>}

  <br/></>;
}

