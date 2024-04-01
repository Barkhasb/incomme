import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import AddRecordLeft from "./AddRecordLeft";
import AddRecordRight from "./AddRecordRight";
import Header from "../Header";

function AddRecord({ showFirstModalHandle, showSecondModalHandle }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-10"
        onClick={showFirstModalHandle}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[792px] h-[512px] gap-3 p-5 bg-white rounded-lg z-10">
        <div className="flex w-full justify-between">
          <Header text="Add Records" />
          <button className="flex items-center" onClick={showFirstModalHandle}>
            <BiExit />
          </button>
        </div>
        <div className="flex items-center justify-between gap-4 w-full">
          <AddRecordLeft showSecondModalHandle={showSecondModalHandle} />
          <AddRecordRight />
        </div>
      </div>
    </>
  );
}

export default AddRecord;
