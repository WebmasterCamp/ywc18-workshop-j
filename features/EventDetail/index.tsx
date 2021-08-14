/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import _ from "lodash";
import { EventLayout } from "./components/Layout";
import { Modal } from "core/Modal";
import SelectCharacter from "features/Character/components/character";

export const EventDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

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
              <button
                className="h-[50px] flex items-center bg-pink-300 p-2"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <p className="text-2xl text-black">เข้าห้อง</p>
              </button>
              <Modal
                modalTitle=""
                isShow={showModal}
                onClose={() => {
                  setShowModal(false), setIndex(0);
                }}
              >
                <div className="mx-0 w-[500px] overflow-hidden">
                  <div
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    className="z-10 flex transition duration-700 ease-in whitespace-nowrap"
                  >
                    <div className="items-center h-[450px] justify-center inline-block w-full px-5">
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <p className="text-2xl">
                          ไปเจอเพื่อนทั้งที คุณคงต้องแต่งตัวซักหน่อยแล้วล่ะ{" "}
                        </p>
                        <p className="text-2xl">จริงไหม?</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => setIndex(1)}
                          className="rounded-[4px] p-2 mx-4 bg-[#FFDADA]"
                        >
                          Avatar
                        </button>
                      </div>
                    </div>
                    <div className="inline-block w-full h-full">
                      <SelectCharacter />
                    </div>
                  </div>
                </div>
              </Modal>
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
