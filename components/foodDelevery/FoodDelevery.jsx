"use client";
import Image from "next/image";
import { FaRegClock, FaShoppingCart } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FoodDelevery = () => {
  return (
    <section className="w-full bg-[#f9f9f7]">
      <div className="max-container grid lg:grid-cols-2 grid-cols-1 order-last lg:order-none lg:gap-[90px] md:gap-[20px] gap-[20px]">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
         className="grid lg:grid-cols-2 md:grid-cols-2 lg:px-0 px-4 gap-6 lg:py-[120px] py-[30px]">
          <Image
            src="/d1.png"
            width={431}
            height={600}
            alt="foodDelevery"
            className="rounded-xl"
          />
          <div className="flex flex-col gap-6 lg:mt-7">
            <Image
              src="/d2.png"
              width={290}
              height={333}
              alt="foodDelevery"
              className="rounded-xl"
            />
            <Image
              src="/d3.png"
              width={290}
              height={240}
              alt="foodDelevery"
              className="rounded-xl"
            />
          </div>
        </div>
        <div 
         data-aos="fade-left"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center"
        className="flex flex-col justify-center order-first lg:order-none lg:gap-6 gap-4 lg:py-[90px] pb-8 max-w-[461px] lg:px-0 px-4">
          <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[35px] font-[500] lg:leading-[60px] leading-[40px]">
            Fastest Food Delivery in City
          </h2>
          <p className="text-[#414536] lg:text-[16px] text-[14px] font-[400] lg:leading-6 leading-5">
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </p>
          <div className="flex lg:gap-[20px] gap-[10px] items-center leading-6">
            <FaRegClock className="text-[24px] h-[30px] w-[30px] rounded-full bg-[#ad343e] p-[7px] text-white" />{" "}
            <p className=" lg:text-[20px] md:text-[18px] text-[16px]  text-[#2C2F24] font-[500]">
              Delivery within 30 minutes
            </p>
          </div>
          <div className="flex lg:gap-[20px] gap-[10px] items-center leading-6">
            <HiReceiptTax className="text-[24px] h-[30px] w-[30px] rounded-full bg-[#ad343e] p-[7px] text-white" />{" "}
            <p className=" lg:text-[20px] md:text-[18px] text-[16px] text-[#2C2F24] font-[500]">
              Best Offer & Prices
            </p>
          </div>
          <div className="flex lg:gap-[20px] gap-[10px] items-center leading-6">
            <FaShoppingCart className="text-[24px] h-[30px] w-[30px] rounded-full bg-[#ad343e] p-[7px] text-white" />{" "}
            <p className=" lg:text-[20px] md:text-[18px] text-[16px] text-[#2C2F24] font-[500]">
              Online Services Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDelevery;
