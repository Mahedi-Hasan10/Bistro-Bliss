import Image from "next/image";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#474747]">
      <div className="max-container py-8">
        {/* top footer ==========================================================  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-2 md:gap-4 gap-6 mb-[130px]">
          <div className="mx-auto">
            <div className="flex mb-[38px]">
              <Image src="/Vector.png" width={56} height={55} alt="logo" />
              <Image
                src="/logo.png"
                width={182.667}
                height={38.667}
                alt="logo"
              />
            </div>
            <p className="text-[#ADB29E] text-[16px] font-[400] leading-6 mb-[30px] max-w-[293px]">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
            <div className="flex space-x-4 justify-center text-[#ffffff]">
              <div className="text-[35px] rounded-full hover:text-slate-600 cursor-pointer transition-all duration-200 ">
                <AiFillTwitterCircle />
              </div>
              <div className="text-[35px] rounded-full hover:text-slate-600 cursor-pointer transition-all duration-200 ">
                <FaFacebook />
              </div>
              <div className="text-[35px] rounded-full hover:text-slate-600 cursor-pointer transition-all duration-200 ">
                <AiFillInstagram />
              </div>
              <div className="text-[35px] rounded-full hover:text-slate-600 cursor-pointer transition-all duration-200 ">
                <AiFillGithub />
              </div>
            </div>
          </div>
          <div className="mx-auto text-[16px] text-white">
            <h3 className="mb-[40px] font-[700]">Pages</h3>
            <ul className="flex lg:items-start items-end lg:flex-col flex-row  space-y-[20px] lg:space-x-0 space-x-[20px] flex-wrap">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Delevery</li>
            </ul>
          </div>
          <div className="mx-auto text-[16px] text-white">
            <h3 className="mb-[40px] font-[700]">Utility pages</h3>
            <ul className="flex lg:items-start items-end lg:flex-col flex-row space-y-[20px] lg:space-x-0 space-x-[20px] flex-wrap">
              <li>Start here</li>
              <li>StyleGuide</li>
              <li>Password Protected</li>
              <li>404 Not Found</li>
              <li>Licences</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] mb-[40px] font-[700]">
              Follow Us On Instagram
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/footer1.png"
                width={194}
                height={170}
                alt="footer-img"
                className="rounded-[10px]"
              />
              <Image
                src="/footer2.png"
                width={194}
                height={170}
                alt="footer-img"
                className="rounded-[10px]"
              />
              <Image
                src="/footer3.png"
                width={194}
                height={170}
                alt="footer-img"
                className="rounded-[10px]"
              />
              <Image
                src="/footer4.png"
                width={194}
                height={170}
                alt="footer-img"
                className="rounded-[10px]"
              />
            </div>
          </div>
        </div>
        {/* bottom footer ==========================================================  */}
        <p className="text-[#adb29e] py-8 text-center">
          Copyright &copy; 2023 AppStick developer. all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
