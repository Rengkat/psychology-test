import MainTest from "./MainTest";
import { useSelector } from "react-redux";
import FinalPage from "./FinalPage";

const Question = () => {
  const { quizeState } = useSelector((store) => store.question);

  return (
    <div>
      {quizeState === "question" && <MainTest />}
      {quizeState === "finalPage" && <FinalPage />}
    </div>
  );
};

export default Question;
