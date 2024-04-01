import React from "react";
import Image from "next/image";

function Logo(props) {
  const { w, h, text } = props;
  return (
    <div className="flex items-center gap-2 ">
      <Image src="/Vector.png" width={w} height={h} alt="vector" />
      <div className="font-bold">Geld</div>
    </div>
  );
}

export default Logo;
