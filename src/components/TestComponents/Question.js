import { useSelector, useDispatch } from "react-redux";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { nextQuestion, previousQuestion } from "../app/features/testSlice";

const Question = () => {
  const dispatch = useDispatch();
  const { activeQuestion, questions } = useSelector((store) => store.question);
  // question.map((p) => console.log(p));
  // answers[0].option
  const handleNextQuestion = () => {
    setTimeout(() => {
      dispatch(nextQuestion());
    }, 2000);
  };
  const handlePreviousQuestion = () => {
    setTimeout(() => {
      dispatch(previousQuestion());
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center mb-[25rem] md:mb-[35rem] ">
      <main className="w-[95%] md:w-[60%] my-10 mx-auto ">
        <div className="relative">
          {questions.map((question, index) => {
            return (
              <div
                key={index}
                className={
                  index + 1 === activeQuestion
                    ? "absolute w-[100%] block "
                    : "absolute w-[100%] hidden "
                }>
                <aside
                  key={question.id}
                  className=" bg-gray-200 p-5 md:p-10 rounded-md shadow ">
                  <p>
                    Question: {activeQuestion}/{questions.length}
                  </p>
                  <h5 className="font-bold text-2xl md:text-3xl mb-5">
                    {question.question}
                  </h5>
                  <ul>
                    {question.answers.map((ans) => {
                      const { option, index } = ans;
                      return (
                        <ul key={index}>
                          <li className="  my-2 cursor-pointer bg-[#b772de] hover:bg-[#661b92] p-3 rounded-md shadow md:text-xl text-white">
                            <input
                              type="radio"
                              disabled
                              className=" pr-6 focus:bg-red-700"
                            />
                            <span className="pl-5">{option}</span>
                          </li>
                        </ul>
                      );
                    })}
                  </ul>
                  <div className="buttons md:my-5 flex justify-between space-x-4">
                    <button
                      onClick={handlePreviousQuestion}
                      className={
                        questions.length <= 1
                          ? "questionBtn bg-gray-500 hidden  "
                          : "questionBtn bg-gray-500 "
                      }>
                      <MdOutlineNavigateBefore
                        fontSize={30}
                        className="text-white "
                      />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      className="questionBtn bg-[#661b92]">
                      <span>Next question</span>{" "}
                      <MdOutlineNavigateNext
                        fontSize={30}
                        className="text-white pt-1"
                      />
                    </button>
                  </div>
                </aside>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Question;
