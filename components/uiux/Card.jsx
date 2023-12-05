import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const Card = ({ Title, SubTitle, FIRSTICON }) => {
  return (
    <div className="max-w-[440px] p-2 min-h-[200px] border rounded flex flex-col group cursor-pointer pl-[15px]">
      <div className="grid grid-cols-2 pt-[20px]">
        <div className="flex items-center justify-start px-4 py-4 group-hover:text-[#ff6809] text-[24px] transition duration-300">
          {FIRSTICON}
        </div>
        <div className="flex items-center justify-start transition duration-300">
          <Image src="/star23.svg" width={26} height={26} alt="star" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center flex-col">
          <h3 className="lg:text-[24px] text-[#2B2B2B] lg:font-[600] md:text-[20px] text-[18px] font-[500] ">
            {Title}
          </h3>
          <p className="text-[#636161] lg:text-[24px] md:text-[20px] text-[18px] font-[400] lg:pb-[24px] pb-[20px] pt-[16px] px-2">
            {SubTitle}
          </p>
        </div>
        <div className="flex mb-2 items-end justify-center">
          <div className="text-[28px] lg:h-[54px] h-[40px] lg:w-[54px] w-[40px] flex items-center justify-center border rounded-full group-hover:bg-[#ff6809] group-hover:text-white transition duration-300">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
