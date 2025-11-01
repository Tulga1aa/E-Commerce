import { Input } from "postcss";
import DeliveryInfo from "./DeliveryInfo";
import Steps from "./Steps";
import { StepComponentProps } from "./FirstPageBuySteps";

const SecondStep = (props: StepComponentProps) => {
  const { step, next } = props;
  return (
    <div>
      <div className="flex justify-center bg-zinc-200">
        <div className="flex flex-col justify-center items-center ">
          <Steps step={step} />
          <div className="flex gap-5">
            <DeliveryInfo />
            <div className="bg-white w-[687px] h-[678px] p-[32px] gap-y-6 rounded-2xl">
              <p className="font-bold">2. Хүргэлтийн мэдээлэл оруулах</p>
              <div>
                <p className="font-bold">Овог:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Нэр:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Утасны дугаар:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Хаяг:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px] h-[94px]"></input>
                <p className="font-bold">Нэмэлт мэдээлэл:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px] h-[66px]"></input>
                <p>Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={next}>payment</button>
    </div>
  );
};
export default SecondStep;