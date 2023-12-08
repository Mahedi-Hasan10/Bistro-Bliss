import ServiceCard from "./Card";

const HeroServices = () => {
  return (
    <section className="max-container text-center">
      <h2 className=" mt-[92px] lg:px-0 px-4 lg:text-[55px] md:text-[45px] text-[35px] text-[#2C2F24] font-[500] lg:leading-[60px] leading-[30px] text-center">
        We also offer unique services for your events
      </h2>
      <div className="flex justify-around flex-wrap gap-6 lg:px-0 px-4 pt-[60px] pb-[120px]">
        <ServiceCard TITLE="Caterings" />
        <ServiceCard TITLE="Birthdays" />
        <ServiceCard TITLE="Weddings" />
        <ServiceCard TITLE="Events" />
      </div>
    </section>
  );
};

export default HeroServices;
