import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
const questions = [
  {
    question: "During parties or social gatherings, I tend to...",
    id: 1,
    answers: [
      "Talk to as many people as I can. I've been called a social butterfly.",

      "Spend time with a few people that I know. It's about quality not quanitity.",

      "Keep to myself. You can find me by the punch bowl.",
    ],
  },
  // {
  //   question:
  //     "When given a choice between working as part of a team or working as a group, I would prefer to...",
  //   id: 2,
  //   answers: [
  //     {
  //       A: "Work with as many people as possible.",
  //     },
  //     {
  //       B: "Work as part of a small group.",
  //     },
  //     {
  //       C: "Work by myself.",
  //     },
  //   ],
  // },
  // {
  //   question:
  //     "When given a choice between working as part of a team or working as a group, I would prefer to...",
  //   id: 3,
  //   answers: [
  //     {
  //       A: "Work with as many people as possible.",
  //     },
  //     {
  //       B: "Work as part of a small group.",
  //     },
  //     {
  //       C: "Work by myself.",
  //     },
  //   ],
  // },
];

const Question = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <main className="w-[90%] md:w-[60%] my-10 mx-auto ">
        {questions.map((question) => {
          return (
            <aside
              key={question.id}
              className=" bg-gray-200 p-10 rounded-md shadow">
              <p>Question: 1/2</p>
              <h5 className="font-bold text-2xl md:text-3xl mb-5">
                {question.question}
              </h5>
              <ul>
                {question.answers.map((ans) => {
                  return (
                    <ul>
                      <li className="my-2 cursor-pointer bg-[#b772de] hover:bg-[#661b92] p-3 rounded-md shadow md:text-xl text-white">
                        <input type="radio" disabled className=" pr-6" />
                        <span className="pl-5">{ans}</span>
                      </li>
                    </ul>
                  );
                })}
              </ul>
              <div className="buttons my-5 flex justify-between space-x-4">
                <button className="questionBtn bg-gray-500">
                  <MdOutlineNavigateBefore
                    fontSize={30}
                    className="text-white"
                  />
                  <span>Previous</span>
                </button>
                <button className="questionBtn bg-[#661b92]">
                  <span>Next question</span>{" "}
                  <MdOutlineNavigateNext
                    fontSize={30}
                    className="text-white pt-1"
                  />
                </button>
              </div>
            </aside>
          );
        })}
      </main>
    </div>
  );
};

export default Question;
