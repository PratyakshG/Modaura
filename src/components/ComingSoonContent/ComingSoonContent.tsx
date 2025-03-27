import React from "react";
import data from "../../../data/data";

const { newsletterheading, hideSubscribeForm } = data;

function ComingSoonContent() {
  const { title } = data;
  return (
    <>
      <div className="relative flex flex-col place-items-center py-4 md:py-10">
        <h2 className="text-center font-heading text-[44px] lg:text-8xl lg:leading-[7rem] font-bold text-[#c49261]">
          Coming Soon!
        </h2>
        <h3 className="block text-slate-800 dark:text-slate-100  font-light text-sm leading-6">
          Stay tuned for live updates!
        </h3>
      </div>
    </>
  );
}

export default ComingSoonContent;
