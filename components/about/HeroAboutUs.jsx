"use client";
import Image from "next/image";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HeroAboutUs = () => {
  
  return (
    <section className="w-full min-h-[856px] bg-[#f9f9f7]">
      <div
       data-aos="fade-right"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="false"
       data-aos-anchor-placement="top-center"
      className="max-container grid lg:grid-cols-2 grid-cols-1 lg:gap-[90px] md:gap-[20px] gap-[20px]">
        <div className="relative lg:py-[90px] py-[45px] lg:px-0 px-4">
          <Image
            src="/heroAboutus.png"
            width={700}
            height={700}
            alt="hero-about-us"
            className="rounded-xl"
          />
          <div className="lg:absolute lg:bottom-0  lg:left-[40%] lg:mt-0 mt-[25px] lg:p-[50px] md:p-[40px] p-[30px] lg:max-h-[321px] gap-4 max-w-[411px] bg-[#474747] rounded-xl">
            <h3 className="text-white text-2xl font-bold leading-[30px]">
              Come and visit us
            </h3>
            <div className="flex space-x-[20px] items-center mt-[45px]">
              <MdCall className="text-[24px]" />{" "}
              <p className=" text-base text-[#F9F9F7] font-[400]">
                (414) 857 - 0107
              </p>
            </div>
            <div className="flex gap-[20px] text-base text-[#F9F9F7] font-[400] items-center mt-[25px]">
              <MdEmail className="text-[24px]" />{" "}
              <p className=" text-base text-[#F9F9F7] font-[400]">
                happytummy@restaurant.com
              </p>
            </div>
            <div className="flex gap-[20px] text-base text-[#F9F9F7] font-[400] mt-[25px]">
              <IoLocation className="text-[24px]" />{" "}
              <p className=" text-base text-[#F9F9F7] font-[400] max-w-[267px] flex items-start">
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </p>
            </div>
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
        >
        <div className="flex flex-col justify-center lg:gap-6 gap-4 lg:py-[90px] pb-8 lg:px-0 px-4">
          <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[35px] font-[500] lg:leading-[60px] leading-[40px]">
            We provide healthy food for your family.
          </h2>
          <h5 className="text-[#2C2F24] lg:text-[18px] text-[16px] font-[500] lg:leading-7 leading-6">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city&apos;s rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </h5>
          <p className="text-[#414536] lg:text-[16px] text-[14px] font-[400] lg:leading-6 leading-5">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <a
            className="lg:py-5 py-4 lg:px-8 px-6 border border-[#182226] rounded-full max-w-[179px] text-[15px] font-[700] text-[#182226] leading-6"
            href="#"
          >
            more about us
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
