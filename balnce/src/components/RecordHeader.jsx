import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function RecordHeader() {
  return (
    <div className="flex justify-between items-center px-[50px] py-[10px]">
      <div className="flex gap-5 items-center">
        <Link href="Dashboard">
          <Image src="/vector.png" width={30} height={20} alt="vector" />
        </Link>
        <Link href="/Dashboard">Dashboard</Link>
        <Link className="font-bold" href="/Records">
          Records
        </Link>
      </div>
      <div className="flex gap-3 items-center ">
        <a className="flex items-center justify-center text-white bg-[#0166FF] rounded-full w-[100px] h-[30px] cursor-pointer ">
          <Button text="+ Record" />
        </a>
        <Image
          className="rounded-full"
          src="/Placeholder.png"
          width={30}
          height={30}
          alt="pro"
        />
      </div>
    </div>
  );
}

export default RecordHeader;
