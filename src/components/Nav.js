import { React, useState } from "react";
import { navLinks } from "../Constants";
import CodexWhite from "./../Assets/Img/codexWhite.png";
import close from "./../Assets/Img/close.svg";
import menu from "./../Assets/Img/menu.svg";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`w-full flex py-2 justify-between  items-center navbar`}>
      <img src={CodexWhite} alt="Codex-Logo" className="w-[85px] h-[55px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:text-[#00CAC8] duration-200 px-4 py-2 font-bold cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? `mr-0` : `mr-14`
            } `}
          >
            <LinkScroll to={nav.id} smooth={true}>
              <span className="block w-full h-full relative z-[2] ">
                {nav.title}
              </span>
            </LinkScroll>
          </li>
        ))}
        <li>
          <Link
            to={"Login"}
            className={`hover:text-[#00CAC8] duration-200 px-4 py-2 font-bold cursor-pointer text-[18px] mx-14`}
          >
            {" "}
            Hermes
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? `mr-0` : `mb-4`
                } `}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
