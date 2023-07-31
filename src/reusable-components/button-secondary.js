import React from "react";

export const ButtonSecondary = (props) => {
  const buttonSecondary = {
    background: props.form.buttonSecondary.background,
    border: props.form.buttonSecondary.border,
    borderRadius: props.form.buttonSecondary.radius,
    color: props.form.buttonSecondary.color,
    fontWeight: props.text.fontMedium.fontWeight
  };
  return (
    <button
      className={`cta secondary ${props.cssInject}`}
      style={buttonSecondary}
    >
      {props.buttonMessage}
    </button>
  );
};
