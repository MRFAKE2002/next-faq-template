"use client";

//! Libraries
import { useEffect, useState } from "react";

//! Components
import DarkModeButton from "@/components/button/DarkModeButton";
import FAQItem from "@/components/FAQItem";

//! FAQ Data
import faqData from "@/data/faqData";

function List() {
  //! useState
  const [openId, setOpenId] = useState<number>(0);
  const [expandAll, setExpandAll] = useState<boolean>(false);

  //! Custom Function

  const toggleItem = (id: number) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prevId) => {
      if (prevId === id) {
        return 0;
      }
      return id;
    });
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(0);
  };

  //! useEffect

  useEffect(() => {
    if (openId && typeof window !== "undefined") {
      setTimeout(() => {
        const element = document.getElementById(`faq-item-${openId}`);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [openId]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>
        {/* EXpand Button */}
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer"
            onClick={toggleExpandAll}
          >
            <i
              className={`bx bx-${
                expandAll ? "collapse-alt" : "expand-alt"
              } text-lg`}
            ></i>
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>

          {/* Dark Mode Button */}

          <DarkModeButton />
        </div>
      </div>

      {/* FAQ List */}

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-200">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            {...item}
            isOpen={expandAll || openId === item.id}
            onClick={toggleItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
