import { TfiWrite } from "react-icons/tfi";
import { CiMobile1 } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import Card from "./Card";

const UiuxSection = () => {
  return (
    <div>
      <h1 className="text-center py-4 text-[40px] font-[700] text-[#2B2B2B] leading-[56px]">
        UI/UX Design
      </h1>
      <div className="mt-[30px] w-[93%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[12px]">
        <Card
          Title="Mobile design"
          SubTitle="we do web design"
          FIRSTICON={<CiMobile1 />}
        />
        <Card
          Title="Web Design"
          SubTitle="we do web design"
          FIRSTICON={<TfiWrite />}
        />
        <Card
          Title="UI/UX design"
          SubTitle="we do web design"
          FIRSTICON={<FaPenNib />}
        />
        <Card
          Title="Wireframe design"
          SubTitle="we do web design"
          FIRSTICON={<TfiWrite />}
        />
        <Card
          Title="Prototyping design"
          SubTitle="we do web design"
          FIRSTICON={<TfiWrite />}
        />
      </div>
    </div>
  );
};

export default UiuxSection;
