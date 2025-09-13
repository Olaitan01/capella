import React from "react";
import Btn from "./utility/Btn";
import Image from "next/image";
import img from "../../assets/Union@2x.png";
import ellipse1 from "../../assets/Ellipse 10.png";
import ellipse2 from "../../assets/Ellipse 9.png";
import ellipse3 from "../../assets/4+.png";
import ArrowTxt from "./utility/ArrowTxt";
import Card from "./Card";



function Solutions() {
  return (
    <div className="flex flex-row solutions mx-auto my-[6em] max-w-[93.75em] ">
      <Card
        headerTxt="SOLUTIONS"
        blackTxt="We Assist Buyers In Finding Their"
        purpleTxt="Dream Homes"
        txt="Our agents will guide you through the entire buying process, from property 
    
"
        widthStyle={60}
        txtStlyle={48}
      />

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
      {}
    </div>
  );
}

export default Solutions;
