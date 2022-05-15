import React from "react";
// Icons
import { HiOutlineMail, HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

const Input = ({ type, placeholder, id, isReq, iconType }) => {
  const iconDictionary = {
    password: <AiOutlineLock />,
    email: <HiOutlineMail />,
    fullName: <HiOutlineUserCircle />,
  };
  return (
    <div className="relative mb-4">
      <div className="absolute left-0 z-10 top-2.5 text-lg">
        {iconDictionary[iconType]}
      </div>
      <input
        className="w-full px-6 py-2 leading-tight placeholder-transparent border-b appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        required={isReq}
      />
      <label
        className="absolute   -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
