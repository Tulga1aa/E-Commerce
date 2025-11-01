"use client";

import { useParams } from "next/navigation";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return <div className="min-h-[calc(100vh-80px)]">{productId}</div>;
};

export default ProductPage;
