

type StepsProps = {
  step: number;
};

const Steps = (props: StepsProps) => {
  const { step } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center"
        style={{
          backgroundColor: step === 1 ? "blue" : "transparent",
        }}
      >
        <button className=" border border-3 border-black rounded-2xl text-base	py-1 px-3 ">
          1
        </button>
        <p className="border border-1 flex border-black h-0 w-[80px]"></p>
      </div>
      <div
        className="flex items-center"
        style={{
          backgroundColor: step === 2 ? "blue" : "transparent",
        }}
      >
        <button className=" border border-3 border-black rounded-2xl text-base	py-1 px-3  ">
          2
        </button>
        <p className="border border-1 flex border-black h-0 w-[80px]"></p>
      </div>
      <div
        className="flex items-center"
        style={{
          backgroundColor: step === 3 ? "blue" : "transparent",
        }}
      >
        <button className=" border border-3 border-black rounded-2xl text-base	py-1 px-3  ">
          3
        </button>
      </div>
    </div>
  );
};
export default Steps;