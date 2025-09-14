import React from "react";
import Card from "./Card";
import Image from "next/image";
import img1 from "../../assets/Rectangle 32.png";
import img2 from "../../assets/Rectangle 34.png";
import img3 from "../../assets/Rectangle 35.png";

function Value() {
  return (
    <div className="my-[6em] flex flex-row items-start justify-between mx-auto max-w-[93.75em] ">
      <div>
        <div className="relative">
          <div className="flex gap-4 items-center justify-center">
            <Image
              src={img1}
              alt="house image"
              className="max-w-full object-fill"
            />
            <Image
              src={img2}
              alt="house image"
              className="max-w-full object-fill"
            />
          </div>
          <div className="absolute -z-50 -bottom-8 -left-8">
            <Image
              src={img3}
              alt="house image"
              className="max-w-full object-fill"
            />
          </div>
        </div>
      </div>
      <div className="w-s[45%] ">
        <Card
          headerTxt="OUR VALUE"
          blackTxt="Unlocking Real Appraisal"
          purpleTxt="Services"
          txt="Our experts can provide valuable insights and assist you in identifying properties 

"
          widthStyle={58}
          txtStlyle={58}
        />{" "}
      </div>
    </div>
  );
}

export default Value;
