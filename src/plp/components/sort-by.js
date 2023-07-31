import React from "react";
export const SortBy = (props) => {
  const formButton = {
    background: props.form.default.background,
    border: props.form.default.border,
    borderRadius: props.form.default.radius
  };

  const SortOptions = [
    "Most Relevant",
    "Most Popular",
    "Alphabetical",
    "Price: Low - High",
    "Price: High - Low"
  ];

  return (
    <div className="sort-options">
      <label>Sort</label>
      <select name="colour" id="colour-select" style={formButton}>
        {SortOptions.map((sort, index) => (
          <option key={index} value={sort}>
            {sort}
          </option>
        ))}
      </select>
    </div>
  );
};
