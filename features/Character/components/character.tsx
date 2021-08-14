import type { NextPage } from "next";
import router from "next/router";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import _ from "lodash";

const characters = [
  "/singer.png",
  "/visitor1.png",
  "/visitor2.png",
  "/visitor3.png",
  "/visitor4.png",
  "/visitor5.png",
  "/visitor6.png",
];

const SelectCharacter: NextPage = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
  }, [index]);

  const nextImage = () => {
    if (index <= Math.abs(characters.length - 1)) {
      setIndex((preState) => preState + 1);
    }
  };

  const previousImage = () => {
    if (index > 0) {
      setIndex((preState) => preState - 1);
    }
  };

  return (
    <div className="bg-[#FFFFFF] flex ml-[20px] flex-col items-center p-16">
      <span className="text-4xl">สร้างอวาต้าร์ของคุณ</span>
      <div className="flex pt-8 text-2xl">
        <p className="m-2">ชื่อ</p>
        <input
          type="text"
          id="fname"
          name="fname"
          className="h-[48px] bg-gray-400 focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between pt-8">
        <div className="flex items-center justify-start h-full mr-4 bg-grey-100">
          <button onClick={() => nextImage()}>
            <BiLeftArrowCircle className="text-4xl" />
          </button>
        </div>
        <div>
          <img src="/characters/image-5.png" />
        </div>
        <div className="flex items-center h-full ml-4 bg-grey-100">
          <button onClick={() => previousImage()}>
            <BiRightArrowCircle className="text-4xl" />
          </button>
        </div>
      </div>
      <div className="pt-8">
        <button
          onClick={() => router.push("/lobby/1")}
          className="rounded-[4px] p-2 mx-4 bg-[#FFDADA]"
        >
          เข้าห้อง
        </button>
      </div>
    </div>
  );
};

export default SelectCharacter;
