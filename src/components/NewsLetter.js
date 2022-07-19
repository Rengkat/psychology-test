import React from "react";

const NewsLetter = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-3xl capitalize my-3">
          sign to our newsletter
        </h1>
        <input
          type="text"
          className="p-3 w-[20rem] md:w-[30rem] border-2 border-slate-500 rounded-md"
        />{" "}
        <button className="newleterBtn">Submit</button>
      </div>
    </div>
  );
};

export default NewsLetter;
