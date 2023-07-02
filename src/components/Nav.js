import { React, useState } from "react";
import { navLinks } from "../Constants";
import CodexWhite from "./../Assets/Img/codexWhite.png";
import { Link } from "react-router-dom";
import close from "./../Assets/Img/close.svg";
import menu from "./../Assets/Img/menu.svg";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={CodexWhite} alt="Codex-Logo" className="w-[60px] h-[35px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            } `}
          >
            <Link to={`#${nav.id}`}>{nav.title}</Link>
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
                <Link to={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
