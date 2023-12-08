
const BrowseCard = ({ ICON, TITLE }) => {
  return (
    <div className=" w-[306px] min-h-[375px] border flex flex-col items-center p-[40px] gap-4">
      <div className="text-[48px] text-[#474747] flex items-center justify-center p-[25] bg-[#f3f3f0] rounded-full w-[100px] h-[100px]">
        {ICON}
      </div>
      <div className="max-w-[238px] text-center mt-[30px]">
        <h3 className="text-[#2C2F24] text-[24px] font-[700] leading-6 mb-[15px] ">
          {TITLE}
        </h3>
        <p className="text-[#414536] text-[16px] font-[400] leading-6 mb-[15px] ">
          In the new era of technology we look in the future with certainty and
          pride for our life.
        </p>
        <a
          href="#"
          className="text-[#AD343E] text-[16px] font-[700] leading-6 mt-[15px] "
        >
          Explore more
        </a>
      </div>
    </div>
  );
};

export default BrowseCard;
