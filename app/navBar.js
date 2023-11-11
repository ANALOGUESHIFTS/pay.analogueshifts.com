"use client";
import { useState } from "react";
import Link from "next/link";
export default function NavBar() {
  const [opacity, setOpacity] = useState(1);
  const [transformOne, setTransformOne] = useState(0);
  const [transformTwo, setTransformTwo] = useState(0);
  const [position, setPosition] = useState(-500);

  const toggleMenu = () => {
    if (position !== 0) {
      setPosition(0);
      setOpacity(0);
      setTransformOne(-30);
      setTransformTwo(30);
    } else {
      setPosition(-500);
      setOpacity(1);
      setTransformOne(0);
      setTransformTwo(0);
    }
  };

  return (
    <nav className="w-full">
      <div
        style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
        className="w-[calc(100%-12px)] h-[50px] backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed rounded-full px-7 flex justify-between items-center"
      >
        <div className="flex gap-4 max-[850px]:hidden">
          <Link href="#">
            <p className="text-sm text-black font-semibold">Payment</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Options</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Support</p>
          </Link>
        </div>
        <p className="text-sm text-black font-semibold">ANALOGUESHIFTS</p>
        <div className="flex gap-4 max-[850px]:hidden">
          <Link href="#">
            <p className="text-sm text-black font-semibold">Details</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Feedback</p>
          </Link>
          <Link href="#">
            <p className="text-sm text-black font-semibold">Queries</p>
          </Link>
        </div>
        <div
          onClick={toggleMenu}
          className="hidden max-[850px]:flex flex-col w-5 h-3 cursor-pointer justify-between"
        >
          <div
            style={{ transform: `rotate(${transformOne}deg)` }}
            className="w-full origin-right duration-300 h-0.5 bg-black/80 rounded"
          ></div>
          <div
            style={{ opacity: opacity }}
            className="w-full h-0.5 duration-300 bg-black/80 rounded"
          ></div>
          <div
            style={{ transform: `rotate(${transformTwo}deg)` }}
            className="w-full h-0.5 origin-right bg-black/80 duration-300 rounded"
          ></div>
        </div>
      </div>
      <div
        style={{ left: `${position}px` }}
        className="w-[50%] h-screen static hidden duration-300 max-[850px]:fixed bg-white pt-6 pl-5 max-[850px]:flex flex-col gap-5"
      >
        <Link href="#">
          <p className="text-sm text-black font-semibold">Payment</p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black font-semibold">Options</p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black font-semibold">Support</p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black font-semibold">Details</p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black font-semibold">Feedback</p>
        </Link>
        <Link href="#">
          <p className="text-sm text-black font-semibold">Queries</p>
        </Link>
      </div>
    </nav>
  );
}