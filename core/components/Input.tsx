import React from "react";
import { SearchIcon } from "./Icons/Search";

interface InputProps {
  onChange: any;
  value: string | number;
  className?: string;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const { value, onChange, className, placeholder } = props;
  return (
    <div
      className={`flex ${className} bg-white flex justify-center items-center w-[482px]`}
    >
      <div className="flex items-center justify-center pl-2 mt-3 w-14">
        <SearchIcon stoke="#AAAAAA" className="block tablet:hidden" />
      </div>

      <input
        onChange={onChange}
        className="w-full focus:outline-none"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
