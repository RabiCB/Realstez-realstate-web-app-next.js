import React from "react";
import { data } from "data";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { slidesetting } from "./common";
import "swiper/css";
import Link from "next/link";
const Accommodations = () => {
  return (
    <div id="popularresidencies" className="pt-8 px-6 pb-8">
      <h2 className="max-sm:text-xl text-center font-semibold text-2xl text-yellow-500 mb-6">
        Popular Residencies
      </h2>
      
      <Swiper {...slidesetting} >
      
        {data.map((homes) => (
          <SwiperSlide key={homes.id}>
            <Link href={`/residence/${homes.id}`}><div  className="flex items-center justify-center flex-col gap-1 hover:transition-all p-2 hover:duration-300 hover:bg-[#d8d8d8] rounded-lg hover:bg-opacity-25 cursor-pointer hover:shadow-md  ">
              <img
                src={homes.image.outside}
                className="rounded-lg h-[200px] w-[240px] object-cover "
                alt="property logo"
              />
              <span className="flex items-center gap-1">
                <span style={{ color: "orange" }}>$</span>
                <span className="text-xl font-bold">{homes.price}</span>
              </span>
              <h3 className="text-2xl text-[#1f3e72] font-bold">
                {homes.name}
              </h3>
              <p className="text-[10px] text-[#5c5c5c]">{homes.detail}</p>
            </div>
            </Link>

          </SwiperSlide>
        ))}
        <Sliderbuttons />
      </Swiper>
    </div>
  );
};

export default Accommodations;

const Sliderbuttons = () => {
  const swiper = useSwiper();
  return (
    <div  className="bg-slate-200 px-4 py-2 rounded-lg flex gap-3 items-center w-[120px] justify-end float-right mt-6 ">
      <svg
        onClick={() => swiper.slidePrev()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 cursor-pointer hover:bg-white hover:rounded-full p-1 "
      >
        <path
          fillRule="evenodd"
          d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        onClick={() => swiper.slideNext()}
        className="w-8 h-8 cursor-pointer hover:bg-white hover:rounded-full p-1"
      >
        <path
          fill-rule="evenodd"
          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};
