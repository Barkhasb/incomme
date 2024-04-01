import React from "react";

function Button(props) {
  const { text, color, handleSubmit } = props;
  return (
    <button onClick={handleSubmit} className={`m-3 ${color} w-full h-full`}>
      {text}
    </button>
  );
}

export default Button;
