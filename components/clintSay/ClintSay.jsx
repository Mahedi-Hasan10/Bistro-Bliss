import Image from "next/image";
import ClintSayCard from "./ClintSayCard";
const image1 = <Image src="/cus1.svg" width={64} height={64} alt="clintSay" />;
const image2 = <Image src="/cus2.svg" width={64} height={64} alt="clintSay" />;
const image3 = <Image src="/cus1.svg" width={64} height={64} alt="clintSay" />;
const ClintSay = () => {
  return (
    <section className="w-full lg:pb-[135px] md:pb-[60px] pb-[20px]">
      <div className="max-container lg:px-0 px-4 ">
        <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[35px] font-medium lg:leading-[60px] leading-[30px] lg:py-[64px] md:py-[40px] py-[30px]  text-center">
          {" "}
          What Our Customers Say
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
          <ClintSayCard
            clintImage={image1}
            postTitle="“The best restaurant”"
            ClintTitle="Sophire Robson"
            ClintSubTitle="Los Angeles, CA"
          />
          <ClintSayCard
            clintImage={image2}
            postTitle="“Simply delicious”"
            ClintTitle="Matt Cannon"
            ClintSubTitle="San Diego, CA"
          />
          <ClintSayCard
            clintImage={image3}
            postTitle="“One of a kind restaurant”"
            ClintTitle="Andy Smith"
            ClintSubTitle="San Francisco, CA"
          />
        </div>
      </div>
    </section>
  );
};

export default ClintSay;
