import { ProductCard } from "./ProductCard"

export const MainContent = () => {
    return(
      <div className="flex mx-auto max-w-[1040px] gap-5 mt-[20px] h-[1191px]">
    <div className="mx-auto max-w-[508px] gap-5 mt-[20px] h-[1191px]">
      <div className="flex gap-5">
    <ProductCard
        image="/photo/cardHero.svg"
        name="The Prompt Magazine"
        price="120,000$"
      />
         <ProductCard
        image="/photo/cardHero.svg"
        name="The Prompt Magazine"
        price="120,000$"
      />
      </div>
            <div className="w-[508px] h-[752px] ">
                 <img className=" rounded-xl" src="/photo/Herophoto.svg"/>
                <p className="">The Prompt Magazine</p>
                <h2 className="font-bold">120.000₮</h2>
            </div>
    </div>
      <div className="mx-auto max-w-[508px] gap-5 mt-[20px] h-[1191px]">
            <div className="w-[508px] h-[752px] ">
                 <img className=" rounded-xl" src="/photo/Herophoto.svg"/>
                <p className="">The Prompt Magazine</p>
                <h2 className="font-bold">120.000₮</h2>
            </div>
       <div className="flex gap-5">
       <ProductCard
        image="/photo/cardHero.svg"
        name="The Prompt Magazine"
        price="120,000$"
      />
        <ProductCard
        image="/photo/cardHero.svg"
        name="The Prompt Magazine"
        price="120,000$"
      />
       </div>
      </div>
    </div>
    )   
}