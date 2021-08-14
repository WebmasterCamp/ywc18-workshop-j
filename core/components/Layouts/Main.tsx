import React, { ReactChild, useEffect, useState } from "react";

import { Navbar } from "../Navbar";

interface MainLayoutProps {
  children: ReactChild;
  topping?: any;
  bgImage?: string;
  bannerContent?: any;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <div className="relative z-0 h-content bg-grey-200">
        <div className="fixed inset-x-0 z-50">
          <Navbar />
        </div>
        <div
          style={{
            backgroundImage: "url(https://placeimg.com/900/480/people)",
          }}
          className="w-full bg-no-repeat bg-cover h-[400px] tablet:h-760"
        ></div>
        <div className="mx-4 tablet:mx-auto max-w-7xl">{props.children}</div>
      </div>
    </>
  );
};
