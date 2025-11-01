"use client";

import React from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
export function Home() {
  return (
    <div className=" flex  pt-24 pb-[349px] bg-slate-100 justify-center text-center ">
      <div className=" backdrop-saturate-50 w-[1040px] h-[340px] border-2">
        <div className="w-full h-[263px] ">
          <div className=" pt-8 flex justify-center ">
            <img src="/icons/email.png" />
          </div>
          <div className="pt-6 pb-6 font-bold flex justify-center text-center ">
            Баталгаажуулах
          </div>
          <div>
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </div>
          <div className="flex justify-center pt-4">
            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Link href={"/forgetPassword"}>
            <div className="pt-14">
              <button>Дахин илгээх (30)</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
