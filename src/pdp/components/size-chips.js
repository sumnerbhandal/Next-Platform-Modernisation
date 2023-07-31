import React, { useState } from "react";
import getSiblings from "../../reusable-functions/get-siblings";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export const SizeChips = (props) => {
  const large = useMediaQuery("(min-width:1024px) and (max-width:1279px)");
  const fitTypeCount = props.feature < 1;
  const formButton = {
    background: props.form.default.background,
    border: props.form.default.border,
    borderRadius: props.form.default.radius,
    fontWeight: props.text.fontRegular.fontWeight
  };
  const formButtonSelected = {
    background: props.form.selectedBlock.background,
    border: props.form.selectedBlock.border,
    borderRadius: props.form.selectedBlock.radius,
    fontWeight: props.text.fontMedium.fontWeight
  };

  function activeChip(e) {
    const button = e.target.closest("button");
    Object.assign(button.style, formButtonSelected);
    button.style.fontWeight = props.text.fontWeightMedium;
    var siblings = getSiblings(button);
    var i;
    for (i = 0; i < siblings.length; i++) {
      Object.assign(siblings[i].style, formButton);
    }
  }
  const [listOption, setListOption] = useState();
  const [restOfOptions, setRestOfOptions] = useState();
  const [runOnce, setRunOnce] = useState(true);
  function getOptions() {
    if (runOnce) {
      setListOption(props.feature);
      setRunOnce(false);
      setRestOfOptions(props.feature.slice(1, props.feature.length));
    }
    return;
  }
  getOptions();

  return !fitTypeCount ? (
    <div className={`product-options chips ${props.cssInject}`}>
      <label>{props.label}</label>
      <div className="fit-container-scroll">
        <button onClick={activeChip} style={formButtonSelected}>
          {props.feature[0]}
        </button>
        {restOfOptions === undefined
          ? null
          : restOfOptions.length < 0
          ? null
          : restOfOptions.map((fitType, index) => (
              <button onClick={activeChip} style={formButton}>
                {fitType}
              </button>
            ))}
      </div>
    </div>
  ) : null;
};
