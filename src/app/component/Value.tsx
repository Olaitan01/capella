import React from "react";
import Card from "./Card";
import Image from "next/image";
import img1 from "../../assets/Rectangle 32.png";
import img2 from "../../assets/Rectangle 34.png";
import img3 from "../../assets/Rectangle 35.png";

function Value() {
  return (
    <div className="xl:max-w-5xl flex flex-row items-start justify-between mx-auto 2xl:max-w-[93.75em] ">
      <div>
        <div className="relative ">
          <div className="flex gap-2 items-center justify-center xl:max-w-[30rem]">
            <Image
              src={img1}
              alt="house image"
              className="max-w-full object-fill xl:w-[27.0625rem]"
            />
            <Image
              src={img2}
              alt="house image"
              className="max-w-full object-fill xl:w-[13.3125rem] translate-y-8"
            />
          </div>
          <div className="absolute -z-50 -bottom-8 -left-8">
            <Image
              src={img3}
              alt="house image"
              className="max-w-full object-fill xl:w-[10.625rem]"
            />
          </div>
        </div>
      </div>
      <div className="xl:w-[25rem]">
        <Card
          headerTxt="OUR VALUE"
          blackTxt="Unlocking Real Appraisal"
          purpleTxt="Services"
          txt="Our experts can provide valuable insights and assist you in identifying properties 
"
        />{" "}
      </div>
    </div>
  );
}

export default Value;
