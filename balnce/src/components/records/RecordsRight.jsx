import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TodayRec } from "./Today";
import { YesterdayRecs } from "./Yesterday";

function RecordsRight() {
  const data = ["Last 3 months", "Last 30 days", "Last week", "Yesterday"];
  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide(slide + 1);
  };
  const previous = () => {
    setSlide(slide - 1);
  };
  return (
    <div className="flex flex-col w-full px-[50px] py-[10px] gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <button disabled={slide === 0} onClick={previous}>
            <FaArrowLeft />
          </button>
          <p className="w-32 flex justify-center">{data[slide]}</p>
          <button disabled={slide === data.length - 1} onClick={next}>
            <FaArrowRight />
          </button>
        </div>

        <select className="select select-bordered ">
          <option value="Who shot first" disabled selected>
            Who shot first?
          </option>
          <option value="Han Solo">Han Solo</option>
          <option value="Greedo">Greedo</option>
        </select>
      </div>
      <div className="flex justify-between border rounded-lg bg-[#FFF] py-2 px-4">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
          />
          <div className="text-black text-base font-normal">Select all</div>
        </div>
        <p className="text-[#94A3B8]"> - 35,000₮</p>
      </div>
      <div className="flex flex-col gap-4">
        <TodayRec />
        <YesterdayRecs />
      </div>
    </div>
  );
}

export default RecordsRight;
