import Image from "next/image";
const OrderApp = () => {
  return (
    <div className="bg-[#f9f9f7]">
      <div className="max-container grid lg:grid-cols-2 grid-cols-1 lg:gap-[90px] md:gap-[20px] gap-[20px] lg:py-[60px] py-[20px]">
        <div className="flex flex-col justify-center lg:gap-6 gap-4 lg:py-[90px] pb-8 lg:px-0 px-4">
          <h2 className="text-[#2C2F24] lg:text-[55px] md:text-[40px] text-[35px] font-[500] lg:leading-[60px] leading-[40px]">
            You can order through apps
          </h2>
          <p className="text-[#414536] lg:text-[16px] text-[14px] font-[400] lg:leading-6 leading-5">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
        <div className="lg:py-[90px] py-[45px] lg:px-0 px-4 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-6 items-center">
            <Image src="/menuApp/app1.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app2.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app3.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app4.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app5.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app6.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app7.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app8.svg" width={290} height={90} alt="app1" />
            <Image src="/menuApp/app9.svg" width={290} height={90} alt="app1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
