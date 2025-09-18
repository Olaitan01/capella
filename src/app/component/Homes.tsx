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
import exterior1 from "../../assets/Rectangle 41.png";
import exterior2 from "../../assets/exterior/alex-harwood-1rEaVLKeDME-unsplash.jpg";
import exterior3 from "../../assets/exterior/benjamin-elliott-bO4rGilIbNE-unsplash.jpg";
import exterior4 from "../../assets/exterior/hannah-smith-FtztlCw1-Nk-unsplash.jpg";
import exterior5 from "../../assets/exterior/ksenia-balandina-RCF5KSWb7Ms-unsplash.jpg";
import exterior6 from "../../assets/exterior/tanya-barrow-aXNfLipabuU-unsplash.jpg";
import interior1 from "../../assets/Rectangle 42.png";
import interior2 from "../../assets/interior/annie-spratt-7YkVu6SJyHo-unsplash.jpg";
import interior3 from "../../assets/interior/benjamin-elliott-7YVZYZeITc8-unsplash.jpg";
import interior4 from "../../assets/interior/kelly-sikkema-rW-I87aPY5Y-unsplash.jpg";
import interior5 from "../../assets/interior/marcel-strauss-WNoLnJo7tS8-unsplash.jpg";
import interior6 from "../../assets/interior/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import kitchen1 from "../../assets/Rectangle 43.png";
import kitchen2 from "../../assets/kitchen/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import kitchen3 from "../../assets/kitchen/karolina-grabowska-1RM9GLHV0UA-unsplash.jpg";
import kitchen4 from "../../assets/kitchen/marcin-jozwiak-gREquCUXQLI-unsplash.jpg";
import kitchen5 from "../../assets/kitchen/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import kitchen6 from "../../assets/kitchen/pawel-czerwinski-Jztmx9yqjBw-unsplash.jpg";

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
  {
    img: exterior2,
    location: "California",
    price: "$20,000",
    img2: interior2,
    interiorPrice: "$12,0000",
    img3: kitchen2,
    kitchenPrice: "$10,000",
  },
  {
    img: exterior3,
    location: "Texas",
    price: "$25,000",
    img2: interior3,
    interiorPrice: "$13,0000",
    img3: kitchen3,
    kitchenPrice: "$9,000",
  },
  {
    img: exterior4,
    location: "Florida",
    price: "$30,000",
    img2: interior4,
    interiorPrice: "$11,0000",
    img3: kitchen4,
    kitchenPrice: "$10,000",
  },
  {
    img: exterior5,
    location: "Washington",
    price: "$35,000",
    img2: interior4,
    interiorPrice: "$14,0000",
    img3: kitchen5,
    kitchenPrice: "$14,000",
  },
  {
    img: exterior6,
    location: "Nevada",
    price: "$40,000",
    img2: interior5,
    interiorPrice: "$15,0000",
    img3: kitchen2,
    kitchenPrice: "$18,000",
  },
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
      <div className="flex flex-col gap-4 xl:max-w-[70rem] items-center justify-center">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation]}
            className="mySwiper"
          >
            {exteriorProp.map(
              (
                {
                  img,
                  location,
                  price,
                  img2,
                  kitchenPrice,
                  interiorPrice,
                  img3,
                },
                index
              ) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={img}
                      alt="exterior image of a home"
                      className="max-w-full object-fit h-96 rounded-2xl"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-row justify-between items-center  p-4 rounded-lg text-white">
                      <span>{location}</span>
                      <div className="flex flex-row gap-2">
                        <button>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.9">
                              <g opacity="0.9">
                                <path
                                  d="M10.2851 17.7929L2.80569 10.3135L10.2851 2.83409"
                                  stroke="white"
                                  strokeWidth="2.90909"
                                  strokeMiterlimit="20"
                                  strokeLinecap="square"
                                />
                              </g>
                              <g opacity="0.9">
                                <path
                                  d="M17.7645 10.3135H4.30115"
                                  stroke="white"
                                  strokeWidth="2.90909"
                                  strokeMiterlimit="20"
                                  strokeLinecap="square"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>
                        <button>
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.9">
                              <g opacity="0.9">
                                <path
                                  d="M9.34237 17.7924L16.8218 10.313L9.34237 2.8336"
                                  stroke="white"
                                  strokeWidth="2.90909"
                                  strokeMiterlimit="20"
                                  strokeLinecap="square"
                                />
                              </g>
                              <g opacity="0.9">
                                <path
                                  d="M1.86298 10.313H15.3263"
                                  stroke="white"
                                  strokeWidth="2.90909"
                                  strokeMiterlimit="20"
                                  strokeLinecap="square"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <span>{price}</span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center text-white">
                    <div className="relative ">
                      <Image
                        src={img2}
                        alt="interior image of a home"
                        className="max-w-full object-fit"
                      />
                      <span className="absolute top-4 right-4 border-0 bg-[rgba(185,181,182,0.8)">
                        {interiorPrice}
                      </span>
                    </div>
                    <div className="relative">
                      <Image
                        src={img3}
                        alt="kitchen image of a home"
                        className="max-w-full object-fit"
                      />
                      <span className="absolute top-4 right-4 border-0 bg-[rgba(185,181,182,0.8)]">
                        {kitchenPrice}{" "}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Homes;
