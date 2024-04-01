import RecordsLeft from "@/components/records/RecordsLeft";
import RecordsRight from "@/components/records/RecordsRight";
import RecordHeader from "@/components/RecordHeader";
import React from "react";

function Records() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col ">
        <RecordHeader />
      </div>
      <div className="flex w-full bg-[#F3F4F6] pt-8 ">
        <RecordsLeft />
        <RecordsRight />
      </div>
    </div>
  );
}

export default Records;
