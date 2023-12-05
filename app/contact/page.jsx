import Contact from "@/components/contact/Contact";
import React from "react";

const page = () => {
  return (
    <section className="bg-[#f9f9f7] min-h-[100vh]">
      <div className="max-container">
        <div className="text-center space-y-[20px] mx-auto py-[70px] lg:pb-[361px] pb-[50px]">
          <h1 className="text-[#2C2F24] lg:text-[100px] md:text-[70px] text-[40px] font-normal lg:leading-[96px] leading-[50px]">
            Contact Us
          </h1>
          <p className="text-[#495460] lg:text-lg text-[16px] font-normal max-w-[500px] mx-auto">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default page;
