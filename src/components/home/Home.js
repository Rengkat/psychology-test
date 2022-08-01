import React from "react";
import Advert from "./Advert";
import Hero from "./Hero";
import { GiTestTubes } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaResearchgate } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="text-3xl md:text-4xl font-bold text-center capitalize mt-20 md:mt-32 ">
        Welcome to our site
      </h1>
      <p className="md:text-xl text-center px-5 md:mb-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga facere
        earum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20 text-center justify-center p-5 md:px-10 ">
        <Advert
          icon={<GiTestTubes fontSize={30} />}
          styling="advert md:col-span-1 "
          title="Are You an Extrovert or Introvert?"
          paragraph="Discover where you fall on the introvert-extrovert spectrum."
          buttonText="Take a Test"
          linkPage="/test"
        />
        <Advert
          icon={<MdMapsHomeWork fontSize={30} />}
          styling="advert md:col-span-1 "
          title="Career Psychometric"
          paragraph="Top 5 Psychometric Tests for Your Career Success"
          buttonText="Check Out"
          linkPage="/career"
        />
        <Advert
          icon={<FaResearchgate fontSize={30} />}
          styling=" advert md:col-span-1 "
          title="Expore More Psychology Related Resources "
          paragraph=" Lorem ipsum dolor sit amet consectetur. Fugiat iste, dicta deleniti quisquam deserunt delectus?"
          buttonText="Check Out"
          linkPage="/blog"
        />
      </div>
    </div>
  );
};

export default Home;
