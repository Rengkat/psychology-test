import React from "react";

const Advert = ({ title, paragraph, buttonText, styling, icon }) => {
  return (
    <div className={styling}>
      <div className="p-2">
        <div className="flex justify-center items-center w-20 h-20 mb-3 rounded-full text-white font-bold mx-auto bg-[#6e0ca7] ">
          {icon}
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl py-1">{paragraph}</p>
        <button className="bg-[#6e0ca7] my-4 font-semibold rounded shadow-md py-2 px-3 text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Advert;
