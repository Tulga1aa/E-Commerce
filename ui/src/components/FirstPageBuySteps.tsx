import Steps from "@/components/Steps";
import { Button } from "@/components/ui/button";
import { PiTrashLight } from "react-icons/pi";

export type StepComponentProps = {
  step: number;
  next: () => void;
};

const FirstStep = (props: StepComponentProps) => {
  const { step, next } = props;

  const isSelected = step === 1;

  return (
    <div className="flex justify-center bg-zinc-200 h-[945.61px]">
      <div className="w-[638px] h-[664px] flex flex-col justify-center items-center ">
        <div className="py-[50px]">
          <Steps step={step} />
        </div>

        <div className="bg-white p-8 border rounded-2xl gap-10	">
          <div
            className="flex items-center"
            style={{
              backgroundColor: isSelected ? "blue" : "transparent",
            }}
          >
            <p className="text-xl font-bold	">1. Сагс</p>
            <p>(4)</p>
          </div>
          <div className="w-fit flex flex-col justify-center items-center gap-5	">
            <div className="w-[532px] h-[132px] rounded-2xl flex justify-between border-2  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/pinecone1.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <div className="flex items-center gap-3">
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-3">
                      -
                    </button>
                    <p>1</p>
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-2.5">
                      +
                    </button>
                  </div>

                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
              <PiTrashLight className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="w-fit flex flex-col justify-center items-center gap-4	">
            <div className="w-[532px] h-[132px] rounded-2xl flex justify-between border-2  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/pinecone1.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <div className="flex items-center gap-3">
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-3">
                      -
                    </button>
                    <p>1</p>
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-2.5">
                      +
                    </button>
                  </div>

                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
              <PiTrashLight className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="w-fit flex flex-col justify-center items-center gap-4	">
            <div className="w-[532px] h-[132px] rounded-2xl flex justify-between border-2  items-center	p-4">
              <div className="flex">
                <div>
                  <img
                    style={{
                      backgroundImage: 'url("./Pics/pinecone1.png")',
                      width: "100px",
                      height: "100px",
                      margin: "0px 24px 0px 0px",
                    }}
                    className="w-[100px] h-[100px] rounded-xl m-2 bg-cover "
                  />
                </div>
                <div>
                  <p>Chunky Glyph Tee</p>
                  <div className="flex items-center gap-3">
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-3">
                      -
                    </button>
                    <p>1</p>
                    <button className=" border border-3 border-black rounded-2xl text-base py-1 px-2.5">
                      +
                    </button>
                  </div>

                  <p className="font-bold">120’000₮</p>
                </div>
              </div>
              <PiTrashLight className="w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="flex justify-between	">
            <p>Нийт төлөх дүн:</p>
            <p>360'000₮</p>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={next}
              className="rounded-3xl bg-blue-700 font-thin h-[28px] flex text-center px-9	py-2"
            >
              Худалдан авах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;