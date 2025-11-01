"use client";

import BigProduct from "./BigProduct";
import SmallProduct from "./SmallProduct";

const Product = (props: { datas: [] }) => {
  const { datas } = props;

  return (
    <div className="grid grid-cols-4 max-w-[1040px] mx-auto gap-x-5 gap-y-12 mt-4 mb-[100px]">
      {datas.map(
        (
          data: {
            price: number;
            productName: string;
            images: [string];
            _id: string;
          },
          index
        ) => {
          return (
            <div
              key={index}
              className={`${
                index !== 6 && index !== 7
                  ? "col-span-1 row-span-1"
                  : "col-span-2 row-span-2"
              }  `}
            >
              {index !== 6 && index !== 7 ? (
                <SmallProduct
                  price={data.price}
                  productName={data.productName}
                  img={`url(${data.images[0]})`}
                  productId={data._id}
                />
              ) : (
                <BigProduct
                  price={data.price}
                  productName={data.productName}
                  img={`url(${data.images[0]})`}
                  productId={data._id}
                />
              )}
            </div>
          );
        }
      )}
    </div>
  );
};
export default Product;