import React from "react";
import Image from "next/image";
import logo from "../../assets/Group 58.png";

const navColumns = [
  {
    title: "Products",
    links: ["Features", "Pricing", "Integrations"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Customer", "Brand"],
  },

  {
    title: "Support",
    links: ["Community", "Contract", "DPAs", "Terms of Service"],
  },
];

const socialIcons = [
  { name: "Twitter", url: "#", icon: "🐦" },
  { name: "Facebook", url: "#", icon: "📘" },
  { name: "LinkedIn", url: "#", icon: "🔗" },
];

function Footer() {
  return (
    <footer className="bg-[#000000] py-8 text-[#ffffff] px-4 md:px-8 lg:px-16">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <div className="mb-4">
            {/* Logo */}
            <Image src={logo} alt="logo" className="max-w-fit object-fill" />
          </div>
          <div className="mb-4 text-gray-600 w-[60%] text-xs font-light">
            Our experts can provide valuable insights and assist you in
            identifying properties.{" "}
          </div>
          <div className="flex gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.url}
                aria-label={icon.name}
                className="text-2xl"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-2 flex justify-between  w-full md:w-auto xl:w-[30%] border-2 border-amber-400">
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-2 font-semibold">{col.title}</h4>
              <ul className="list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link} className="mb-2">
                    <a href="#" className=" hover:text-gray-800 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <hr className="my-8 border-gray-200" />
      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <a
            href="#"
            className=" mr-4 transition"
          >
            Terms & Conditions
          </a>
          <a href="#" >
            Privacy Policy
          </a>
        </div>
        <div >
          &copy; {new Date().getFullYear()} Capella. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
