"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HeroSection = () => {
  return (
    <section
      className="lg:h-[700px] h-[500px] bg-cover bg-center max-w-[1600px] bg-no-repeat"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className=" h-full w-full flex items-center justify-center">
        <div 
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="max-w-[667px] text-center lg:px-0 px-4">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[60px] text-[40px] font-[400] lg:leading-[96px] md:leading-[70px] leading-[50px]">
            Best food for your taste
          </h1>
          <p className="text-[#2C2F24] lg:text-[20px] text-[16px] font-[400] lg:leading-8 leading-6 max-w-[600px] mt-[32px]">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="flex space-x-4 items-center justify-center mt-[32px]">
            <Link
              href="/book"
              className="text-white cursor-pointer bg-[#AD343E] hover:bg-transparent hover:border hover:border-black hover:text-black lg:px-[32px] md:px-[24px] px-[18px] lg:py-[20px] py-[14px] rounded-full"
            >
              Book a table
            </Link>
            <Link
              href="/menu"
              className="border text-black cursor-pointer hover:bg-[#dbdfd0] border-black lg:px-[32px] md:px-[24px] px-[18px] lg:py-[20px] py-[14px] rounded-full"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
