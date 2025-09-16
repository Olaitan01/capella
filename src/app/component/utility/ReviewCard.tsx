import React from "react";
import Image from "next/image";

type ReviewProps = {
  author: string;
  rating: number; // 1-5
  content: string;
  role?: string;
  imgUrl?: string;
};

const ReviewCard: React.FC<ReviewProps> = ({
  author,
  rating,
  content,
  role,
  imgUrl,
}) => {
  return (
    <div className="review">
      <div className="review-header">
        <span className="review-rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </span>
        <div className="review-content">{content}</div>
      </div>
      <div>
        <Image
          src={imgUrl}
          alt="author image"
          className="object-fill max-w-full"
        />{" "}
        // Assuming you might want to add an image in the future
        <span className="review-author">{author}</span>
        <span className="author-role">{role}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
