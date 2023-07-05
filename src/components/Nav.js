import { React, useState } from "react";
import { navLinks } from "../Constants";
import CodexWhite from "./../Assets/Img/codexWhite.png";
import { Link } from "react-router-dom";
import close from "./../Assets/Img/close.svg";
import menu from "./../Assets/Img/menu.svg";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-2 justify-between items-center navbar">
      <img src={CodexWhite} alt="Codex-Logo" className="w-[75px] h-[45px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:text-white hover:bg-[#1A9389] text-[#1A9389] transition-colors border-none border-0 px-4 py-2 rounded-md border-[#1A9389] font-bold cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? `mr-0` : `mr-14`
            } `}
          >
            <Link to={nav.title === "Hermes" ? "/login" : `#${nav.id}`}>
              <span className="block w-full h-full relative">{nav.title}</span>
            </Link>
          </li>
        ))}
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
              >
                <Link to={index === 1 ? "/login" : `#${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
