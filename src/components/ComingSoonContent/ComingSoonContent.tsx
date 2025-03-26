import React from "react";
import data from "../../../data/data";

const { newsletterheading, hideSubscribeForm } = data;

function ComingSoonContent() {
  const { title } = data;
  return (
    <>
      <div className="relative flex flex-col place-items-center py-10">
        <h2 className="text-center font-heading text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold">
          <span className="text-[#c49261]">{title}</span>
        </h2>
        <h3 className="block text-slate-800 dark:text-slate-100  font-light text-sm leading-6">
          {newsletterheading}
        </h3>
      </div>
    </>
  );
}

export default ComingSoonContent;
