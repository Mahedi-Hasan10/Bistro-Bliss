"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    console.log("error");
  }
  return res.json();
}

const Page = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    getData().then((data) => {
      setItem(data.products.find((item) => item.id === parseInt(id)));
    });
  }, [id]);
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = item;
  return (
    <section className="bg-white">
      <div className="max-container">
        <div className="text-center space-y-[20px] mx-auto py-[70px]">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
            Product Details
          </h1>
          <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <Image src={thumbnail} alt={title} width={600} height={600} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold mr-2">${price}</span>
                {discountPercentage > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    ${((price * (100 - discountPercentage)) / 100).toFixed(2)}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                    {discountPercentage}% OFF
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">Rating: {rating}/5</p>
              <p className="text-gray-600 mb-4">Stock: {stock}</p>
              <p className="text-gray-600 mb-4">Brand: {brand}</p>
              <p className="text-gray-600 mb-4">Category: {category}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
