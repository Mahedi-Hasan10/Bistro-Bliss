import Image from "next/image";

const ServiceCard = ({ TITLE }) => {
  return (
    <div className="w-[306px] min-h-[375px] flex flex-col items-center gap-[30px]">
      <Image src="/service1.png" width={306} height={320} alt="service1" />
      <div className="gap-4">
        <h3 className="text-[#2C2F24] text-2xl font-bold leading-7">{TITLE}</h3>
        <p className="text-[#414536] text-[16px] font-normal leading-6">
          In the new era of technology we look in the future with certainty for
          life.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
