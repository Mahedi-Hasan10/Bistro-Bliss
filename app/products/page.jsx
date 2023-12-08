"use client";
import MenuCard from "@/components/menu/MenuCard";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    console.log("error");
  }

  return res.json();
}

const Page = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setItems(data.products);
    });
  }, []);
  // console.log(items);

  return (
    <section className="bg-white">
      <div className="max-container">
        <div className="text-center space-y-[20px] mx-auto py-[70px]">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
            Our Products
          </h1>
          <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[15px] justify-center p-4 lg:pb-[130px] md:pb-[60px] pb-[30px]">
          {items && items.map((item) => (
            <div
              key={item.id}
              className="max-w-[306px] flex flex-col items-center gap-[30px] border rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl"
            >
              <Image
                src={item.thumbnail}
                width={306}
                height={230}
                alt="egg"
                className="h-[230px] rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none"
              />
              <div className="gap-4 p-[30px] text-center">
                <h3 className="text-[#AD343E] text-[24px] font-bold leading-[30px] mb-[15px]">
                  $ {item.price}
                </h3>
                <Link
                  href={`product-details/${item.id}`}
                  className="text-[#2C2F24] text-2xl font-bold leading-7 mb-[10px] line-clamp-1"
                >
                  {item.title}
                </Link>
                <p className="text-[#414536] text-[16px] font-normal leading-6 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
