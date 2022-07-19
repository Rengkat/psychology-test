import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Test = () => {
  return (
    <div>
      <div className="hero flex justify-center items-center h-[40vh]">
        <h1 className="text-[#6e0ca7] text-4xl font-bold">TEST</h1>
      </div>
      <main className="w-[80%] mt-20 m-auto h-[60vh]">
        <h1 className="font-bold text-5xl">
          Are You an Extrovert or Introvert?
        </h1>
        <p className="text-2xl">
          Discover where you fall on the introvert-extrovert spectrum.
        </p>
        <button className="bg-[#6e0ca7] hover:bg-[#300a46] rounded-md font-semibold py-3 px-5 shadow-md text-white text-xl my-5 ">
          <Link to="/test/question" className="flex space-x-2">
            <span>Start the Test</span>{" "}
            <BsArrowRight fontSize={30} className="pt-1 font-semibold" />
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Test;
