import React from "react";
import ReviewStar from "../../reusable-components/reviewStar";
const chevron = "https://next-sandbox.azureedge.net/icons/shared/chevron.svg";

export const ReviewPreview = (props) => {
  const reviewCount = {
    marginLeft: "0.375rem"
  };
  return (
    <div className="product-summary stars">
      <div className="flex-row">
        <div>
          <h2 style={{ ...props.MediumFont, ...props.CasingChange }}>
            Reviews
          </h2>
          <div className="star-rating">
            <ReviewStar
              reviewStar={props.reviewStar}
              rating={props.product.rating}
            />
            <span style={reviewCount}>(1)</span>
          </div>
        </div>
        <img className="chevron-right" src={chevron} alt="Chevron Right" />
      </div>
    </div>
  );
};
