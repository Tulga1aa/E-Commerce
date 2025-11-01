import { StepComponentProps } from "./FirstPageBuySteps";
import Steps from "./Steps";

const ThirdStep = (props: StepComponentProps) => {
    const  { step, next } = props;
  return (
    <div>
      <div className="flex justify-center bg-zinc-200">
        <div className="w-[638px] h-[664px] flex flex-col justify-center items-center ">
          <Steps step={step} />
          <div className="bg-white p-8 border rounded-2xl gap-10">
            <p>3. Төлбөр төлөлт</p>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdStep;