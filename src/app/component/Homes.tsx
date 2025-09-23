"use client";
import React, { useRef, useState, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation } from "swiper/modules";
import ArrowTxt from "./utility/ArrowTxt";
import Image from "next/image";
import exterior1 from "../../assets/exterior/tanya-barrow-aXNfLipabuU-unsplash.jpg";
import exterior2 from "../../assets/exterior/alex-harwood-1rEaVLKeDME-unsplash.jpg";
import exterior3 from "../../assets/exterior/benjamin-elliott-bO4rGilIbNE-unsplash.jpg";
import exterior4 from "../../assets/exterior/hannah-smith-FtztlCw1-Nk-unsplash.jpg";
import exterior5 from "../../assets/exterior/ksenia-balandina-RCF5KSWb7Ms-unsplash.jpg";
import exterior6 from "../../assets/exterior/tanya-barrow-aXNfLipabuU-unsplash.jpg";
import interior1 from "../../assets/Rectangle 42.png";
import interior2 from "../../assets/interior/lukas-dTjRSFZE9wY-unsplash.jpg";
import interior3 from "../../assets/interior/collov-home-design-Pf-GjKfYGO4-unsplash.jpg";
import interior4 from "../../assets/interior/maria-orlova-b37mDyPzdJM-unsplash.jpg";
import interior5 from "../../assets/interior/mykola-kolya-korzh-8jo4TvHtVKM-unsplash.jpg";
import interior6 from "../../assets/interior/jake-goossen-MM7nD2FjI3U-unsplash.jpg";
import kitchen1 from "../../assets/Rectangle 43.png";
import kitchen2 from "../../assets/kitchen/blake-woolwine-SikS1z8od-U-unsplash.jpg";
import kitchen3 from "../../assets/kitchen/clay-banks-lQ-m8d0Ww_0-unsplash.jpg";
import kitchen4 from "../../assets/kitchen/jivitharsan-suresh-fTyeVfSFbw4-unsplash.jpg";
import kitchen5 from "../../assets/kitchen/lotus-design-n-print-I_QC1JICzA0-unsplash.jpg";
import kitchen6 from "../../assets/kitchen/lotus-design-n-print-VaGdhK-kI1c-unsplash.jpg";

const exteriorProp = [
  {
    img: exterior1,
    location: "New York",
    price: "$15,000",
    img2: interior1,
    interiorPrice: "$10,000",
    img3: kitchen1,
    kitchenPrice: "$11,000",
  },
  // {
  //   img: exterior2,
  //   location: "California",
  //   price: "$20,000",
  //   img2: interior2,
  //   interiorPrice: "$12,0000",
  //   img3: kitchen2,
  //   kitchenPrice: "$10,000",
  // },
  // {
  //   img: exterior3,
  //   location: "Texas",
  //   price: "$25,000",
  //   img2: interior3,
  //   interiorPrice: "$13,0000",
  //   img3: kitchen3,
  //   kitchenPrice: "$9,000",
  // },
  // {
  //   img: exterior4,
  //   location: "Florida",
  //   price: "$30,000",
  //   img2: interior4,
  //   interiorPrice: "$11,0000",
  //   img3: kitchen4,
  //   kitchenPrice: "$10,000",
  // },
  // {
  //   img: exterior5,
  //   location: "Washington",
  //   price: "$35,000",
  //   img2: interior5,
  //   interiorPrice: "$14,0000",
  //   img3: kitchen5,
  //   kitchenPrice: "$14,000",
  // },
  // {
  //   img: exterior6,
  //   location: "Nevada",
  //   price: "$40,000",
  //   img2: interior6,
  //   interiorPrice: "$15,0000",
  //   img3: kitchen6,
  //   kitchenPrice: "$18,000",
  // },
];
function Homes() {
  return (
    <div className=" py-[8em] flex flex-col justify-center items-center gap-4">
      <div className="text-center flex flex-col gap-4 justify-center items-center align-middle">
        <ArrowTxt text="OUR BEST HOMES" />
        <span className="inline-block 2xl:text-6xl xl:text-5xl 2xl:w-[25%] xl:w-[60%] leading-14 ">
          Find your <span className="text-[#6E00FF]">Dream</span> Home Here
        </span>
      </div>
      <div className="flex flex-col gap-4 xl:max-w-[70rem] items-center justify-center ">
        {exteriorProp.map((property, index) => (
          <div key={index}>
            <div className="flex flex-col gap-4 justify-center items-center relative">
              <Image
                src={property.img}
                alt={`Exterior ${index + 1}`}
                className="rounded-t-lg xl:w-[80em] 2xl:w-[60em] h-[30em] object-cover rounded-2xl"
              />
              <div className=" bottom-0 items-center absolute w-[100%]">
                <div className="flex flex-row justify-between items-center  text-[#ffffff] text-xl bg-opacity-50 px-4 py-2 rounded-b-lg">
                  <span className="">{property.location}</span>
                  <div className="flex flex-row gap-2 mt-2 items-center">
                    <button>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity=".9" clip-path="url(#a)">
                          <path
                            d="m9.285 18.793-7.48-7.48 7.48-7.479m7.48 7.48H3.3"
                            stroke="#fff"
                            strokeWidth="2.909"
                            strokeMiterlimit="20"
                            strokeLinecap="square"
                            opacity=".9"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path
                              fill="#fff"
                              d="M22.627 11.314 11.313 0 0 11.314l11.314 11.314z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity=".9" clip-path="url(#a)">
                          <path
                            d="m12.342 18.792 7.48-7.479-7.48-7.48m-7.479 7.48h13.463"
                            stroke="#fff"
                            strokeWidth="2.909"
                            strokeMiterlimit="20"
                            strokeLinecap="square"
                            opacity=".9"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path
                              fill="#fff"
                              d="M0 11.314 11.314 0l11.313 11.314-11.313 11.314z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <span className=" inline-block">{property.price}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center mt-4">
              <div className="relative ">
                <Image
                  src={property.img2}
                  alt={`Interior ${index + 1}`}
                  className="object-contain max-w-full rounded-2xl"
                />
                <span className="inline-block absolute top-1/12 right-1/12 rounded bg-[#00000080] px-2 py-1 text-white">
                  {property.interiorPrice}
                </span>
              </div>
              <div className="relative">
                <Image
                  src={property.img3}
                  alt={`Kitchen ${index + 1}`}
                  className="object-contain max-w-full rounded-2xl"
                />
                <span className="inline-block absolute top-1/12 right-1/12 rounded bg-[#00000080] px-2 py-1 text-white">
                  {property.kitchenPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homes;
