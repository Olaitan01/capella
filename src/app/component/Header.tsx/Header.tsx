"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../assets/header-logo.png";

const navs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];


function Header() {
  const pathname = usePathname();
  
  return (
    <div className=" roundedEli flex justify-between items-center mx-auto w-[90%] py-4">
      <div className="flex flex-row gap-[20em]">
        <div>
          <Image
            src={logo}
            alt="capaella logo"
            className="max-w-full object-fill"
          />
        </div>{" "}
        <div className="flex flex-row gap-x-[3em] items-center justify-center">
          {navs.map(({ name, href }, index) => (
            <div key={index} className="flex flex-row gap-4 items-center ">
              <Link
                href={href}
                className={`${
                  pathname === href ? "font-extrabold" : "font-extralight"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 text-center">
        <button className="inline-block">Sign In</button>
        <button className="inline-block bg-[#000000] text-[#ffffff] rounded-4xl px-4 py-2">
          Get Started Free
        </button>
      </div>
    </div>
  );
}

export default Header;
