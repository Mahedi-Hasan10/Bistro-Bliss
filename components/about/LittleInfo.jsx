import Image from "next/image";
import InfoCard from "./InfoCard";
const LittleInfo = () => {
  return (
    <div className="bg-[#f9f9f7]">
      <div className="max-container grid lg:grid-cols-2 grid-cols-1 lg:gap-[90px] md:gap-[20px] gap-[20px] ">
        <div className="flex flex-col justify-center lg:gap-6 gap-4 lg:py-[90px] pb-8 lg:px-0 px-4">
          <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[35px] font-[500] lg:leading-[60px] leading-[40px]">
            A little information for our valuable guest
          </h2>
          <p className="text-[#414536] lg:text-[16px] text-[14px] font-[400] lg:leading-6 leading-5">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <InfoCard TITLE="3" SUBTITLE="Locations" />
            <InfoCard TITLE="1995" SUBTITLE="Founded" />
            <InfoCard TITLE="65+" SUBTITLE="Staff Members" />
            <InfoCard TITLE="100%" SUBTITLE="Satisfied Customers" />
          </div>
        </div>
        <div className="relative lg:py-[90px] py-[45px] lg:px-0 px-4">
          <Image
            src="/aboutLF.png"
            className="object-cover rounded-lg"
            width={500}
            height={500}
            alt="Hero About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default LittleInfo;
