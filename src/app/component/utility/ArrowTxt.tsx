import React from "react";

type txtProps = {
  text: string;
};
function ArrowTxt({ text }: txtProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.118 15.782h12.665V3.117m-12.665 0 11.399 11.399"
            stroke="#6E00FF"
            stroke-width="3.483"
            stroke-miterlimit="20"
            stroke-linecap="square"
            opacity=".9"
          />
        </svg>
      </span>
      <span className="text-xs font-bold">{text}</span>
    </div>
  );
}

export default ArrowTxt;
