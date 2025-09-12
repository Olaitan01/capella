"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../assets/header-logo.png";
import Button from "@mui/material/Button";
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
        <Button
          variant="text"
          sx={{
            textTransform: "capitalize",
            fontSize: "1rem",
            color: "#000000",
          }}
        >
          Sign In
        </Button>

        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            background: "#000000",
            textTransform: "capitalize",
            fontSize: "1rem",
            borderRadius: "4rem",
          }}
        >
          Get Started Free
        </Button>
      </div>
    </div>
  );
}

export default Header;
