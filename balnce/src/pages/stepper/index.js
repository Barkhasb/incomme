import Steps from "@/components/Steps";
import StepOne from "@/components/steps/StepOne";
import StepTwo from "@/components/steps/StepTwo";
import StepThree from "@/components/steps/StepThree";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

import { useState } from "react";

const steps = [StepOne, StepTwo, StepThree];

const Stepper = () => {
  const [step, setStep] = useState(0);
  const { push } = useRouter();

  const CurrentStep = steps[step];

  const handleNext = () => {
    if (step === steps.length - 1) return push("/SignIn");
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center ">
      <Steps step={step} />
      {step < steps.length && <CurrentStep />}
      <div className="flex items-center justify-center text-white bg-[#0166FF] rounded-full w-[400px] cursor-pointer m-4 ">
        <Button
          text={step < steps.length ? "Confirm" : "Success"}
          handleSubmit={handleNext}
        />
      </div>
    </div>
  );
};

export default Stepper;
