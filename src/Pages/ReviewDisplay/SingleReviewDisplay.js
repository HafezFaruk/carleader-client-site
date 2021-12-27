import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

library.add(fullStar, emptyStar);

const SingleReviewDisplay = ({ review }) => {
  const { name, rating, comment } = review;
  return (
    <div className="col-lg-4">
      <div className="card mb-3  p-3">
        <h5>{name}</h5>
        <h6>Rating: {rating}</h6>
        <Rating
          readonly
          style={{ color: "goldenrod" }}
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
        />
        <p className="text-justify">{comment.slice(0, 105)}</p>
      </div>
    </div>
  );
};

export default SingleReviewDisplay;
