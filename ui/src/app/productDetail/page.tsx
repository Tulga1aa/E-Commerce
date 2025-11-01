"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { HeroCard } from "@/components/HeroCard";

const ProductDetail = () => {
  const router = useRouter();

  // ✅ state-ууд
  const [selectedImage, setSelectedImage] = useState("/photo/cardHero.svg");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // ✅ загвар зургийн жагсаалт
  const images = [
    "/photo/cardHero.svg",
    "/photo/cardHero2.svg",
    "/photo/cardHero3.svg",
    "/photo/cardHero4.svg",
  ];

  // ✅ хэмжээ
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

  const handleOrder = () => {
    if (!selectedSize) {
      alert("Хэмжээгээ сонгоно уу!");
      return;
    }
    router.push("/buy-step"); // → BuyStep page рүү үсрэх
  };

  return (
    <div className="flex flex-col items-center bg-zinc-100 min-h-screen py-10 px-6">
      {/* Product info */}
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-10 p-8 max-w-[1100px] w-full">
        {/* Зүүн тал — зурагнууд */}
        <div className="flex gap-6">
          {/* Доош цувсан thumbnail-ууд */}
          <div className="flex flex-col gap-4">
            {images.map((img) => (
              <div
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`border-2 rounded-xl cursor-pointer transition-all ${
                  selectedImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                <Image
                  src={img}
                  alt="preview"
                  width={70}
                  height={70}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Үндсэн зураг */}
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Main product"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 bg-white/70 rounded-full p-2 hover:bg-white transition"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Баруун тал — дэлгэрэнгүй */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-3">The Prompt Magazine</h1>
            <p className="text-gray-600 mb-4">
              Энэхүү бүтээгдэхүүн нь чанартай материал, өвөрмөц дизайнтай Prompt
              Magazine цувралын шинэ хувилбар юм.
            </p>
            <p className="text-xl font-semibold text-blue-700 mb-6">120,000₮</p>

            {/* Хэмжээ сонгох */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Хэмжээ:</p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-2xl text-sm font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Тоо ширхэг */}
            <div className="flex items-center gap-4 mb-8">
              <p className="font-semibold">Тоо ширхэг:</p>
              <div className="flex items-center border rounded-2xl px-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-lg"
                >
                  -
                </button>
                <span className="px-3 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Захиалах товч */}
          <button
            onClick={handleOrder}
            className="bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
          >
            Захиалах
          </button>
        </div>
      </div>

      {/* Ижил төрлийн бараа */}
      <div className="w-full max-w-[1038px] mt-14">
        <h2 className="text-xl font-bold mb-5">Ижил төрлийн бараа</h2>
        <HeroCard />
      </div>
    </div>
  );
};

export default ProductDetail;
