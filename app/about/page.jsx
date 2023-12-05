import AboutCard from "@/components/about/AboutCard";
import HeroAboutUs from "@/components/about/HeroAboutUs";
import LittleInfo from "@/components/about/LittleInfo";
import ClintSay from "@/components/clintSay/ClintSay";
import Image from "next/image";

const image1 = "/abm1.svg";
const image2 = "/abm2.svg";
const image3 = "/abm3.svg";
const page = () => {
  return (
    <section className="bg-white">
      <HeroAboutUs />
      <div className="bg-[url('/about2.png')] bg-cover bg-center lg:h-[690px] md:h-[500px] h-[300px] ">
        <div className="flex flex-col lg:gap-8 gap-4 items-center justify-center h-full max-w-[596px] mx-auto lg:px-0 md:px-2 px-4 text-center ">
          <Image
            src="/aboutPlay.svg"
            className="lg:w-[106px] lg:h-[106px] md:h-[70px] md:w-[70px] w-[50px] h-[50px]"
            width={106}
            height={106}
            alt="Hero About Us"
          />
          <h2 className="text-[#fff] lg:text-[55px] md:text-[40px] text-[30px] font-medium lg:leading-[60px] md:leading-[50px] leading-[40px] ">
            Feel the authentic & original taste from us
          </h2>
        </div>
      </div>
      <div className="py-[80px] max-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[87px]">
        <AboutCard
          IMAGE={image1}
          TITLE="Multi Cuisine"
          DESCRIPTION="In the new era of technology we look in the future with certainty life."
        />
        <AboutCard
          IMAGE={image2}
          TITLE="Easy To Order"
          DESCRIPTION="In the new era of technology we look in the future with certainty life."
        />
        <AboutCard
          IMAGE={image3}
          TITLE="Fast Delivery"
          DESCRIPTION="In the new era of technology we look in the future with certainty life."
        />
      </div>
      <LittleInfo />
      <ClintSay />
    </section>
  );
};

export default page;
