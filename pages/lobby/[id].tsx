import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiArrowBack } from "react-icons/bi";

const MyPhaser = dynamic(() => import("../../src/lobby-game"), {
  ssr: false,
});

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col h-screen bg-[#FFFFFF]">
      <div className="flex items-center justify-center m-8 text-2xl">
        <div className="w-full flex items-center cursor-pointer">
          <Link href="/">
            <BiArrowBack />
          </Link>
          <span className="mx-8"> ออกจากห้อง</span>
        </div>
        <span className="whitespace-nowrap">Lobby: {id}</span>
        <div className="w-full"></div>
      </div>
      <div className="w-full">
        <MyPhaser />
      </div>
      <div className="h-32 bg-[#C4C4C4] flex items-center justify-center">
        <div className="cursor-pointer bg-white rounded-[4px] p-2 mx-4">
          เลือกดู Broadcast
        </div>
        <div className="cursor-pointer bg-white rounded-[4px] p-2 ">
          เล่นเกม
        </div>
      </div>
    </div>
  );
};

export default Home;
