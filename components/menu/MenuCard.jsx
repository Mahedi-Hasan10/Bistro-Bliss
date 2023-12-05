import Image from "next/image";
const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="max-w-[306px] min-h-[375px] flex flex-col items-center gap-[30px] border rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl">
      <Image
        src={image}
        width={306}
        height={230}
        alt="egg"
        className="rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none"
      />
      <div className="gap-4 p-[30px] text-center">
        <h3 className="text-[#AD343E] text-[24px] font-bold leading-[30px] mb-[15px]">
          $ {price}
        </h3>
        <h3 className="text-[#2C2F24] text-2xl font-bold leading-7 mb-[10px]">
          {title}
        </h3>
        <p className="text-[#414536] text-[16px] font-normal leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
