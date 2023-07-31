import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const BagSummary = (props) => {
  const minTablet = useMediaQuery("(min-width: 768px)");
  const minDesktop = useMediaQuery("(min-width: 1024px)");

  const container = {
    width: "100%",
    height: "2.75rem",
    display: "flex",
    alignItems: "center",
    padding: "2rem 0"
  };
  const orderRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.25rem"
  };

  const Item = {
    flexBasis: "50%"
  };

  return (
    <div style={container}>
      <p style={{ ...Item, ...props.MediumFont }}>Item</p>

      <p>Excluding UK Standard Delivery (Normally £3.99)</p>
      <p>Free Delivery To Store (Subject To Availability)</p>
    </div>
  );
};
