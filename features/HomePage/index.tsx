import { useState } from "react";
import _ from "lodash";

import { Input } from "../../core/components/Input";
import { EventCard } from "./components/EventCard";
import { MainLayout } from "../../core/components/Layouts/Main";
import { HomePageData } from "./HomePageData";
import { Carousel } from "./components/Carousel";
import router from "next/router";

const HomePage = () => {
  const [value, setValue] = useState("");
  return (
    <MainLayout>
      <>
        <div className="flex justify-center w-full">
          <Input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
            value={value}
            placeholder="ค้นหาร้านที่คุณคิดถึง"
            className="w-full mt-[200px] h-[48px] border border-gray-200"
          />
        </div>
        <div className="grid tablet:mt-[56px] gap-y-[41px] grid-cols-12">
          <div className="col-span-12">
            <p className="text-2xl">อิเวนท์พิเศษ</p>
          </div>
          <div className="col-span-12">
            <Carousel data={HomePageData} />
          </div>
        </div>
        <div className="grid  tablet:mt-[159px] gap-x-1 tablet:gap-x-[25px] gap-y-[41px] grid-cols-12">
          <div className="flex justify-between col-span-12">
            <p className="text-2xl">อิเวนท์</p>
            <div className="w-[242px] border border-gray-700 rounded-md flex justify-center items-center h-[48px]">
              <p>ดูอีเวนท์ทั้งหมด</p>
            </div>
          </div>
          {_.map(
            HomePageData,
            (
              item: {
                event_id: number;
                event_name: string;
                date: string;
                description: string;
                image: string;
                tag: Array<string>;
              },
              i: any
            ) => (
              <div
                key={i}
                onClick={() => router.push(`/event/detail/${item.event_id}`)}
                className="flex col-span-12 cursor-pointer tablet:col-span-2 laptop:col-span-4"
              >
                <EventCard
                  tag={item.tag}
                  eventName={item.event_name}
                  time={item.date}
                  image={item.image}
                  description={item.description}
                />
              </div>
            )
          )}
        </div>
      </>
    </MainLayout>
  );
};

export default HomePage;
