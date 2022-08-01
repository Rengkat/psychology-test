import { useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { restartTest } from "../app/features/testSlice";
const Test = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="hero flex justify-center items-center h-[20vh] md:h-[40vh]">
        <h1 className="text-[#6e0ca7] text-4xl font-bold">TEST</h1>
      </div>
      <main className="w-[80%] mt-20 m-auto h-[60vh]">
        <h1 className="font-bold text-3xl md:text-5xl">
          Are You an Extrovert or Introvert?
        </h1>
        <p className="text-xl md:text-2xl my-3">
          Discover where you fall on the introvert-extrovert spectrum.
        </p>
        {/* Start test button */}
        <button
          onClick={() => dispatch(restartTest())}
          className="bg-[#6e0ca7] hover:bg-[#300a46] rounded-md font-semibold py-3 px-5 shadow-md text-white md:text-xl my-5 ">
          <Link to="/test/question" className="flex space-x-2">
            <span>Start the Test</span>
            <BsArrowRight fontSize={20} className="pt-1 font-semibold" />
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Test;
