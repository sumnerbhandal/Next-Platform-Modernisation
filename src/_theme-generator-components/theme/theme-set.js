import React from "react";

function ThemeName(props) {
  function handleChange(event) {
    props.onChange(event.target.id + "&" + event.target.value);
  }
  return (
    <div className="section">
      <h2>Theme Name</h2>
      <div className="form-section">
        <div className="form-field-container">
          <div className="form-field">
            <label for="themeName&name">Name</label>
            <input
              id="themeName&name"
              type="text"
              placeholder={props.themeName.name}
              onChange={handleChange}
            />
            <p className="input-description">
              This is where you state the themes name. No spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeName;
