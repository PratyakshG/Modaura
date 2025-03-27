import React from "react";
import data from "../../../data/data";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const { copyrightText, socialIcons, socialIconsHeading } = data;

  return (
    <>
      <footer className="text-center text-gray-500">
        <div className="my-4 text-center flex gap-1 text-sm md:text-base">
          <span className="text-black capitalize">Follow us on</span>
          <a
            target="_blank"
            href="https://www.instagram.com/_modaura.in"
            className="flex items-center justify-center gap-1"
          >
            <FaInstagram className="text-xl text-[#c49261]" />
            Instagram
          </a>
        </div>
        <div className="text-base md:text-lg">
          <p>{copyrightText}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

{
  /* <ul className="flex flex-wrap justify-center lg:flex gap-4">
  <li className="flex px-2 capitalize border-1 hover:border-b-white gap-2"></li>
</ul>; */
}
