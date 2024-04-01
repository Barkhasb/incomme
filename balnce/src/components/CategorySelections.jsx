import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import {
  PiForkKnifeFill,
  PiWineFill,
  PiTShirtFill,
  PiTaxiFill,
} from "react-icons/pi";
import AddCategory from "./modal/AddCategory";

export const CategorySelections = ({ showSecondModalHandle }) => {
  const selections = [
    { text: "Home", icon: <FaHome className="text-blue-500" /> },
    { text: "Gift", icon: <FaGift className="text-red-500" /> },
    { text: "Food", icon: <PiForkKnifeFill className="text-[#FB8A22]" /> },
    { text: "Drink", icon: <PiWineFill className="text-[#A804AB]" /> },
    { text: "Taxi", icon: <PiTaxiFill className="text-[#EAB308]" /> },
    { text: "Shopping", icon: <PiTShirtFill className="text-[#6F6CF3]" /> },
  ];

  return (
    <div className="fixed bg-white bottom-[-118px] left-[20px] w-[368px] rounded-lg flex flex-col gap-4 z-11">
      <div className=" flex items-center gap-4 px-3 border-b-2 border-[#F9FAFB] p-2">
        <FaCirclePlus className="text-blue-500" />
        <p onClick={showSecondModalHandle} className="cursor-pointer">
          Add Category
        </p>
      </div>

      {selections.map((el, index) => {
        return (
          <div
            className="flex cursor-pointer items-center gap-4 px-3"
            key={index}
          >
            {el.icon}
            <p>{el.text}</p>
          </div>
        );
      })}
    </div>
  );
};
