import type { NextPage } from "next";
import router from "next/router";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const characters = ["/phaser-logo.png"];

const SelectCharacter: NextPage = () => {
  return (
    <div className="container bg-[#FFFFFF] flex flex-col items-center p-16">
      <span className="text-4xl">เลือกตัวละคร</span>
      <div className="pt-8 text-2xl">
        <label htmlFor="fname" className="m-2">
          ชื่อตัวละคร
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="h-[48px] bg-gray-400 focus:outline-none"
        />
      </div>
      <div className="flex items-center pt-8">
        <BiLeftArrowCircle className="text-4xl" />
        <div className="m-4 w-[128px] h-[128px]"></div>
        <BiRightArrowCircle className="text-4xl" />
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
