import React from "react";
import heroImage from "../app/data/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero h-[50vh] md:h-[100vh] flex items-center justify-center">
      <div className="flex w-[95%] lg:w-[60%] mx-auto">
        <img
          src={heroImage}
          alt="Hero image"
          className="w-40 h-52 md:w-64 md:h-72"
        />
        <div className="w-[55%] absolute z-20 right-4 md:right-10 pl-4 md:pl-1">
          <h1 className="font-bold text-2xl md:text-5xl capitalize md:w-[70%]  ">
            what lies behind your outward calm?
          </h1>
          <p className="my-1 md:my-5 md:w-[70%] md:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            doloremque.
            <span className="hidden md:block">
              Lorem ipsum dolor sit amet, consectetur.
            </span>
          </p>
          <button className="bg-[#6e0ca7] hover:bg-[#2f0746] transition-all duration-500 my-2 py-2 px-3 md:py-3 md:px-5 md:my-5 md:text-xl text-white font-semibold rounded-md shadow capitalize ">
            <Link to="/test">check out</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
