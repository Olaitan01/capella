import React from "react";
import ArrowTxt from "./utility/ArrowTxt";
import Image from "next/image";
import exterior from "../../assets/Rectangle 41.png";
import interior from "../../assets/Rectangle 42.png";
import kitchen from "../../assets/Rectangle 43.png";

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
          <Image
            src={exterior}
            alt="exterior image of a home"
            className="max-w-full object-fit "
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-row justify-between items-center  p-4 rounded-lg text-white">
            <span>Strategic Location</span>
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
                        stroke-width="2.90909"
                        stroke-miterlimit="20"
                        stroke-linecap="square"
                      />
                    </g>
                    <g opacity="0.9">
                      <path
                        d="M17.7645 10.3135H4.30115"
                        stroke="white"
                        stroke-width="2.90909"
                        stroke-miterlimit="20"
                        stroke-linecap="square"
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
                        stroke-width="2.90909"
                        stroke-miterlimit="20"
                        stroke-linecap="square"
                      />
                    </g>
                    <g opacity="0.9">
                      <path
                        d="M1.86298 10.313H15.3263"
                        stroke="white"
                        stroke-width="2.90909"
                        stroke-miterlimit="20"
                        stroke-linecap="square"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <span>$15,000</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center text-white">
          <div className="relative ">
            <Image
              src={interior}
              alt="interior image of a home"
              className="max-w-full object-fit"
            />
            <span className="absolute top-4 right-4 border-0 bg-[rgba(185,181,182,0.8)">
              $10,000
            </span>
          </div>
          <div className="relative">
            <Image
              src={kitchen}
              alt="kitchen image of a home"
              className="max-w-full object-fit"
            />
            <span className="absolute top-4 right-4 border-0 bg-[rgba(185,181,182,0.8)]">
              $11,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
