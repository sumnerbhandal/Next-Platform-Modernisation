import React from "react";
import ReviewStar from "../../reusable-components/reviewStar";

export const ProductSummary = (props) => {
  const reviewCount = {
    marginLeft: "0.375rem"
  };
  return (
    <div className="product-summary">
      <div className="flex-row title">
        <h1 style={props.MediumFont}>{props.product.title}</h1>
        <p style={props.MediumFont} className="price">
          {props.product.price}
        </p>
      </div>
      <div className="flex-row rating">
        <div className="star-rating">
          <ReviewStar
            reviewStar={props.reviewStar}
            rating={props.product.rating}
          />
          <span style={reviewCount}>(1)</span>
        </div>
        <p className="sku">{props.product.id}</p>
      </div>
    </div>
  );
};
