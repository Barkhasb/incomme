import React from "react";
import { GoHomeFill } from "react-icons/go";

function LastRecord(props) {
  const {
    icon = <GoHomeFill color="white" size={24} />,
    title = "Lending & Renting",
    time = "14:00",
    ammount = "- 1,000₮",
  } = props;
  return (
    <div className="flex gap-5 justify-between items-center border-b-2 rounded-lg bg-[#FFF] py-2 px-4 ">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="checkbox w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex"
        />
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#0166FF] flex items-center pl-2">
            {icon}
          </div>
          <div>
            <p className="text-lg">{title}</p>
            <p className="text-sm text-[#6B7280]">{time}</p>
          </div>
        </div>
      </div>
      <p className="text-[#23E01F]">{ammount}</p>
    </div>
  );
}

export default LastRecord;
