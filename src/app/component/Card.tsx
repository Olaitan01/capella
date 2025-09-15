import React from "react";
import Btn from "./utility/Btn";
import ArrowTxt from "./utility/ArrowTxt";

interface txtProp {
  txt: string;
  headerTxt: string;
  blackTxt: string;
  purpleTxt: string;
  
}
function Card({
  txt,
  headerTxt,
  blackTxt,
  purpleTxt,
 
}: txtProp) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <ArrowTxt text={headerTxt} />
        <div>
          <span className={`inline-block 2xl:text-6xl xl:text-5xl w-[24rem]`}>
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
              className={`2xl:text-xl xl:text-sm w-[15rem] font-light  inline-block `}
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
