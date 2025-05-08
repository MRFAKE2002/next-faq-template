"use client";

//! Libraries
import React, { useEffect, useState } from "react";

function DarkModeButton() {
  //! State

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //! Custom Function

  const darkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  //! useEffect

  // ✅ در مرحله mount از localStorage مقدار رو بگیر
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // ذخیره تغییرات و اضافه/حذف کردن کلاس dark
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <button
        onClick={() => {
          darkModeToggle();
        }}
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer"
      >
        <i className={`bx bx-${isDarkMode ? "sun" : "moon"} text-xl`}></i>
      </button>
    </>
  );
}

export default DarkModeButton;
