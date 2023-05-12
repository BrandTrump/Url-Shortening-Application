"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed w-full shadow-lg p-8">
      <div className="flex justify-between items-center h-full w-full">
        <Link href={"/"} className="font-bold text-2xl">
          Shortly
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex space-x-4">
            <li className="">
              <Link href={"#"}>Features</Link>
            </li>
            <li className="">
              <Link href={"#"}>Pricing</Link>
            </li>
            <li className="">
              <Link href={"#"}>Resources</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setToggle(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <div className="flex flex-col items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <ul className="mt-5 space-y-4">
                <li className="">
                  <Link href={"#"}>Features</Link>
                </li>
                <li className="">
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li className="">
                  <Link href={"#"}>Resources</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
