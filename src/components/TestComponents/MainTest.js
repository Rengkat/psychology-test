import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import {
  nextQuestion,
  previousQuestion,
  getQuizeState,
  addSelectedAnswers,
  enableNextButton,
} from "../app/features/testSlice";

const MainTest = () => {
  const dispatch = useDispatch();
  //   state from store
  const { activeQuestion, questions, enableClick } = useSelector(
    (store) => store.question
  );
  const handleAnswer = (ans) => {
    dispatch(addSelectedAnswers(ans));
    dispatch(enableNextButton());
  };

  // next question method/dispatch after a second
  const handleNextQuestion = () => {
    setTimeout(() => {
      dispatch(nextQuestion());
    }, 1000);
    dispatch(enableNextButton());
  };
  // previous question method/dispatch after a second
  const handlePreviousQuestion = () => {
    setTimeout(() => {
      dispatch(previousQuestion());
    }, 1000);
  };
  // restart method/dispatch after a second
  const handleSubmit = () => {
    dispatch(getQuizeState("finalPage"));
  };
  return (
    <div className="flex items-center justify-center mb-[25rem] md:mb-[35rem] ">
      <main className="w-[95%] md:w-[60%] my-10 mx-auto ">
        <div className="relative">
          {/* maping questions */}
          {questions.map((question, index) => {
            return (
              <div
                key={nanoid()}
                className={
                  index + 1 === activeQuestion
                    ? "absolute w-[100%] block "
                    : "absolute w-[100%] hidden "
                }>
                <aside
                  key={question.id}
                  className=" bg-gray-200 pt-5 pb-20 px-5 md:p-10 rounded-md shadow relative">
                  <p>
                    Question: {activeQuestion}/{questions.length}
                  </p>

                  <h5 className="font-bold text-2xl md:text-3xl mb-5">
                    {question.question}
                  </h5>
                  <ul>
                    {/* Map answers */}
                    {question.answers.map((ans) => {
                      // console.log(ans);
                      const { option } = ans;
                      return (
                        <ul key={nanoid()}>
                          <li
                            onClick={() => handleAnswer(ans.score)}
                            className=" my-2 cursor-pointer bg-[#b772de] hover:bg-[#661b92] p-3 rounded-md shadow md:text-xl text-white">
                            <input type="radio" name={option} id="" />
                            {/* <input
                              type="radio"
                              // name="options"
                              className=" pr-6"
                            /> */}
                            <label className="pl-5">{option}</label>
                          </li>
                        </ul>
                      );
                    })}
                  </ul>
                  <div
                    //   next and previous button
                    className={
                      activeQuestion !== 1
                        ? " md:my-5 flex justify-between space-x-4"
                        : " md:my-5 flex justify-end "
                    }>
                    {/* previous button disappear if qusetion less tha 1 */}
                    {activeQuestion !== 1 && (
                      <button
                        onClick={handlePreviousQuestion}
                        className="questionBtn bg-gray-500  ">
                        <MdOutlineNavigateBefore
                          fontSize={30}
                          className="text-white "
                        />
                        <span>Previous</span>
                      </button>
                    )}
                    {/* final page at the end of question */}
                    {activeQuestion === questions.length ? (
                      <button
                        onClick={handleSubmit}
                        className={`questionBtn ${
                          enableClick ? "bg-[#c9acd7]" : "bg-[#661b92]"
                        }`}>
                        Submit
                      </button>
                    ) : (
                      <button
                        disabled={enableClick}
                        onClick={handleNextQuestion}
                        className={
                          activeQuestion !== 1
                            ? `questionBtn ${
                                enableClick ? "bg-[#c9acd7]" : "bg-[#661b92]"
                              }`
                            : `questionBtn ${
                                enableClick ? "bg-[#c9acd7]" : "bg-[#661b92]"
                              } w-[10rem] md:w-[20rem] `
                        }>
                        <span>Next question</span>
                        <MdOutlineNavigateNext
                          fontSize={30}
                          className="text-white pt-1"
                        />
                      </button>
                    )}
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

export default MainTest;
