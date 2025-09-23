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
import Homes from "./component/Homes";
import Review from "./component/Review";

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
            className="max-w-full object-fill absolute xl:right-1/8 xl:top-1/2 2xl:right-0 2xl:top-1/2 "
          />

          <Image
            src={ellipse3}
            alt="ellipse3"
            className="max-w-full object-fill absolute   xl:bottom-[74.5%] 2xl:top-1/8  md:left-16 xl:left-1/14 "
          />
          <Image
            src={ellipse4}
            alt="ellipse4"
            className="max-w-full object-fill absolute xl:right-1/8 xl:top-1/8 2xl:right-0 "
          />
          <Image
            src={ellipse5}
            alt="ellipse5"
            className="max-w-full object-fill absolute xl:right-1/10 xl:bottom-[37%] "
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
              className="max-w-fit object-fill lg:w-[93.75em]  sm:w-[40em] w-[20em] h-[40em] "
            />
          </div>
          <h1 className="hero-font absolute  2xl:leading-[1.5em] 2xl:text-6xl xl:text-5xl top-0 2xl:right-1/4 w-[12em]  text-center flex flex-col justify-center items-center xl:right-1/4 leading-14 ">
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
      <Homes />
      <Review />
      
    </div>
  );
}

export default page;
