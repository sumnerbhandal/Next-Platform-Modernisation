import React from "react";
export const ColourSelect = (props) => {
  const colourCount = props.product.colour < 1;

  const formButton = {
    background: props.form.default.background,
    border: props.form.default.border,
    borderRadius: props.form.default.radius
  };

  return !colourCount ? (
    <div className={`product-options ${props.cssInject}`}>
      <label>Colour</label>
      <select name="colour" id="colour-select" style={formButton}>
        {props.product.colour.map((colourOption, index) => (
          <option key={index} value={colourOption}>
            {colourOption}
          </option>
        ))}
      </select>
    </div>
  ) : null;
};
