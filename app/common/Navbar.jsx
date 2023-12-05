"use client";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from "next/dist/lib/constants";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
const NavbarFun = () => {
  const auth = getAuth(app);
  const [loginUser, setLoginUser] = useState({});
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginUser(user)
    } else {
      // console.log("user loged out");
    }
  });
  console.log(loginUser); 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoginUser({});
        alert("signout successfull");
        // window.location.reload();
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <section className="bg-[#474747] w-full">
      {/* topbar start-=========== */}
      <div className="max-container font-poppins flex lg:flex-row flex-col lg:justify-between items-center py-2">
        <div className="top-nav">
          <div className="flex lg:flex-row md:flex-row flex-col gap-x-4 text-[#ffffff] lg:text-[16px] text-[14px] px-4 ">
            <div className="flex space-x-2 items-center justify-center">
              <BiPhoneCall />
              <p>+8801725649</p>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              <HiOutlineMail />
              <p>yammi@bistrobliss.com</p>
            </div>
          </div>
        </div>
        <div className="flex  gap-x-2 text-center text-[#ffffff]">
          <div className="bg-[#5c5c5c] hover:bg-[#7c7c7c] cursor-pointer p-4 rounded-full text-lg">
            <AiFillTwitterCircle />
          </div>
          <div className="bg-[#5c5c5c] hover:bg-[#7c7c7c] cursor-pointer p-4 rounded-full text-lg">
            <FaFacebook />
          </div>
          <div className="bg-[#5c5c5c] hover:bg-[#7c7c7c] cursor-pointer p-4 rounded-full text-lg">
            <AiFillInstagram />
          </div>
          <div className="bg-[#5c5c5c] hover:bg-[#7c7c7c] cursor-pointer p-4 rounded-full text-lg">
            <AiFillGithub />
          </div>
        </div>
      </div>
      {/* topbar end-=========== */}
      {/* Navbar start ========================================== */}
      <div className="bg-[#f9f9f7] w-full py-2">
        <div className="navbar max-container">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="text-black text-lg lg:hidden">
                <GiHamburgerMenu />
              </label>
              <ul
                tabIndex={0}
                className="text-black bg-[#f9f9f7] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <Link href="/about">About</Link>
                </li>
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <Link href="/menu">Menu</Link>
                </li>
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-2 items-center justify-center ml-2">
              <Link
                className="lg:text-[42.667px] md:text-[30px] text-[18px] text-[#474747]  italic"
                href="/"
              >
                Bistro Bliss
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-4 px-1 text-black bg-[#f9f9f7]">
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/pages">Pages</Link>
              </li>
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <Link href="/contact">Contact</Link>
              </li>
              {
                loginUser?.email ? 
                <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
                <button onClick={handleSignOut}>signout</button>
              </li>:
              <li className="cursor-pointer hover:bg-[#dbdfd0] px-4 py-2 rounded-full">
              <Link href="/signin">signin</Link>
            </li>
              }
            </ul>
          </div>
          <div className="navbar-end">
            <h2 className="mr-2 text-red-500">{loginUser?.email}</h2>
            <Link
              href="/book"
              className="border text-black cursor-pointer hover:bg-[#dbdfd0] border-black px-6 py-3 rounded-full"
            >
              Book a table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarFun;
