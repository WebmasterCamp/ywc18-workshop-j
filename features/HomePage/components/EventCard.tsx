/* eslint-disable @next/next/no-img-element */
import React from "react";
import _ from "lodash";

interface EventCardProps {
  tag: Array<string>;
  eventName: string;
  time: string;
  description: string;
  image: string;
}

export const EventCard = ({
  tag,
  eventName,
  time,
  description,
  image,
}: EventCardProps) => {
  return (
    <div className="flex flex-col tablet:h-[481px] h-[380px] justify-between bg-white border">
      <div className="relative h-[227px]">
        <div className="absolute top-0 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full">
          ❤️
        </div>
        <div
          style={{
            backgroundImage: `url(${image});`,
          }}
          className="absolute top-0 w-full h-full bg-no-repeat bg-cover"
        />
      </div>
      <div className="bg-gray-300 flex flex-col justify-center px-10 h-[254px]">
        <p className="text-2xl">{eventName}</p>
        <p className="text-base">{time}</p>
        <p className="text-base">{description}</p>
        <div className="flex flex-wrap space-x-3">
          {_.map(tag, (item, i) => (
            <div
              key={i}
              className="h-[32px] px-4 flex items-center rounded-md text-base bg-white border"
            >
              <p className="text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
