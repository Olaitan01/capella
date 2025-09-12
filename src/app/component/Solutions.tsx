import React from "react";
import Btn from "./utility/Btn";
import Image from "next/image";
import img from "../../assets/Union@2x.png";
import ellipse1 from "../../assets/Ellipse 10.png";
import ellipse2 from "../../assets/Ellipse 9.png";
import ellipse3 from "../../assets/4+.png";
import ArrowTxt from "./utility/ArrowTxt";

function Solutions() {
  return (
    <div className="flex flex-row solutions mx-auto my-[6em] max-w-[93.75em] ">
      <div className="flex flex-col gap-4">
        <ArrowTxt text="Solutions" />
        <div>
          <span className="inline-block text-6xl w-[70%] ">
            We Assist Buyers On Finding Their{" "}
            <span className="text-[#6E00FF] font-bold">Dream Homes.</span>
          </span>
        </div>

        <div>
          <div className="flex flex-row gap-4 items-start">
            <Btn />
            <span className="text-xl font-light w-[48%] ">
              Our agents will guide you through the entire buying process from
              property
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={img}
            alt="image of a fmaily moving into a house"
            className="max-w-full object-fill"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Solutions;
