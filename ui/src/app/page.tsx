"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import Product from "@/components/Product";

export interface Products {
  _id: string;
  productName: string;
  price: number;
  img: [string];
}

const HomePage = () => {
  const [datas, setDatas] = useState<Products[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/products")
      .then(function (response) {
        setDatas(response.data.product);
      })
      .catch(function (error) {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <ProductCard
        image="/photo/cardHero.svg"
        name="The Prompt Magazine"
        price="120,000$"
      />
    </div>
  );
};

import { Banner } from "@/components/BannerHero";
import { HeroCard } from "@/components/HeroCard";
import { MainContent } from "@/components/MainContent";
import { FooterCard } from "@/components/FooterCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroCard />
      <MainContent />
      <FooterCard />
    </div>
  );
};
export default Home;
