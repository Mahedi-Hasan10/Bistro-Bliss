import { FaPhp, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiQuasar, SiNodedotjs } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoCss3,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import Image from "next/image";

const PageButton = ({ ICONSLIST, GRIDSTYLE, TITLE }) => {
  return (
    <div className=" relative min-h-[181px] w-fit rounded-[120px] mx-auto border flex items-center lg:gap-4 gap-2 lg:p-5 p-2">
      <div className="lg:h-[140px] h-[130px] lg:w-[148px] w-[138px] shadow-lg rounded-full flex justify-center items-center">
        <p className="lg:text-[20px] text-[16px] text-[#FF6809] text-center font-semibold px-3">
          Web Development
        </p>
      </div>
      <div className="py-5 flex flex-wrap gap-6 max-w-[847px]">
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/php.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">PHP</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/quasar.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">Quasar</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/vanilajs.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">JavaScript</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/html.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">HTML</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/angular.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">Angular</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/vue.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">VueJS</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/css.svg" width={28} height={28} alt="php" />
          <div>
            {" "}
            <p className="text-[#636161]">CSS</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/laravel.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">Laravel</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/bootstrap.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">bootstrap</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <Image src="/node.svg" width={28} height={28} alt="php" />
          <div>
            <p className="text-[#636161]">NodeJs</p>
          </div>
        </div>
        <div className="pageButtonStyle text-[24px] gap-3">
          <div>
            <Image src="/node.svg" width={28} height={28} alt="php" />
          </div>
          <div>
            <p className="text-[#636161]">NodeJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageButton;
