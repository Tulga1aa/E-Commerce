import { Input } from "../../components/ui/input";
import Link from "next/link";

const login = () => {
  return (
    <div className="  ">
      <div className=" pt-28  flex justify-center text-center  ">
        <p className="font-bold text-2xl ">Нэвтрэх</p>
      </div>

      <div className="pt-6 flex justify-center text-center  ">
        <Input
          className="rounded-2xl w-[334px] h-[36px] "
          type="email"
          placeholder="Имэйл хаяг"
        />
      </div>

      <div className="pt-4 flex justify-center text-center  ">
        <Input
          className="rounded-2xl w-[334px] h-[36px] "
          type="email"
          placeholder="Нууц үг"
        />
      </div>

      <Link href={"/"}>
        <div className="flex pt-4  justify-center  ">
          <button className="w-[334px] h-[36px]  text-center rounded-2xl bg-blue-600 text-slate-100">
            Нэвтрэх
          </button>
        </div>
      </Link>

      <Link href={"/forget"}>
        <div className=" pt-3 pb-[48px] flex justify-center text-center border-b-indigo-500">
          <p className="link link-neutral">Нууц үг мартсан</p>
        </div>
      </Link>

      <Link href={"/signup"}>
        <div className=" pt-12 pb-[334px] flex justify-center  ">
          <button className="w-[334px] h-[36px] border-slate-500  text-center rounded-2xl">
            Бүртгүүлэх{" "}
          </button>
        </div>
      </Link>
    </div>
  );
};
export default login;
