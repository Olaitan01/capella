import React from "react";
import Btn from "./utility/Btn";
import ArrowTxt from "./utility/ArrowTxt";

interface txtProp {
  txt: string;
  headerTxt: string;
  blackTxt: string;
  purpleTxt: string;
  widthStyle: number;
  txtStlyle: number;
}
function Card({
  txt,
  headerTxt,
  blackTxt,
  purpleTxt,
  widthStyle,
  txtStlyle,
}: txtProp) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <ArrowTxt text={headerTxt} />
        <div>
          <span className={`inline-block text-6xl w-[${widthStyle}%] `}>
            {blackTxt}{" "}
            <span className="text-[#6E00FF] font-bold inline-block">
              {purpleTxt}
            </span>
          </span>
        </div>

        <div>
          <div className="flex flex-row gap-4 items-start">
            <Btn />
            <span
              className={`text-xl font-light w-[${txtStlyle}%] inline-block `}
            >
              {txt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
