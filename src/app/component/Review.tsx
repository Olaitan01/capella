import react from "react";
import ReviewCard from "./utility/ReviewCard";
import Image from "next/image";
import client1 from "../../assets/Ellipse 13 (1).png";
import client2 from "../../assets/Ellipse 13.png";

const reviewImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const descProp = [
  {
    reviewDesc:
      "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience. From the moment I walked into their office, I felt welcomed and supported by their friendly team.",
    name: "Sarah M",
    clientType: "Property consultation",
    img: client1,
  },
  {
    reviewDesc:
      "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
    name: "Esther Howard",
    clientType: "Property consultation",
    img: client2,
  },
  {
    reviewDesc:
      "ABC Realty exceeded my expectations in every way. Their attention to detail and commitment to client satisfaction made selling my property a smooth and stress-free process.",
    name: "Michael Lee",
    clientType: "Property sale",
    img: client1,
  },
  {
    reviewDesc:
      "The team at ABC Realty was incredibly knowledgeable about the local market. They helped me find a rental that perfectly suited my needs and budget. Highly recommended!",
    name: "Jessica Brown",
    clientType: "Rental assistance",
    img: client2,
  },
  {
    reviewDesc:
      "I appreciated the transparency and honesty throughout my experience with ABC Realty. Their agents were always available to answer my questions and made me feel valued as a client.",
    name: "David Kim",
    clientType: "Investment property",
    img: client1,
  },
];
function Review() {
  return (
    <div className="mx-auto flex flex-row gap-6 items-center justify-between shrink-0 xl:w-[70rem]">
      <div className="flex flex-col gap-6  w-[30rem] h-[20rem]  ">
        <span className="xl:text-4xl  ">
          Our <span className="font-bold">Customers</span> Think We’re The Best
        </span>
        <div className="flex flex-row mt-4 items-center">
          <button className="w-[50px] h-[50px] bg-[#e8defb] rounded-full flex justify-center items-center">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_157_475)">
                <g opacity="0.9">
                  <g opacity="0.9">
                    <path
                      d="M9.86271 17.9112L3.11309 11.1616L9.86271 4.412"
                      stroke="#6E00FF"
                      strokeWidth="2.62525"
                      strokeMiterlimit="20"
                      strokeLinecap="square"
                    />
                  </g>
                  <g opacity="0.9">
                    <path
                      d="M16.6123 11.1616H4.46264"
                      stroke="#6E00FF"
                      strokeWidth="2.62525"
                      strokeMiterlimit="20"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_157_475">
                  <rect
                    width="14.4389"
                    height="14.4389"
                    fill="white"
                    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.9999 11.1626)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="w-[50px] h-[50px] bg-[#6E00FF] flex justify-center items-center rounded-full ml-4">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_157_465)">
                <rect
                  width="14.4389"
                  height="14.4389"
                  transform="translate(0.00062561 11.1626) rotate(-45)"
                  fill="#6E00FF"
                />
                <g opacity="0.9">
                  <g opacity="0.9">
                    <path
                      d="M11.1381 17.9112L17.8877 11.1616L11.1381 4.412"
                      stroke="white"
                      strokeWidth="2.62525"
                      strokeMiterlimit="20"
                      strokeLinecap="square"
                    />
                  </g>
                  <g opacity="0.9">
                    <path
                      d="M4.38846 11.1616H16.5382"
                      stroke="white"
                      strokeWidth="2.62525"
                      strokeMiterlimit="20"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_157_465">
                  <rect
                    width="14.4389"
                    height="14.4389"
                    fill="white"
                    transform="translate(0.00062561 11.1626) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative w-[50rem] overflow-visible">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${descProp.length * 22}rem`,
          }}
        >
          {descProp.map((review, index) => (
            <div
              key={index}
              className="w-[20rem] h-[20rem] p-4 border border-gray-300 rounded-lg shadow-lg mx-2 shrink-0"
            >
              <ReviewCard
                author={review.name}
                rating={5}
                content={review.reviewDesc}
                role={review.clientType}
                imgUrl={
                  typeof review.img === "string" ? review.img : review.img.src
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
