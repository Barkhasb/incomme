import { useState } from "react";
import Header from "../Header";
import Button from "../Button";
import Input from "../Input";
import { FaRegEye } from "react-icons/fa";
import AddRecord from "../modal/AddRecord";
import AddCategory from "../modal/AddCategory";

function RecordsLeft() {
  const itemsType = ["All", "Income", "Expense"];
  const itemsCategory = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication,PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  const [show, setShow] = useState(false);
  const [categoryDrop, setCategoryDrop] = useState(false);

  const showSecondModalHandle = () => {
    if (show) setShow(false);
    setCategoryDrop(!categoryDrop);
  };
  const showFirstModalHandle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex flex-col bg-white rounded-lg gap-5 mx-[30px] py-[10px] px-[20px] w-1/4">
        <Header text="Records" />
        <div className="flex items-center justify-center text-white bg-[#0166FF] rounded-xl w-full cursor-pointer h-8">
          <Button handleSubmit={showFirstModalHandle} text="+ Add" />
        </div>
        <div className="flex items-center bg-[#F3F4F6] rounded-xl w-full h-8">
          <Input placeHolder="Search" />
        </div>
        <Header text="Types" />
        {itemsType.map((el, index) => {
          return (
            <div className="flex gap-2 items-center" key={index}>
              <input type="radio" />
              {el}
            </div>
          );
        })}
        <Header text="Category" />
        {itemsCategory.map((el, index) => {
          return (
            <div className="flex gap-2 items-center cursor-pointer" key={index}>
              <FaRegEye /> {el}
            </div>
          );
        })}
        <div
          onClick={showSecondModalHandle}
          className="flex items-center gap-3 cursor-pointer"
        >
          <button className="text-[#0166FF]">+</button>
          Add Category
        </div>
        <Header text="Amount Range" />
        <div className="flex justify-between w-full gap-2">
          <input
            type="number"
            placeholder="1"
            className="w-24 border h-12 rounded-lg px-2"
          />
          <input
            type="number"
            placeholder="1000"
            className="w-24 border rounded-lg px-2"
          />
        </div>
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-xs"
        />
      </div>
      {show && (
        <AddRecord
          showFirstModalHandle={showFirstModalHandle}
          showSecondModalHandle={showSecondModalHandle}
        />
      )}
      {categoryDrop && (
        <AddCategory showSecondModalHandle={showSecondModalHandle} />
      )}
    </>
  );
}

export default RecordsLeft;
