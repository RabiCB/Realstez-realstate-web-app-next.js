import React, { useState } from "react";

const Char = () => {
  const [readmore, setReadmore] = useState<Boolean>(false);
  const [readmoremarket, setRedmoremarket] = useState<Boolean>(false);
  const [service, setService] = useState<Boolean>(false);
  return (
    <div className="px-6 pt-6 pb-8 " id="characterstics">
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <div className="max-md:flex max-md:justify-center max-md:items-center max-md:mb-4">
          <img
            alt="doormsgate"
            className="max-md:w-full rounded-t-full h-[520px] w-[80%] border-4 object-cover border-gray-200 opacity-75"
            src="https://images.pexels.com/photos/14381929/pexels-photo-14381929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-orange-400 font-bold text-xl">
            Our Characterstics
          </h2>
          <h1 className="font-bold text-3xl text-[#535b79] max-md:text-2xl">
            Value We Give to You
          </h1>
          <p className="font-bold text-sm text-[#494b56]">
            Our slogan is to give You the best service. We always ready to help by providing
            the best services for you.
            <br /> We believe a good place to live can make your life better
          </p>
          <div className="flex flex-col gap-4 mt-4 ">
            <div className="border-[1px]  rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 bg-gray-300 p-2 rounded-lg text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <h1 className="max-sm:text-sm">Best Interest rates on the market</h1>
                {readmoremarket === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => setRedmoremarket(false)}
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => setRedmoremarket(true)}
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {readmoremarket === true && (
                <div className="flex justify-center items-center mt-4  text-sm text-[#575757]">
                  Invest in your future with our industry-leading interest rates
                  and realstate market. we will provide you the best paying
                  provision over time.
                </div>
              )}
            </div>
            <div className="border-[1px] rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                >
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                    clipRule="evenodd"
                  />
                </svg>

                <h1 className="max-sm:text-sm">Best price on the market</h1>
                {readmore === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => setReadmore(false)}
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() => setReadmore(true)}
                    fill="currentColor"
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {readmore === true && (
                <div className="flex mt-4 justify-center items-center text-sm text-[#575757]">
                  We guarantee you the best price on the market or your money
                  back remember us for your service
                </div>
              )}
            </div>
            <div className="border-[1px] rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>

                <h1 className="max-sm:text-sm">Best support and service while purchasing</h1>
                {service === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => setService(false)}
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onClick={() => setService(true)}
                    fill="currentColor"
                    className="w-8 h-8 bg-gray-300 p-2 rounded-lg cursor-pointer text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {service === true && (
                <div className="flex mt-4 justify-center items-center text-sm text-[#575757]">
                  We go above and beyond to ensure your satisfaction with every purchase you make through us.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Char;
