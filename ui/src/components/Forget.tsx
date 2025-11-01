"use client";

import { Input } from "./ui/input";
import Link from "next/link";

const OTP = () => {
  return (
    <div className="  ">
      <div className=" pt-28  flex justify-center text-center  ">
        <p className="font-bold ">Нууц үг сэргээх</p>
      </div>
      <div className="pt-8 flex justify-center text-center  ">
        <Input
          className="rounded-2xl w-[334px] h-[36px] "
          type="email"
          placeholder="Имэйл хаяг оруулах"
        />
      </div>
      <Link href={"confirm"}>
        <div className="flex pt-4 pb-96 justify-center text-center ">
          <div className="w-[334px] h-[36px]  text-center rounded-2xl bg-blue-600 text-slate-100">
            Илгээх
          </div>
        </div>
      </Link>
    </div>
  );
};
export default OTP;
