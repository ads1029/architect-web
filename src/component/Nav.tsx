import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-[120px] h-[400px] bg-base-100">
      <div className="flex flex-1">
        <ul className="menu flex flex-1 ">
          <li className="h-[80px]">
            <Link href="/">
              <a className="hover:text-gray-400 active:bg-white hover:bg-white">
                Homepage
              </a>
            </Link>
          </li>
          <li className="h-[80px]">
            <Link href="/projects">
              <a className="hover:text-gray-400 active:bg-white hover:bg-white">
                Projects
              </a>
            </Link>
          </li>
          <li tabIndex={0} className="h-[80px] ">
            <Link href="articles">
              <a className="hover:text-gray-400 active:bg-white hover:bg-white">
                Articles
              </a>
            </Link>
          </li>

          <li className="h-[80px]">
            <Link href="research">
              <a className="hover:text-gray-400 active:bg-white hover:bg-white">
                Research
              </a>
            </Link>
          </li>
          <li className="h-[80px]">
            <Link href="about">
              <a className="hover:text-gray-400 active:bg-white hover:bg-white">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
