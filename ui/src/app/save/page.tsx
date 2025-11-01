import { BiSolidHeart } from "react-icons/bi";

const SaveProduct = () => {
  return (
    <div className="flex justify-center pt-28 pb-[480px] ">
      <div className=" justify-center pt-4 w-[622px] h-[472px]">
        <div className="flex pb-3 p-2">
          <p className="text-xl ">Хадгалсан бараа</p>
          <p className="text-zinc-500"> (3)</p>
        </div>

        <div className=" w-[622px] h-[428px]">
          <div className=" mb-4 border-2 rounded-2xl flex w-full h-[128px]">
            <div className="flex justify-between">
              <div className=" p-3 rounded-2xl">
                <img className="rounded-2xl" src="photo/image (1).svg" alt="" />
              </div>
              <div className="flex justify-between  pt-3">
                <div className=" w-[320px] h-[100px]">
                  <p>Chunky Glyph Tee</p>
                  <p>120’000₮</p>
                  <button className=" w-[57px] h-[20px] text-center rounded-xl bg-blue-600 text-xs text-slate-100">
                    Сагслах
                  </button>
                </div>
                <div className="ustify-items-end ">
                  <BiSolidHeart />
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-4 border-2 rounded-2xl flex w-full h-[128px]">
            <div className="flex justify-between">
              <div className=" p-3 rounded-2xl">
                <img className="rounded-2xl" src="photo/image (2).svg" alt="" />
              </div>
              <div className="flex justify-between  pt-3">
                <div className=" w-[320px] h-[100px]">
                  <p>Doodle Hoodie</p>
                  <p>120’000₮</p>
                  <button className=" w-[57px] h-[20px] text-center rounded-2xl bg-blue-600 text-xs text-slate-100">
                    Сагслах
                  </button>
                </div>
                <div className="ustify-items-end   ">
                  <BiSolidHeart />
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-4 border-2 rounded-2xl w-[622px] h-[128px]">
            <div className=" flex w-[622px] h-[128px]">
              <div className="flex justify-between">
                <div className=" p-3 rounded-2xl">
                  <img
                    className="rounded-2xl"
                    src="photo/image (3).svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between  pt-3">
                  <div className=" w-[320px] h-[100px]">
                    <p>Local Styles Crewneck</p>
                    <p>120’000₮</p>
                    <button className=" w-[57px] h-[20px] text-center rounded-2xl bg-blue-600 text-xs text-slate-100">
                      Сагслах
                    </button>
                  </div>
                  <div className="ustify-items-end ">
                    <BiSolidHeart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaveProduct;
