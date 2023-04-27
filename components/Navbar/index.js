import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [smallTab, setSmallTab] = useState(false);

  return (
    <>
      <div className="w-full">
        <nav className="relative backdrop-blur-md max-md:hidden flex justify-between items-center">
          <div className="pl-14">
            <img className="w-[48px]" src="/assets/shared/logo.svg" />
          </div>
          <div className="md:block">
            <hr className="absolute left-[180px] opacity-25 z-10 w-[560px] hidden lg:block" />
          </div>
          <div className="w-[830px] backdrop-blur-md max-md:hidden bg-white/10 flex justify-between xl:px-24 py-8 text-xl text-white text-[16px] hidden lg:block space-x-10">
            <Link href="/">00 HOME</Link>
            <Link href="/destination">01 DESTINATION</Link>
            <Link href="/crew">02 CREW</Link>
            <Link href="/technology">03 TECHNOLOGY</Link>
          </div>
          <div className="backdrop-blur-md max-md:hidden bg-white/10 w-1/2 flex justify-between xl:px-32 py-8 space-x-4 text-xl text-white text-[18px] md:px-12 md:text-[14px] md:w-3/5 md:block lg:hidden">
            <Link href="/">HOME</Link>
            <Link href="/destination">DESTINATION</Link>
            <Link href="/crew">CREW</Link>
            <Link href="/technology">TECHNOLOGY</Link>
          </div>
        </nav>
      </div>

      {/* Small Screen Nave Bar */}
      <div className="max-md:block hidden mb-4">
        <nav>
          <div className="text-white">
            <div className="nav-container container">
              <div className="small-device-width flex justify-between px-6">
                <Link className="home-link-sai" href="./">
                  <div>
                    <img className="w-[48px]" src="/assets/shared/logo.svg" />
                  </div>
                </Link>
                <button
                  className="header-hamburger-icon"
                  onClick={() => setSmallTab(!smallTab)}
                >
                  {/* {smallTab ? (
                    <RxCross1 className="text-[30px]" />
                  ) : (
                    <GiHamburgerMenu className="ham-icon" />
                  )} */}
                  <GiHamburgerMenu className="ham-icon text-[30px]" />
                </button>
              </div>
            </div>
            {smallTab && true ? (
              <div
                onClick={() => setSmallTab(false)}
                className="z-10 space-x-3 backdrop-blur-lg text-white bg-white/10 text-[16px] pl-4  top-0 right-0 w-[70%] h-full fixed"
              >
                <div className="text-right p-5 mb-10">
                  <button
                    className="header-hamburger-icon"
                    onClick={() => setSmallTab(!smallTab)}
                  >
                    {/* {smallTab ? (
                    <RxCross1 className="text-[30px]" />
                  ) : (
                    <GiHamburgerMenu className="ham-icon" />
                  )} */}
                    <RxCross1 className="text-[24px]" />
                  </button>
                </div>
                <div className="flex flex-col space-y-4 m-0 ">
                  <Link href="/">00 HOME</Link>
                  <Link href="/destination">01 DESTINATION</Link>
                  <Link href="/crew">02 CREW</Link>
                  <Link href="/technology">03 TECHNOLOGY</Link>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
}
