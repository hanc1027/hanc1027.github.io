import React from 'react';

export function SinglePostImg({src,  altText=""}) {

  return <><div className="flex flex-col items-center">
  <img className="post-img" src={src} />
  { altText !== "" && <div className="w-auto mt-2 text-skin-altText !text-sm"> {altText} </div>}
  </div><br/></>
}
