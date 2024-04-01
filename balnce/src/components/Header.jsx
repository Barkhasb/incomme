import React from "react";

function Header(props) {
  const { text } = props;
  return <div className={`font-bold`}>{text}</div>;
}

export default Header;
