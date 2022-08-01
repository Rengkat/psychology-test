import { useSelector, useDispatch } from "react-redux";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getQuizeState, restartTest } from "../app/features/testSlice";
import Introvert from "./Introvert";
import Extrover from "./Extrover";
import { resartScore } from "../app/features/testSlice";
import Ambiver from "./Ambiver";

const FinalPage = () => {
  const { selectedAnswers } = useSelector((store) => store.question);
  const totalScore = selectedAnswers.reduce(
    (total, number) => total + number,
    0
  );
  const average = totalScore / selectedAnswers.length;
  // console.log(average);
  // console.log(selectedAnswers);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(getQuizeState("question"));
    dispatch(restartTest());
    dispatch(resartScore());
  };
  const handleReturnHome = () => {
    dispatch(restartTest());
  };
  const finalDecision = (score) => {
    if (score < 1.5) {
      console.log("introver");
      return <Introvert />;
    } else if (score > 1.5 && score < 2) {
      console.log("ambiver");
      return <Ambiver />;
    } else {
      console.log("extrover");
      return <Extrover />;
    }
  };
  return (
    <>
      <div className="w-[95%] md:w-[70%] mx-auto text-justify md:text-xl mt-20 bg-slate-100 p-4 md:p-20">
        {/* <Introvert /> */}
        {finalDecision(average)}
        {/* <Extrover /> */}
        {/* <Ambiver /> */}
        <div className="buttons md:my-10 flex justify-between space-x-4 my-10">
          <Link to="/test">
            <button
              onClick={handleSubmit}
              className="questionBtnFinal bg-[#661b92]">
              <AiOutlineReload fontSize={20} className="text-white " />
              <span className="md:pl-3">Retake Test</span>
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={handleReturnHome}
              className="questionBtnFinal bg-[#661b92]">
              <span className="md:pr-3">Return Home </span>
              <FaHome fontSize={20} className="text-white pt-1" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FinalPage;

// In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra. You enjoy being noticed by your work peers and your anxiety is linked more to the thought of leaving others indifferent. You need other’s attention to fully exist, but once you’ve crossed the threshold of your home, it’s another matter. You no longer take initiatives, but leave others to decide in your place. When your partner asks you to make a choice or give an opinion about holiday destinations, dinner menus or the children’s activities, you offer little or no input. You’re not comfortable and don’t know how to react and those around you often interpret your passiveness as a lack of interest or a certain reticence.
// The reactions of those around you may make you feel the need to revise your behaviour to close the gap between the two poles of your life. People feel that you compensate in one area of life (public), which you have trouble handling on the other side (private). The public over-activity into which you throw yourself prevents you from expressing your emotions and feelings. At work, rationality and efficiency is asked of you, but even there, emotions and feelings are unavoidable. It’s not by denying or pushing them out of your attention that they cease to exist. Instead, by forcing them out of your conscious mind, they govern you unconsciously. Why are you so afraid of your emotions? What are you afraid of finding deep within yourself? This over-investment in public and professional life could well be, to a certain degree, running away from whatever it is that you don’t master or control. You’d win some inner serenity if you accepted to walk the road of self-knowledge.
