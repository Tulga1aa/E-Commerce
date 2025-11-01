export const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto max-w-[1240px] h-[292px] pt-[10px] ">
        <div className="flex w-[1240px] h-[48px] justify-between mt-[50px] items-center">
          <img className="w-[129px] h-[28px]" src="/icons/pineicon.svg" />
          <div className="flex">
            <div className="flex items-center">
              <img src="/icons/phone.svg" />
              <p className="text-white">99999999</p>
            </div>
            <div className="flex items-center ml-[20px]">
              <img src="/icons/Email.svg" />
              <p className="text-white">team5@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="p">
          <img
            className=" max-w-[1440px] mx-auto mt-[50px]"
            src="/icons/bottomLine.svg"
          />
        </div>
        <div className="flex justify-between pt-[50px]">
          <p className="text-white">© 2024 Team-5 MN</p>
          <img src="/icons/frame.svg" />
        </div>
      </div>
    </div>
  );
};
