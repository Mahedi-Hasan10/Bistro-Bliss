const InfoCard = ({ TITLE, SUBTITLE }) => {
  return (
    <div className="max-w-[293px] max-h-[174px] flex flex-col items-center justify-center bg-white px-[60px] pt-[30px] pb-[40px]">
      <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[30px] font-medium leading-[60px] italic">
        {TITLE}
      </h2>
      <p className="text-[#414536] lg:text-[18px] text-[16px] font-medium leading-6">
        {SUBTITLE}
      </p>
    </div>
  );
};

export default InfoCard;
