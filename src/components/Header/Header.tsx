import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <>
    <section className="container p-4 mx-auto text-center">
      <Navigation />      
    </section>
      <header className="z-10 items-center justify-between w-full max-w-5xl text-sm ">
        <div className="bottom-0 left-0 flex items-end justify-center w-full  h-30 md:h-48 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-4 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            // href={siteurl}
            rel="noopener noreferrer"
          >
            <div className="flex flex-col text-center">
              <h1 className="text-2xl font-semibold uppercase lgtext-4xl text-sky-400/100 ">
                {sitename}
              </h1>
              <p className="m-2 text-xl font-xl text-slate-800 dark:text-slate-100">
                {sitetagline}
              </p>
            </div>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
