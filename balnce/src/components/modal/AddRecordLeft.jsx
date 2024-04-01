import Button from "../Button";
import Input from "../Input";
import Header from "../Header";
import { useState } from "react";
import { CategorySelections } from "../CategorySelections";
import { BiArrowToBottom } from "react-icons/bi";

function AddRecordLeft({ showSecondModalHandle }) {
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col w-1/2 gap-3 ">
      <div className="flex items-center bg-[#F3F4F6] rounded-xl w-full h-[40px]">
        <div
          onClick={() => {
            setColor(true);
          }}
          className={`w-1/2  h-[40px] flex items-center rounded-[25px] ${
            color ? "text-white bg-[#0166FF]" : "text-black bg-[#F3F4F6]"
          }`}
        >
          <Button
            handleSubmit={() => {
              setColor(true);
            }}
            text="Extense"
          />
        </div>
        <div
          onClick={() => {
            setColor(false);
          }}
          className={`w-1/2 h-[40px] flex items-center rounded-[25px] ${
            color ? "text-black bg-[#F3F4F6]" : "text-white bg-[#16A34A]"
          }`}
        >
          <Button
            handleSubmit={() => {
              setColor(true);
            }}
            text="Income"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#F3F4F6] rounded-xl overflow-hidden p-4">
        <div className="font-bold mt-3 ml-3">
          <Header text="Amount" />
        </div>
        <Input type="number" placeHolder="₮ 000.00" />
      </div>
      <div className="flex flex-col gap-3">
        <Header text="Category" />
        <div
          onClick={handleClick}
          className="flex cursor-pointer justify-between border text-[#94A3B8] p-2 rounded-lg items-center"
        >
          <p> Find or choose category</p>
          <BiArrowToBottom />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <Header text="Date" />
          <input
            type="Date"
            className="bg-[#F3F4F6] w-[135px] h-[50px] rounded-lg p-2"
          />
        </div>
        <div>
          <Header text="Time" />
          <input
            type="time"
            className="bg-[#F3F4F6] w-[100px] h-[50px] rounded-lg p-2"
          />
        </div>
      </div>
      <div
        className={`w-full h-[40px] flex items-center rounded-[25px] ${
          color ? "text-white bg-[#0166FF]" : "text-white bg-[#16A34A]"
        }`}
      >
        <Button text="Add Record" />
      </div>
      {show && (
        <CategorySelections showSecondModalHandle={showSecondModalHandle} />
      )}
    </div>
  );
}

export default AddRecordLeft;
