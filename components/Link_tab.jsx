import React from "react";
import { BsLink45Deg } from "react-icons/bs";
const link_tab = ({ children, link = "/" }) => {
  return (
    <a
      className="flex text-2xl lg:text-3xl px-2 pt-2 lg:px-2 lg:pt-2 m-2 md:m-2 leading-snug text-white w-64  animate__animated animate__fadeIn animate__delay-1s border-b-2 border-blue-900 ease-in-out duration-300 hover:border-red-200 hover:text-pink-200"
      href={link}
    >
      <span style={{ color: "white", display: "inherit" }}>{children}</span>
      <BsLink45Deg className="pt-2 ml-auto " />
    </a>
  );
};

export default link_tab;
