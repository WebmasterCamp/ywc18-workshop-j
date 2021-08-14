import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/icons/logo.png";
import { FacebookIcon } from "./Icons/Facebook";

export const Footer: NextPage = () => {
  return (
    <div className="h-[76px] bg-purple-300 px-16 flex items-center">
      <div>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="ml-4 text-white">© Maomun 2021. All rights reserved.</div>
      <div className="flex-grow flex items-center justify-end">
        <a
          href="https://www.facebook.com/Maomun-%E0%B9%80%E0%B8%A1%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%99-100235789046125"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.facebook.com/Maomun-%E0%B9%80%E0%B8%A1%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%99-100235789046125"
          target="_blank"
          rel="noreferrer"
        >
          <span className="ml-4 text-white">เกี่ยวกับเรา</span>
        </a>
      </div>
    </div>
  );
};
