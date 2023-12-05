import PageButton from "@/components/menu/PageButton";
import UiuxSection from "@/components/uiux/uiuxSection";
import Image from "next/image";

const page = () => {
  return (
    <section className="bg-white min-h-[100vh] pb-[40px] ">
      <div className="w-[90%] mx-auto">
        <UiuxSection />
        <div className="pt-[150px]"></div>
        <div className=" flex justify-between items-center mb-[60px]">
          <h1 className="text-[#2B2B2B] text-[40px]  font-[700]">
            Stack of Technology
          </h1>
          <a href="#" className="border lg:py-2 lg:px-6 px-8 border-[#FF6809]">
            View all
          </a>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col max-container space-x-4">
          <Image
            src="/Star3.svg"
            width={93}
            height={93}
            alt="star"
            className="lg:flex hidden"
          />
          <PageButton />
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-6  mt-[40px]">
          <div className=" relative min-h-[181px] w-fit rounded-[120px] mx-auto border flex items-center lg:gap-4 gap-2 lg:p-5 p-2">
            <div className="lg:h-[140px] h-[130px] lg:w-[148px] w-[138px] shadow-lg rounded-full flex justify-center items-center">
              <p className="lg:text-[20px] text-[16px] text-[#FF6809] text-center font-semibold px-3">
                Graphics Design
              </p>
            </div>
            <div className="lg:py-0 py-5 flex flex-wrap gap-6 max-w-[847px]">
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/php.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Adobe Illustrator</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/quasar.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Figma</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/vanilajs.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Adobe Photoshop</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/html.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Adobe XD</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative min-h-[181px] w-fit rounded-[120px] mx-auto border flex items-center lg:gap-4 gap-2 lg:p-5 p-2">
            <div className="lg:h-[140px] h-[130px] lg:w-[148px] w-[138px] shadow-lg rounded-full flex justify-center items-center">
              <p className="lg:text-[20px] text-[16px] text-[#FF6809] text-center font-semibold px-3">
                App Development
              </p>
            </div>
            <div className="lg:py-0 py-5 flex flex-wrap gap-6 max-w-[847px]">
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/php.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Android App</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/quasar.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">ISO</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/vanilajs.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Flutter</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/html.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">React Native</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/html.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Kotlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around gap-[20px] items-center mt-[40px]">
          <div className="h-[140px]  w-[148px] border rounded-full text-[20px] font-[600] text-[#FF6809] lg:flex hidden items-center justify-center text-center">
            <Image src="/image2.png" width={74} height={73} alt="star" />
          </div>
          <div className=" relative min-h-[181px] w-fit rounded-[120px] mx-auto border flex items-center gap-4 gap-2 p-5">
            <div className="h-[178px] w-[148px] shadow-lg rounded-full flex justify-center items-center">
              <p className="lg:text-[20px] text-[16px] text-[#FF6809] text-center font-semibold px-3">
                Digital Marketing
              </p>
            </div>
            <div className="py-5 flex flex-wrap gap-6 max-w-[847px]">
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/php.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Google Adwords</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/quasar.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Google Analytics</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/vanilajs.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Power Editor</p>
                </div>
              </div>
              <div className="pageButtonStyle text-[24px] gap-3">
                <Image src="/html.svg" width={28} height={28} alt="php" />
                <div>
                  <p className="text-[#636161]">Hootsuite</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/Star4.svg"
            width={93}
            height={93}
            alt="star"
            className="lg:flex hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
