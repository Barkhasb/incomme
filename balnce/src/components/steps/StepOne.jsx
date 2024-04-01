import React from "react";
import Logo from "@/components/Logo";
import Steps from "@/components/Steps";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/Button";

function StepOne() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <div className="flex flex-col items-center justify-center w-[400px] h-full gap-10">
        <Logo w={20} h={20} />

        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/10.png" width={40} height={40} alt="10" />
          <p className="font-bold">Select base currency</p>
        </div>
        <div className="flex flex-col gap-2">
          <Select>
            <SelectTrigger className="w-[400px] h-[80px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">MNT - Mongolian tugrik</SelectItem>
              <SelectItem value="dark">USD - United states</SelectItem>
              <SelectItem value="system">JPY - Japanese </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-[12px text-center">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
