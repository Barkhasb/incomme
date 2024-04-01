import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

function AddCategory({ showSecondModalHandle }) {
  const handleCreateNewRecord = {
    // ene ajillaj databaseruu add hiine
  };

  return (
    <div className="fixed inset-0 bg-black/30 ">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[494px] h-[236px] bg-white rounded-2xl">
        <div className="flex justify-between p-4 border-b-2">
          <h1>Add Category</h1>
          <div
            className="w-10 h-10 cursor-pointer"
            onClick={showSecondModalHandle}
          >
            <IoMdClose />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="flex rounded-2xl items-center border-2 border-slate-200 p-2">
            <IoMdHome size={30} />
            <FaCaretDown />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-2 border-slate-200 rounded-2xl p-2"
          />
        </div>
        <div className="px-4">
          <button
            onClick={handleCreateNewRecord}
            className="w-full h-[40px] flex bg- items-center justify-center text-white rounded-[25px] bg-[#16A34A] px-4 "
          >
            Add Cate
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
