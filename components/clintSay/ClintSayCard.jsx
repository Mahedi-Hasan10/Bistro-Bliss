import Image from "next/image";
import React from "react";

const ClintSayCard = ({ postTitle, ClintTitle, ClintSubTitle, clintImage }) => {
  return (
    <div className="min-h-[408px] max-w-[416px] rounded-md bg-[#f9f9f7] lg:p-[35px] p-[20px]">
      <h3 className="text-[#AD343E] lg:text-[24px] text-[20px] font-bold leading-[30px] mb-6">
        {postTitle}
      </h3>
      <p className="text-[#414536] lg:text-[18px] text-[16px] font-normal leading-6 mb-8">
        Last night, we dined at place and were simply blown away. From the
        moment we stepped in, we were enveloped in an inviting atmosphere and
        greeted with warm smiles.
      </p>
      <hr className="mb-8" />
      <div className="flex lg:gap-5 gap-2">
        {clintImage}
        <div className="flex flex-col items-center justify-center gap-1">
          <h5 className="text-[#2C2F24] text-[16px] lg:font-bold md:font-semibold font-medium leading-6">
            {ClintTitle}
          </h5>
          <p className="text-[#414536] text-[16px] font-normal">
            {ClintSubTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClintSayCard;
