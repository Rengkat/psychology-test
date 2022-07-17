import React from "react";
import Advert from "./Advert";
import Hero from "./Hero";
import { GiTestTubes } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaResearchgate } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="text-3xl md:text-5xl font-bold text-center capitalize mt-10 md:mt-32 ">
        Welcome to our site
      </h1>
      <p className="text-xl text-center px-5 md:mb-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga facere
        earum.
      </p>
      <div className="grid grid-cols-4 md:grid-cols-3  gap-5 my-10 text-center justify-center p-2 md:px-10 ">
        <Advert
          icon={<GiTestTubes fontSize={30} />}
          styling="advert col-span-2 md:col-span-1 "
          title="Are You an Extrovert or Introvert?"
          paragraph="Discover where you fall on the introvert-extrovert spectrum."
          buttonText="Take a Test"
        />
        <Advert
          icon={<MdMapsHomeWork fontSize={30} />}
          styling="advert col-span-2 md:col-span-1 "
          title="Career Psychometric"
          paragraph="Top 5 Psychometric Tests for Your Career Success"
          buttonText="Check Out"
        />
        <Advert
          icon={<FaResearchgate fontSize={30} />}
          styling=" advert col-span-4 md:col-span-1 "
          title="Expore More Psychology Related Resources "
          paragraph=" Lorem ipsum dolor sit amet consectetur. Fugiat iste, dicta deleniti quisquam deserunt delectus?"
          buttonText="Check Out"
        />
      </div>
    </div>
  );
};

export default Home;
