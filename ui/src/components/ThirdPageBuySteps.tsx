"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StepComponentProps } from "./FirstPageBuySteps";
import Steps from "./Steps";
import { CheckCircle } from "lucide-react";

const ThirdStep = ({ step }: StepComponentProps) => {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState<string | null>(null);

  const banks = [
    {
      id: "khanbank",
      name: "Хаан банк",
      logo: "/banks/khanbank.png", // 👈 logo замаа зөв болгоорой
    },
    {
      id: "golomtbank",
      name: "Голомт банк",
      logo: "/banks/golomtbank.png",
    },
  ];

  const handlePayment = () => {
    if (selectedBank) {
      // энд төлбөрийн логик байж болно
      // setTimeout гэх мэтээр delay хийж болно
      router.push("/"); // 👈 Home рүү үсрэх
    }
  };

  return (
    <div className="flex justify-center bg-zinc-200 min-h-screen py-10">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <Steps step={step} />
        <div className="bg-white mt-8 p-8 rounded-2xl shadow-md w-full max-w-[680px]">
          <p className="font-bold text-lg mb-6">3. Төлбөр төлөлт</p>

          {/* Банк сонгох хэсэг */}
          <div className="flex justify-center gap-8">
            {banks.map((bank) => (
              <div
                key={bank.id}
                onClick={() => setSelectedBank(bank.id)}
                className={`relative cursor-pointer border-2 rounded-2xl p-4 w-[250px] h-[180px] flex flex-col items-center justify-center transition-all duration-200 ${
                  selectedBank === bank.id
                    ? "border-blue-600 ring-2 ring-blue-400"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-[120px] h-auto object-contain mb-3"
                />
                <p className="font-semibold">{bank.name}</p>

                {/* Сонгогдсон үед check icon */}
                {selectedBank === bank.id && (
                  <CheckCircle
                    className="absolute top-3 right-3 text-blue-600"
                    size={28}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Төлбөрийн товч */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handlePayment}
              disabled={!selectedBank}
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition ${
                selectedBank
                  ? "bg-blue-700 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Төлбөр төлөх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
