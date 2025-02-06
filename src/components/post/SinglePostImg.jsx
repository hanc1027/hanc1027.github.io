import React from 'react';

export function SinglePostImg({src,  altText="", desc=""}) {

  return <><div className="flex flex-col items-center">
  <img className="post-img" src={src} alt={altText} />
  { desc !== "" && <div className="w-auto mt-2 text-skin-altText !text-sm"> {desc} </div>}
  </div><br/></>
}
