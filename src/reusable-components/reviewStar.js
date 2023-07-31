import React from "react";

function Star(props) {
  const starStyle = {
    marginRight: "0.0625rem",
    fill: props.fill,
    height: 12,
    width: 12
  };
  return (
    <svg
      style={starStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <path
        fillRule="evenodd"
        d="M6 0L3.9 3.9 0 4.644 2.7 7.5 2.1 12 6 9.9 9.9 12 9.3 7.5 12 4.644 8.1 3.9z"
      />
    </svg>
  );
}

function ReviewStar(props) {
  const value = props.rating;
  const inactiveStars = 5 - props.rating;
  var starListing = [];
  for (var i = 0; i < value; i++) {
    starListing.push(
      <Star key={`active ${i}`} fill={props.reviewStar.filled} />
    );
  }
  for (var j = 0; j < inactiveStars; j++) {
    starListing.push(
      <Star key={`inactive ${j}`} fill={props.reviewStar.unfilled} />
    );
  }
  const starContainer = {
    display: "flex",
    alignItems: "center"
  };
  return <div style={starContainer}>{value > 0 ? starListing : null}</div>;
}

export default ReviewStar;
