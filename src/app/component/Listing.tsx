"use client";
import React, { useContext, useState } from "react";
import ArrowTxt from "./utility/ArrowTxt";
import house1 from "../../assets/Rectangle 30.png";
import house2 from "../../assets/Rectangle 30 (1).png";
import house3 from "../../assets/Rectangle 30 (2).png";
import house4 from "../../assets/berat-korkmaz-wOM7csas-rc-unsplash.jpg";
import house5 from "../../assets/erik-mclean-YgKJPkdyiJk-unsplash.jpg";
import house6 from "../../assets/javier-haro-lrOteGK3z40-unsplash.jpg";
import Image from "next/image";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Keyboard } from "swiper/modules";

const rentals = [
  {
    img: house1,
    name: "Forest Retreat",
    desc: "Are you looking to find your dream home or invest in a lucrative property.",
  },
  {
    img: house2,
    name: "Harmony",
    desc: "Our agents will guide you through the entire buying process, from property.",
  },
  {
    img: house3,
    name: "Woodland Retreat",
    desc: "When it comes to selling your property, our team is equipped with the expertise.",
  },
  {
    img: house4,
    name: "Harmony",
    desc: "Our agents will guide you through the entire buying process, from property ",
  },
  {
    img: house5,
    name: "Harmony",
    desc: "Our agents will guide you through the entire buying process, from property ",
  },
  {
    img: house6,
    name: "Harmony",
    desc: "Our agents will guide you through the entire buying process, from property ",
  },
];



function Listing() {
  return (
    <div className="listing py-[8em] pl-[2em]">
      <div className="text-center flex flex-col gap-4 justify-center items-center align-middle">
        <ArrowTxt text="DREAMER HOME" />
        <span className="inline-block 2xl:text-6xl xl:text-5xl 2xl:w-[25%] xl:w-[40%] leading-14 ">
          If You're In Need Of <span className="text-[#6E00FF]">Rental</span>{" "}
          Services
        </span>
      </div>
      <div className="flex flex-row mx-auto  items-center justify-center my-[3.5em]   ">
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
        >
          <div className="flex flex-row items-stretch ">
            {rentals.map(({ img, name, desc }, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer transition-transform duration-300 hover:shadow-lg rounded-lg p-4"
              >
                <div>
                  <div>
                    <Image
                      src={img}
                      alt="listed house image"
                      className="w-full h-[500px] object-fill rounded-lg "
                    />
                  </div>
                  <div>
                    <div className="flex flex-col py-4 font-light text-sm">
                      <span className="inline-block text-xl font-bold">
                        {name}
                      </span>
                      <span className="inline-block w-[60%] ">{desc}</span>
                    </div>

                    <Button
                      variant="text"
                      sx={{
                        display: "flex",
                        flexDirection: "flex-row",
                        gap: "1em",
                        alignItems: "center",
                        color: "#000000",
                        p: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Book Now{" "}
                      <span>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity=".9" clipPath="url(#a)">
                            <path
                              d="m11.404 17.365 6.91-6.91-6.91-6.911m-6.911 6.91h12.44"
                              stroke="#6E00FF"
                              strokeWidth="2.688"
                              strokeMiterlimit="20"
                              strokeLinecap="square"
                              opacity=".9"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path
                                fill="#fff"
                                d="M0 10.454 10.454 0l10.454 10.454-10.454 10.454z"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Listing;
