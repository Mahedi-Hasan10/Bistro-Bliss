import Image from "next/image";
const AboutCard = ({ IMAGE, TITLE, DESCRIPTION }) => {
  return (
    <div className="max-w-[366px] lg:h-[90px] flex items-start gap-6">
      <Image src={IMAGE} width={48} height={48} alt="About Card" />
      <div>
        <h5 className="text-[#2C2F24] text-xl font-bold">{TITLE}</h5>
        <p className="text-[#414536] text-base font-normal">{DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default AboutCard;
