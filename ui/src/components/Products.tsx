import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";

import axios from "axios";

type Product = {
  _id: string;
  productName: string;
  images: string[];
  price: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const GetProduct = async () => {
    try {
      const { data } = await axios.get<{ Product: Product[] }>(
        `http://localhost:8001/products`
      );

      setProducts(data.Product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProduct();
  }, []);

  return (
    <div className="w-full grid grid-cols-4 gap-5 ">
      {products?.map((product) => {
        return (
          <ProductCard
            key={product._id}
            name={product.productName}
            image={product.images[0]}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
