"use client";

import FirstStep from "@/components/FirstPageBuySteps";
import SecondStep from "@/components/SecondPageBuySteps";
import ThirdStep from "@/components/ThirdPageBuySteps";
import { useState } from "react";

const BasketProducts = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  if (step === 2) {
    return (
      <>
        <SecondStep step={step} next={handleNextStep} />
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <ThirdStep step={step} next={handleNextStep} />
      </>
    );
  }

  return <FirstStep step={step} next={handleNextStep} />;
};

export default BasketProducts;