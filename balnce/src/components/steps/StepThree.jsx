import React from "react";
import Logo from "@/components/Logo";

import Image from "next/image";
import Button from "@/components/Button";

function StepThree() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex flex-col items-center justify-center w-[400px] h-full gap-10">
        <Logo w={20} h={20} />

        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/9.png" width={40} height={40} alt="11" />
          <p className="font-bold">Good Job</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px] text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
