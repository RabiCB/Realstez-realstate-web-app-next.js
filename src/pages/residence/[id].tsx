import { useRouter } from "next/router";
import React, { useState } from "react";
import { data } from "data";
import SkeletonLoading from "Sekeleton";
const about = () => {
  const { query } = useRouter();
  const [moreimages, setMoreimage] = useState(false);
  const home = data.find((residence) => residence.id === query.id);

  if (moreimages === true) {
    return (
      <div className="flex flex-col items-center justify-center gap-4  mt-8 px-6 pb-8">
        <img
          className=" rounded-lg"
          src={home?.image.inside}
          alt="insidehome"
        />
        <img
          className=" rounded-lg"
          src={home?.image.outside}
          alt="insidehome"
        />
        <img className=" rounded-lg" src={home?.image.room} alt="insidehome" />
      </div>
    );
  }

  return (
    <div className="pt-8 px-6 pb-8 ">
      <div className="flex flex-col gap-4">
        {home ? (
          <>
            <div className=" max-md:grid-cols-2 grid grid-cols-3 gap-2">
              <img
                className="col-span-2 rounded-lg"
                src={home?.image.inside}
                alt="insidehome"
              />
              <div className="max-md:flex-row col-span-1 flex flex-col gap-1 relative ">
                <img
                  className=" rounded-lg"
                  src={home?.image.outside}
                  alt="insidehome"
                />
                <img
                  className=" rounded-lg"
                  src={home?.image.room}
                  alt="insidehome"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => setMoreimage(true)}
                  className="w-10 h-10 absolute right-4 bottom-10  cursor-pointer max-md:bottom-4 max-sm:w-6 max-sm:h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold text-#xl max-md:text-2xl max-sm:text-xl text-[#545050]">
                {home?.name}
              </h1>
              <h4 className="font-bold text-#xl max-md:text-2xl max-sm:text-xl text-yellow-600">
                {" "}
                $ {home?.price}
              </h4>
              <p className="font-semibold text-sm">{home?.detail}</p>
            </div>
          </>
        ) : (
          <SkeletonLoading />
        )}
      </div>
    </div>
  );
};

export default about;
