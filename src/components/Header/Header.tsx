import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";
import Image from "next/image";
import logo from "../../../public/ModAura_logo_light.svg";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <>
      <header className="items-center justify-between w-full max-w-5xl text-sm">
        <div className="bottom-0 left-0 flex items-end justify-center w-full h-30 md:h-48 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex flex-col text-center">
            <p className="md:text-xl text-slate-800 dark:text-slate-100 font-outfit">
              {sitetagline}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
