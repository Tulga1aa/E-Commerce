import { useState } from "react";
import Steps from "@/components/Steps";
import { Button } from "@/components/ui/button";
import { PiTrashLight } from "react-icons/pi";

export type StepComponentProps = {
  step: number;
  next: () => void;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const FirstStep = ({ step, next }: StepComponentProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Chunky Glyph Tee",
      price: 120000,
      quantity: 1,
      image: "./Pics/pinecone1.png",
    },
    {
      id: 2,
      name: "Chunky Glyph Tee",
      price: 120000,
      quantity: 1,
      image: "./Pics/pinecone1.png",
    },
    {
      id: 3,
      name: "Chunky Glyph Tee",
      price: 120000,
      quantity: 1,
      image: "./Pics/pinecone1.png",
    },
  ]);

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const isSelected = step === 1;

  return (
    <div className="flex justify-center items-center bg-zinc-200 h-[800px]">
      <div className="w-[638px] h-[664px] flex flex-col justify-center items-center ">
        <div className="py-[50px]">
          <Steps step={step} />
        </div>

        <div className="bg-white p-8 border rounded-2xl gap-10">
          <div
            className="flex items-center gap-2 mb-4"
            style={{
              backgroundColor: isSelected ? "" : "transparent",
            }}
          >
            <p className="text-xl font-bold">1. Сагс</p>
            <p>({cartItems.length})</p>
          </div>

          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-[532px] h-[132px] rounded-2xl flex justify-between border-2 items-center p-4"
              >
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[100px] h-[100px] rounded-xl m-2 object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="border border-black rounded-2xl text-base py-1 px-3"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="border border-black rounded-2xl text-base py-1 px-3"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold mt-1">
                      {(item.price * item.quantity).toLocaleString()}₮
                    </p>
                  </div>
                </div>
                <PiTrashLight
                  onClick={() => handleRemove(item.id)}
                  className="w-[24px] h-[24px] cursor-pointer text-gray-600 hover:text-red-500 transition"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <p className="font-semibold">Нийт төлөх дүн:</p>
            <p className="font-bold">{total.toLocaleString()}₮</p>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              onClick={next}
              className="rounded-3xl bg-blue-700 text-white font-bold hover:bg-blue-600 h-[38px] px-9 py-2"
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
