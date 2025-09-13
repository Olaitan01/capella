import React from "react";
import heroImg from "../assets/hero-img.jpg";
import Image from "next/image";
import ellipse1 from "../assets/logo (2).png";
import ellipse2 from "../assets/logo (3).png";
import ellipse3 from "../assets/logo (4).png";
import ellipse4 from "../assets/logo (5).png";
import ellipse5 from "../assets/Ellipse 5.png";
import ellipse6 from "../assets/logo (6).png";
import Facilities from "./component/Facilities";
import Solutions from "./component/Solutions";
import Listing from "./component/Listing";
import Value from "./component/Value";

function page() {
  return (
    <div>
      <div className="max-w-7xl relative mx-auto flex justify-center items-center">
        <div>
          <Image
            src={ellipse1}
            alt="ellipse1"
            className="max-w-full object-fill absolute top-1/2"
          />
          <Image
            src={ellipse2}
            alt="ellipse2"
            className="max-w-full object-fill absolute right-0 top-1/2 "
          />

          <Image
            src={ellipse3}
            alt="ellipse3"
            className="max-w-full object-fill absolute top-1/8 -left-1/10"
          />
          <Image
            src={ellipse4}
            alt="ellipse4"
            className="max-w-full object-fill absolute right-0"
          />
          <Image
            src={ellipse5}
            alt="ellipse5"
            className="max-w-full object-fill absolute -right-4 top-[32em] "
          />
          <Image
            src={ellipse6}
            alt="ellipse6"
            className="max-w-full object-fill absolute top-14 "
          />

          <div>
            <Image
              src={heroImg}
              alt="hero-image"
              className="max-w-fit object-fill w-[1500px] "
            />
          </div>
          <h1 className="hero-font absolute  leading-[1.5em] text-6xl top-0 right-1/4 w-[12em]  text-center">
            WE ARE A LEADING{" "}
            <b>
              <span className="text-[#000000] ">REAL ESTATE</span>{" "}
              <span className="text-[#6E00FF]">AGENCY</span>
            </b>
          </h1>
        </div>
      </div>
      <Facilities />
      <Solutions />
      <Listing />
      <Value />
    </div>
  );
}

export default page;
