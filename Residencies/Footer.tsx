import React from "react";

const Footer = () => {
  return (
    <div className="max-md:flex-col max-md:gap-8 max-md:auto flex items-center justify-between h-[200px] mt-8 pb-8 px-6">
      <div className="relative  flex items-center justify-center">
        <h2 className="font-bold text-[#4066ff] text-3xl max-md:text-2xl max-sm:text-xl">
          Relstez
        </h2>
        <span className="bg-gradient-to-r from-[#4066ff] to-[#2949c6] h-10 w-10 opacity-40 rounded-full absolute top-0 right-[-10px]"></span>
      </div>
      <div className="flex flex-col gap-3 max-md:justify-center max-md:items-center">
        <h1 className="text-3xl text-[#3f58bd] max-sm:text-xl font-bold">Information</h1>
        <h5 className="text-[#6e6e6e]">44600 Kathmandu ,Nepal</h5>

        <ul className="flex items-center gap-2">
          <li className="font-semibold">Property</li>
          <li className="font-semibold">Services</li>
          <li className="font-semibold">Product</li>
          <li className="font-semibold">About us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
