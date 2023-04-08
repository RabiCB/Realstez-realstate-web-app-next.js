import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="pt-6 px-6 pb-8">
      <div className="max-md:grid-cols-1 grid grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-orange-400 font-bold text-xl">Our Contacts</h1>
          <h3 className="font-bold text-3xl text-[#535b79] max-md:text-2xl">
            Ways to Contact us
          </h3>
          <p className="font-bold text-sm text-[#494b56]">
            We always ready to help by providijng the best services for you. We
            believe a good place is
            <br /> important to live can make your life better
          </p>
          <div className="max-lg:grid-cols-1 grid grid-cols-2 gap-4">
            <div className="border-[1px] rounded-sm w-full flex flex-col gap-2 h-[140px] p-6 hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-md">
              <div className="flex items-start max-xl:space-x-4 space-x-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 bg-gray-200 rounded-lg p-2 max-xl:p-[4px] text-[#4066ff]"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col items-start gap-1">
                  <h4 className="font-semibold text-xl">call</h4>
                  <span>+9779823047073</span>
                </div>
              </div>
              <button className="w-full hover:bg-[#4066ff] hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out  hover:text-white rounded-md bg-slate-300 text-[#4066ff] py-2 px-4">
                Call now
              </button>
            </div>
            <div className="border-[1px] rounded-sm w-full flex flex-col gap-2 h-[140px] p-6 hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-md">
              <div className="flex items-start max-xl:space-x-4  space-x-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 bg-gray-200 rounded-lg p-2 max-xl:p-[4px] text-[#4066ff]"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="flex flex-col items-start gap-1">
                  <h4 className="font-semibold text-xl">chat</h4>
                  <span>+9779823047073</span>
                </div>
              </div>
              <button className="w-full hover:bg-[#4066ff]  hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:text-white rounded-md bg-slate-300 text-[#4066ff] py-2 px-4">
                Call now
              </button>
            </div>
            <div className="border-[1px] rounded-sm w-full flex flex-col gap-2 h-[140px] p-6 hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-md">
              <div className="flex items-start max-xl:space-x-4 space-x-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 bg-gray-200 rounded-lg p-2 max-xl:p-[4px] text-[#4066ff]"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="flex flex-col items-start gap-1">
                  <h4 className="font-semibold text-xl">message</h4>
                  <span>+9779823047073</span>
                </div>
              </div>
              <button className="w-full rounded-md hover:bg-[#4066ff] hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out  hover:text-white bg-slate-300 text-[#4066ff] py-2 px-4">
                Call now
              </button>
            </div>
            <div className="border-[1px] rounded-sm w-full flex flex-col gap-2 h-[140px] p-6 hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-md">
              <div className="flex items-start max-xl:space-x-4 space-x-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 bg-gray-200 rounded-lg p-2 max-xl:p-[4px] text-[#4066ff]"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>

                <div className="flex flex-col items-start gap-1">
                  <h4 className="font-semibold text-xl">Video call</h4>
                  <span>+9779823047073</span>
                </div>
              </div>
              <button className="w-full rounded-md hover:bg-[#4066ff] hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in-out  hover:text-white bg-slate-300 text-[#4066ff] py-2 px-4">
                Call now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="max-md:w-full  rounded-t-full h-[520px] w-[90%] border-4 object-cover border-gray-200 opacity-75"
            src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
