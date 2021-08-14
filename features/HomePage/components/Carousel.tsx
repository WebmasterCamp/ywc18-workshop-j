import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import _ from "lodash";
import { EventCard } from "./EventCard";
import router from "next/router";

interface CarouselProps {
  data: any;
}

const delay = 3000;

export const Carousel = ({ data }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef?.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex == data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="relative max-w-full mx-auto overflow-hidden tablet:h-[550px]">
      <div className="absolute bottom-0 z-20 flex justify-center w-full mb-10">
        {_.map(data, (item, idx: number) => (
          <div
            key={idx}
            className={classNames("h-4 w-4 mx-2 rounded-full bg-purple-200", {
              "bg-purple-500": index === idx,
            })}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>

      <div
        className="z-0 space-x-6 transition duration-1000 ease-in whitespace-nowrap"
        style={{ transform: `translate3d(${-index * (100 / 3)}%, 0, 0)` }}
      >
        {_.map(data, (item, i) => (
          <div
            onClick={() => router.push(`/event/detail/${item.event_id}`)}
            className="inline-block"
            key={i}
          >
            <EventCard
              description={item.description}
              image={item.image}
              tag={item.tag}
              time={item.date}
              eventName={item.event_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
