"use client";

import React, { useState } from "react";
import CustomTimePicker from "./TimePicker";

const TodoAdd = ({ setAdd }: any) => {
  const [selectedDay, setSelectedDay] = useState("TUE");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [selectedColor, setSelectedColor] = useState("bg-[#ff9b99]");

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const colors = [
    "bg-[#ff9b99]",
    "bg-[#fdc38e]",
    "bg-[#f7e583]",
    "bg-[#a6e091]",
    "bg-[#78c1f6]",
    "bg-[#ba9edd]",
    "bg-[#d7d7d7]",
  ];

  return (
    <div className="w-[348px] mx-auto  shadow-lg rounded-lg bg-[#FFFFFF] mt-[10px]">
      <div className="p-4">
        <div className="flex mb-[20px]">
          <input className="border-b border-[#a5a5a5] w-[269px] mr-[8px] focus:outline-none" />
          <svg
            className="cursor-pointer"
            onClick={() => setAdd(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g id="todo_btn_minus">
              <path id="Union" d="M8 14H22V15H8V14Z" fill="#3F3F3F" />
            </g>
          </svg>
        </div>
        <div className="flex mb-4 gap-[10px]">
          {days.map((day) => (
            <button
              key={day}
              className={`text-[10px] max-w-[35px] px-[7px] py-[5px] rounded ${
                selectedDay === day
                  ? "bg-gray-800 text-white"
                  : " text-gray-800"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <CustomTimePicker />

        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <button
              key={color}
              className={`w-10 h-5 rounded-[5px] border-2 
				${colors[index]}
				${selectedColor === color ? "border-gray-800" : "border-transparent"}`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
