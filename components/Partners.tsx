import React from "react";
import Image from "next/image";
const Partners = () => {
  return (
    <div className="pt-8  pb-8 px-6">
        <h1 className="text-center font-semibold text-2xl mb-4">OUR PATNERS</h1>
      <div className="max-md:grid-cols-2 max-sm:grid-cols-1 max-md:h-auto grid grid-cols-4 gap-6 ">
        <img
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/11/23-min.jpg"
          className="width full rounded-lg h-full object-cover"
          alt="our partners"
        />
        <img
          src="https://images.examples.com/wp-content/uploads/2019/02/Commercial-Real-Estate-Logo.jpg"
          className="width full h-full object-cover rounded-lg"
          alt="our partners"
        />
        <img
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/11/1-min-2.jpg"
          className="width full h-full object-cover rounded-lg"
          alt="our partners"
        />
        <img
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.designhill.com/design-blog/wp-content/uploads/2019/11/12-min.jpg"
          className="width full h-full object-cover rounded-lg"
          alt="our partners"
        />
      </div>
      
    </div>
  );
};

export default Partners;
