import React from "react";
import data from "../../../data/data";
import Image from "next/image";

function Footer() {
  const { copyrightText, socialIcons, socialIconsHeading } = data;

  return (
    <>
      <footer className="text-center text-slate-500">
        <div className="my-4 text-center">
          <ul className="flex flex-wrap justify-center lg:flex gap-4">
            {socialIcons.map((social, index) => (
              <li
                key={index}
                className="flex px-2 capitalize border-1 hover:border-b-white gap-4"
              >
                <a
                  target="_blank"
                  href={social.link}
                  className="flex items-center justify-center gap-2"
                >
                  <Image
                    src={social.icon}
                    alt={social.title}
                    width={30}
                    height={30}
                  />
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: copyrightText,
            }}
          ></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
