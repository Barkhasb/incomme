import React from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import Input from "@/components/Input";

function StepTwo() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex flex-col items-center justify-center w-[400px] h-full gap-10">
        <Logo w={20} h={20} />

        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/11.png" width={40} height={40} alt="11" />
          <p className="font-bold">Select base currency</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center bg-[#F3F4F6] rounded-lg w-[384px]">
            <Input placeHolder="Email" />
          </div>
          <p className="text-[12px] text-center">
            How much cash do you have in your wallet?
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
