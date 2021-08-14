import React, { ReactChild } from "react";

import { Navbar } from "@core/components/Navbar";

interface MainLayoutProps {
  children: ReactChild;
}

export const EventLayout = (props: MainLayoutProps) => {
  return (
    <>
      <div className="relative z-0 h-content">
        <div className="fixed inset-x-0 z-50">
          <Navbar />
        </div>
        <div
          style={{
            backgroundImage: "url(https://placeimg.com/900/480/people)",
          }}
          className="w-full bg-no-repeat bg-cover h-[700px]"
        ></div>
        <div className="mx-4 -mt-56 max-w-7xl laptop:mx-auto z-5 tablet:pb-104 tablet:px-4 tablet:-mt-112">
          {props.children}
        </div>
      </div>
    </>
  );
};
