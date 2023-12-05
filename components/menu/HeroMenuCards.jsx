"use client";
import { BiSolidBowlRice } from "react-icons/bi";
import BrowseCard from "./BrowseCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HeroMenuCards = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    className="max-container">
      <h2
       className="mt-[92px] lg:text-[55px] md:text-[45px] text-[35px] text-[#2C2F24] font-[500] lg:leading-[60px] leading-[30px] text-center">
        Browse Our Menu
      </h2>
      <div className="flex lg:flex-nowrap flex-wrap lg:gap-2 gap-6 lg:px-0 px-4 lg:py-[120px] py-[60px]">
        <BrowseCard ICON={<BiSolidBowlRice />} TITLE="Breakfast" />
        <BrowseCard ICON={<BiSolidBowlRice />} TITLE="Main Dishes" />
        <BrowseCard ICON={<BiSolidBowlRice />} TITLE="Drinks" />
        <BrowseCard ICON={<BiSolidBowlRice />} TITLE="Desserts" />
      </div>
    </section>
  );
};

export default HeroMenuCards;
