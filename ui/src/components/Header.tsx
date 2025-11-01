"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className=" mx-auto flex max-w-[1240px] h-[80px] items-center justify-between ">
      <div className="flex w-200 h-[28px] items-center ">
        <Link href={"/"}>
          <img className="w-[129px] h-[28px]" src="/icons/ecomlog.svg" />
        </Link>
        <Link href="/category">
          <button className="text-white w-[67px] h-[28px] ml-[40px] cursor-pointer">
            Ангилал
          </button>
        </Link>
      </div>
      <div className="flex ">
        <img className="" src="/icons/Search.svg " />
        <input
          className="bg-primary w-[320px] h-[30px] text-[12px] text-white rounded-full text-center"
          type="search"
          placeholder=" Бүтээгдэхүүн хайх..."
        />
      </div>
      <div className="flex">
        <Link href={"/save"}>
          <img
            className="px-3 pt-[7px] cursor-pointer"
            src="/icons/Heart.svg"
          />
        </Link>
        <Link href={"/basketProduct"}>
          <img className="px-3 pt-[7px] cursor-pointer" src="/icons/Shop.svg" />
        </Link>

        <Link href={"signup"}>
          <Button
            className="rounded-full mx-3 border-[#2563EB] text-white hover:bg-[#2563EB]  "
            variant="outline"
          >
            Бүртгүүлэх
          </Button>
        </Link>

        <Link href={"login"}>
          <Button
            className="rounded-full mx-3 bg-[#2563EB] text-white hover:border-[#2563EB] "
            variant="default"
          >
            Нэвтрэх
          </Button>
        </Link>
      </div>
    </div>
  );
};
