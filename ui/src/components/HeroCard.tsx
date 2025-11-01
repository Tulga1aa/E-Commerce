import { ProductCard } from "./ProductCard";


export const HeroCard = () => {
  return (
    <div className="bg-white mx-auto max-w-[1038px] flex gap-5 mt-[20px] ">
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
  );
};
