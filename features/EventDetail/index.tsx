/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import _ from "lodash";
import { EventLayout } from "./components/Layout";

export const EventDetail = () => {
  return (
    <EventLayout>
      <div className="w-full">
        <div className="bg-black tablet:px-[40px] tablet:pt-[40px] tablet:pb-[40px] w-full">
          <div
            style={{
              backgroundImage: "url(https://placeimg.com/640/480/tech)",
            }}
            className="h-[419px] bg-cover bg-no-repeat"
          />
          <div>
            <div className="flex justify-between tablet:mt-[40px]">
              <p className="text-6xl text-white">Event Name</p>
              <div className="h-[50px] flex items-center bg-pink-300 p-2">
                <p className="text-2xl text-black">จองอีเวนท์นี้</p>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-base">วันนี้ 18:00 น.</p>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industries standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="tablet:px-[40px] tablet:pt-[60px]">
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="tablet:px-[40px] tablet:pt-[60px]">
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="tablet:px-[40px] tablet:pt-[60px]">
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-wrap mt-2 space-x-3">
            {_.map(["Category1"], (item, i) => (
              <div
                key={i}
                className="h-[50px] px-4 flex items-center rounded-md text-base bg-white border"
              >
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EventLayout>
  );
};
