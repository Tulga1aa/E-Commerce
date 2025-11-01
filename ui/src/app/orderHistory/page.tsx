import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center pt-5 pb-10">
      <div className="w-[884px] h-[725px]  pt-9 flex justify-center ">
        <div className="w-[244px] h-[76px]">
          <Link href={"/user"}>
            <button>Хэрэглэгчийн хэсэг</button>
          </Link>
          <button>Захиалгын түүх</button>
        </div>
        <div className="  p-2 w-[620px] h-[725px] ">
          <div className="font-bold">Захиалгын түүх</div>
          <p className="border-b-2 pt-3 "></p>
          <div className=" pt-4 w-full h-[648px] ">
            <div className=" pt-2 w-full h-6 flex justify-between ">
              <div className=" flex ">
                <div className=" font-bold">2024-08-23 15:34</div>
                <div className="pt-1 pl-3">
                  <div className=" w-32 h-4 text-center rounded-xl bg-blue-600 text-xs text-slate-100">
                    хүргэлтэнд гарсан
                  </div>
                </div>
              </div>
              <div>
                <BiCaretUp />
              </div>
            </div>

            <div className="flex pt-4 justify-between ">
              <div className="flex">
                <div className="  w-[46px] h-[59px]">
                  <img
                    className="rounded-xl"
                    src="photo/image (1).svg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 ">
                  <p>Chunky Glyph Tee</p>

                  <p>1 x 120’000₮</p>
                </div>
              </div>
              <div className=" ">
                <p className=" font-bold">120’000₮</p>
              </div>
            </div>

            <div className="flex  justify-between ">
              <div className="flex">
                <div className="  w-[46px] h-[59px]">
                  <img
                    className="rounded-xl"
                    src="photo/image (1).svg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 ">
                  <p>Chunky Glyph Tee</p>

                  <p>1 x 120’000₮</p>
                </div>
              </div>
              <div className=" ">
                <p className=" font-bold">120’000₮</p>
              </div>
            </div>

            <div className="flex  justify-between ">
              <div className="flex">
                <div className="  w-[46px] h-[59px]">
                  <img
                    className="rounded-xl"
                    src="photo/image (1).svg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 ">
                  <p>Chunky Glyph Tee</p>

                  <p>1 x 120’000₮</p>
                </div>
              </div>
              <div className=" ">
                <p className=" font-bold">120’000₮</p>
              </div>
            </div>

            <div className="flex  justify-between ">
              <div className="flex">
                <div className="  w-[46px] h-[59px]">
                  <img
                    className="rounded-xl"
                    src="photo/image (1).svg"
                    alt=""
                  />
                </div>
                <div className=" pl-3 ">
                  <p>Chunky Glyph Tee</p>

                  <p>1 x 120’000₮</p>
                </div>
              </div>
              <div className=" ">
                <p className=" font-bold">120’000₮</p>
              </div>
            </div>

            <p className=" pt-8 border-b-2 border-dashed  "></p>

            <div className="w-full h-6 pt-4 flex justify-between ">
              <div>Үнийн дүн:</div>
              <div className="font-bold">480’000₮</div>
            </div>

            <div className="w-full h-32 pt-20">
              <div className="w-full h-6 flex justify-between  ">
                <div className=" flex">
                  <div className="font-bold">2024-08-23 15:34</div>
                  <div className="pt-1 pl-2">
                    <div className="w-20 h-4 text-center rounded-xl bg-blue-300 border-blue-800 text-xs text-blue-700">
                      дууссан
                    </div>
                  </div>
                </div>
                <div>
                  <BiCaretDown />
                </div>
              </div>

              <div className="w-full h-6 flex justify-between ">
                <div>Үнийн дүн:</div>
                <div className="font-bold">120’000₮</div>
              </div>
            </div>

            <div className="w-full h-32 pt-8">
              <div className="w-full h-6 flex justify-between  ">
                <div className="flex pt-5 ">
                  <div className="font-bold">2024-08-23 15:34</div>
                  <div className="pt-1 pl-3">
                    <div className="w-20 h-4 text-center rounded-xl bg-blue-300 border-blue-800 text-xs text-blue-700">
                      дууссан
                    </div>
                  </div>
                </div>
                <div>
                  <BiCaretDown />
                </div>
              </div>

              <div className="w-full h-6 pt-6 flex justify-between">
                <div>Үнийн дүн:</div>
                <div className="font-bold">120’000₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
