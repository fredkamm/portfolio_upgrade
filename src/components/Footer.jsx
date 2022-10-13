import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="text-[#ccd6f6] bg-[#000000] flex justify-center items-center w-full h-full lg:hidden ">
        <a href="https://github.com/fredkamm" className="pr-5">
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/fred-kamm-370070244/"
          className="pr-5"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://meta.stackexchange.com/users/1258937/fredkamm"
          className="pr-5"
        >
          <HiOutlineMail size={35} />
        </a>
        <a
          href="https://docs.google.com/document/d/1cAlCPvA9sBlhrL2ygxDsZ28cbNDNHaPsCl9CnQm82sM/edit?mode=html"
          className="pr-5"
        >
          <BsFillPersonLinesFill size={35} />
        </a>
      </div>
      <div className="text-[#ccd6f6] bg-[#000000] flex justify-center items-center w-full h-full pt-2">
        <p>
          © 2022 Copyright:
          <a href="https://github.com/fredkamm/react_portfolio"> Fred Kamm</a>
        </p>
      </div>
    </footer>
  );
}
