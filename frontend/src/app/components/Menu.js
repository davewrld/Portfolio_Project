"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  /** Create state **/
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute flex flex-col bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] p-4">
          <Link href="/" className="">Home</Link>
          <Link href="/shop" className="">Shop</Link>
          <Link href="/about" className="">About</Link>
          <Link href="/contact" className="">Contact</Link>
          <Link href="/logout" className="">Logout</Link>
          <Link href="/cart" className="">Cart (0)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
