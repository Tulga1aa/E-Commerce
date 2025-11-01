"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

type HatProps = {
  image?: string;
  name: string;
  price: string;
};

export const Hat = (props: HatProps) => {
  const { image, name, price } = props;
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const hearthColor = liked ? "red" : "black";
  const hearthFillColor = liked ? "black" : "transparent";

  return (
    <div className="cursor-pointer gap-5 ">
      <div
        className="rounded-2xl w-[244px] h-[331px]"
        style={{
          height: 330,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-end p-4">
          <Heart
            onClick={toggleLike}
            color={hearthColor}
            fill={hearthFillColor}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="">{name}</p>
        <h2 className="font-bold">{price}</h2>
      </div>
    </div>
  );
};
