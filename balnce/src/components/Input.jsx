import React from "react";

function Input(props) {
  const { placeHolder = "", type, handleChange, name } = props;
  return (
    <input
      className="bg-[#F3F4F6] m-3 w-full h-full outline-none"
      placeholder={placeHolder}
      type={type}
      name={name}
      onChange={handleChange}
    />
  );
}

export default Input;
