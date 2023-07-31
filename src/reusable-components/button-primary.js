import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const ButtonPrimary = (props) => {
  const minTablet = useMediaQuery("(min-width: 768px)");
  const buttonPrimary = {
    background: props.form.buttonPrimary.background,
    border: props.form.buttonPrimary.border,
    borderRadius: props.form.buttonPrimary.radius,
    color: props.form.buttonPrimary.color,
    fontWeight: props.text.fontMedium.fontWeight,
    marginTop: "0.25rem",
    width: "100%",
    height: minTablet ? "2.25rem" : "2.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.0625rem",
    fontSize: "0.875rem"
  };

  return (
    <button className={`cta primary ${props.cssInject}`} style={buttonPrimary}>
      {props.buttonMessage}
    </button>
  );
};
