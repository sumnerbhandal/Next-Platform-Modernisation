import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const BagSummary = (props) => {
  const minTablet = useMediaQuery("(min-width: 768px)");

  const container = {
    width: minTablet ? "calc(60% - 1rem)" : "100%",
    marginTop: minTablet ? "1.5rem" : "0.75rem",
    maxWidth: minTablet ? "25rem" : null
  };
  const h1 = {
    fontSize: "1rem",
    width: "100%",
    color: props.text.default
  };

  const orderRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.25rem"
  };

  return (
    <div style={container}>
      <h1 style={{ ...h1, ...props.MediumFont }}>
        Shopping Bag <span style={props.SubText}>(1)</span>
      </h1>
      <div style={orderRow}>
        <p style={props.MediumFont}>Order Value</p>
        <p style={props.MediumFont}>£25.00</p>
      </div>
      <p>Excluding UK Standard Delivery (Normally £3.99)</p>
      <p>Free Delivery To Store (Subject To Availability)</p>
    </div>
  );
};
