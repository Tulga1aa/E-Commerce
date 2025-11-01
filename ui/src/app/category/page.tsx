"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { CategoryCheckbox } from "@/components/CategoryCheckBox";
import Products from "@/components/Products";

type Category = {
  _id: string;
  name: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get<{ categories: Category[] }>(
        "http://localhost:8001/categories"
      );
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto flex p-6 gap-6 min-h-[calc(100vh-80px)]">
      <div className="cursor-pointer flex">
        <div className="cursor-pointer p-6 gap-5">
          <h2 className="font-bold cursor-pointer">Ангилал</h2>
          {categories.map((category) => {
            return <CategoryCheckbox key={category._id} name={category.name} />;
          })}
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Categories;
