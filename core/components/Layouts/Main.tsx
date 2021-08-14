import classNames from "classnames";
import React, { ReactChild, useEffect, useRef, useState } from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

interface MainLayoutProps {
  children: ReactChild;
  topping?: any;
  bgImage?: string;
  bannerContent?: any;
}

export const MainLayout = (props: MainLayoutProps) => {
  const [visible, setVisible] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <div className="relative z-0 overflow-x-hidden h-content bg-grey-200">
        <div className="w-screen h-screen bg-black">
          <div className="flex flex-col items-center justify-center h-[95%]">
            <p className="text-purple-600 text-8xl">
              เพราะช่วงเวลา<span className="text-yellow-300">ดีดี</span>
            </p>
            <p className="text-purple-300 text-7xl">เกิดที่ร้านเสมอ</p>
            <div className="mt-[106px] flex space-x-2">
              <div
                onClick={() => scrollToBottom()}
                className="text-white w-[190px] flex justify-center cursor-pointer rounded-xl bg-purple-600 px-4 py-2"
              >
                <p className="text-3xl">ค้นหาอีเวนท์</p>
              </div>
              <div className="text-purple-600 w-[190px] border border-purple-600 flex justify-center cursor-pointer rounded-xl px-4 py-2">
                <p className="text-3xl">สร้างอีเวนท์</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames("inset-0", {
          "fixed block": !visible,
          hidden: visible,
        })}
      >
        <Navbar />
      </div>
      <div className="mx-4 tablet:mx-auto max-w-7xl">{props.children}</div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};
