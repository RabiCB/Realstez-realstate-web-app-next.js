import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const Homepage = () => {
  return (
    <div className="h-[620px] max-md:h-auto pt-8 px-6 pb-8 bg-gradient-to-r from-[#605c5c] to-[#131110]    ">
      <div className="flex justify-around items-start  max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8 ">
        <div className="relative p-2 pt-[60px] flex flex-col gap-4 ">
          <h1 className="max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-md:leading-normal text-5xl  text-white font-bold leading-relaxed  ">
            Discover Best
            <br /> Property
            <br /> Out There
          </h1>
          <p className="text-[#8C8B8B] ">
            Find a variety of properties that suit you very easilty
            <br /> Forget all difficulties in finding a residence for you
          </p>
          <div className="bg-white w-full h-14 rounded-md flex items-center gap-2 px-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#4066ff]"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className=" h-full border-none pl-4  outline-none "
            />
            <button className="py-2 px-5 rounded-md bg-[#4066ff] text-white">
              Search
            </button>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex flex-col gap-4 items-start ">
              <span className="flex gap-2 items-center">
                <CountUp
                  className="text-2xl text-white"
                  start={400}
                  end={600}
                  duration={4}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs text-white">Premium customer</span>
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <span className="flex gap-2 items-center">
                <CountUp
                  className="text-2xl text-white"
                  start={100}
                  end={340}
                  duration={4}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs text-white">Happy Customers</span>
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <span className="flex gap-2 items-center">
                <CountUp
                  className="text-2xl text-white"
                  start={10}
                  end={20}
                  duration={4}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs text-white">Awards</span>
            </div>
          </div>
          <span className="max-md:h-16 max-md:w-16 bg-gradient-to-r from-[#ffb978] to-[#ff922d] h-14 w-14 rounded-full absolute top-12 right-4  opacity-80"></span>
        </div>
        <div className=" h-full">
          <Image
            src="/hero-image.png"
            className="rounded-t-full "
            width={400}
            height={420}
            alt="property"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
