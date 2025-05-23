"use client";

//! Libraries
import { useRef } from "react";

//! Type
type Props = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: (id: number) => void;
};

function FAQItem({ id, question, answer, isOpen, onClick }: Props) {
  //! useRef
  const answerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent
    dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`faq-item-${id}`}
    >
      <button
        className={`w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg cursor-pointer ${
          isOpen
            ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 text-purple-700 dark:text-white font-medium"
            : "text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:bg-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"
        } `}
        onClick={() => onClick(id)}
      >
        <span className="text-lg font-medium pr-6">{question}</span>
        <div
          className={`flex flex-shrink-0 items-center justify-center w-8 min-w-8 aspect-square rounded-full transition-all duration-200 ${
            isOpen
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 shadow-md"
              : "bg-gray-200 dark:bg-gray-700"
          } `}
        >
          <i
            className={`bx bx-${
              isOpen
                ? "minus text-white"
                : "plus text-gray-500 dark:text-gray-400"
            }`}
          ></i>
        </div>
      </button>

      {/* <button
        className="group w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg transition-all duration-200 cursor-pointer"
        onClick={() => onClick(id)}
      >
        <span className="text-lg dark:text-white text-gray-900 font-medium pr-6 relative inline-block">
          <span className="block transition-opacity duration-300 group-hover:opacity-0">
            {question}
          </span>
          <span className="absolute top-0 left-0 block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {question}
          </span>
        </span>

        <div className="flex flex-shrink-0 items-center justify-center w-8 min-w-8 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-200">
          <i className="bx bx-plus text-gray-500 dark:text-gray-400"></i>
        </div>
      </button> */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        id={`answer-${id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
