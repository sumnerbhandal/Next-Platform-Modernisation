import React from "react";
import ReviewStar from "../../reusable-components/reviewStar";

export const ProductSummaryCP = (props) => {
  const reviewCount = {
    marginLeft: "0.375rem"
  };
  const brandName = {
    textTransform: "uppercase",
    letterSpacing: "0.0625rem"
  };
  return (
    <div className="product-summary">
      <div className="flex-row title">
        <h1 style={{ ...props.MediumFont, ...brandName }}>
          {props.product.brand}
        </h1>
        <p style={props.MediumFont} className="price">
          {props.product.price}
        </p>
      </div>
      <div className="flex-row rating">
        <p className="sku">{props.product.title}</p>
        <div className="star-rating">
          <ReviewStar
            reviewStar={props.reviewStar}
            rating={props.product.rating}
          />
          <span style={reviewCount}>(1)</span>
        </div>
      </div>
    </div>
  );
};
