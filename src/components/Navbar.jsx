import React from "react";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/" },
  { title: "contact us", link: "/" },
];

export default function () {
  const navLinkStyle =
    " hover:underline cursor-pointer hover:text-primary font-base";
  const isLoggedIn = false;
  return (
    <div className=" h-28 flex justify-around items-center border-b-[1px] border-slate-400">
      <img src={logo} alt="logo" width={100} height={100} />
      <div className="w-60 px-2 h-10 rounded flex justify-center items-center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>
      <ul
        className="flex
      gap-3 capitalize  "
      >
        {links.map((items, i) => {
          return (
            <li className={navLinkStyle} key={i}>
              <a href={items.links}>{items.title}</a>
            </li>
          );
        })}
        {!isLoggedIn ? <li className={navLinkStyle}>Login</li> : null}
      </ul>
      <div className="flex justify-center items-center text-2xl gap-3 ">
        {isLoggedIn ? (
          <>
            <CiHeart className="cursor-pointer" />
            <IoCart className="cursor-pointer" />
          </>
        ) : null}
      </div>
      <div className="bg-red-500 rounded-full overflow-hidden h-8 w-8 flex justify-center items-center text-base text-white cursor-pointer ">
        {isLoggedIn ? (
          <img
            src="https://avatars.githubusercontent.com/MuhammadAnasSaleem?v=4"
            alt=""
          />
        ) : (
          <FaRegUser />
        )}
      </div>
    </div>
  );
}
