import React from "react";
export const SizeSelect = (props) => {
  const sizeCount = props.product.size < 1;

  const formButton = {
    background: props.form.default.background,
    border: props.form.default.border,
    borderRadius: props.form.default.radius
  };

  return !sizeCount ? (
    <div className="product-options">
      <label>Size</label>
      <select name="colour" id="colour-select" style={formButton}>
        {props.product.size.map((sizeOption, index) => (
          <option value={sizeOption}>{sizeOption}</option>
        ))}
      </select>
    </div>
  ) : null;
};
