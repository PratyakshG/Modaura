import React from "react";
import data from "../../../data/data";

function SubscribeForm() {
  const { newsletterheading, hideSubscribeForm } = data;

  return (
    <>
      {hideSubscribeForm === false ? (
        <section className="text-center w-full px-10">
          <form
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <div className="mt-2 flex-col flex lg:flex md:flex-row">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                  className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 mr-0 rounded-none p-2"
                />
                <button className="ml-0 bg-[#c49261] sm:w-auto border-[#c49261] dark:border-slate-100	rounded-none mt-2 md:mt-0	p-2 border-2 dark:text-white hover:bg-[#c48444]">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default SubscribeForm;
