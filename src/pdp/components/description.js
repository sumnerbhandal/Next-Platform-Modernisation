import React from "react";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const Description = (props) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const BlockLink = {
    color: props.text.hyperlink,
    fontWeight: props.text.fontMedium.fontWeight,
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    height: "2.5rem"
  };
  return (
    <div className="product-description">
      <Collapse in={checked} collapsedHeight={54}>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien
          arcu, lacinia sollicitudin vehicula ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam sapien arcu, lacinia sollicitudin vehicula
          ipsum dolor sit amet, consectetur adipiscing elit...
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien
          arcu, lacinia sollicitudin vehicula ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam sapien arcu, lacinia sollicitudin vehicula
          ipsum dolor sit amet, consectetur adipiscing elit...
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien
          arcu, lacinia sollicitudin vehicula ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam sapien arcu, lacinia sollicitudin vehicula
          ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </Collapse>
      <FormControlLabel
        style={BlockLink}
        control={<Switch checked={checked} onChange={handleChange} />}
        label={
          checked ? (
            <p role="button" className="">
              - Hide full description
            </p>
          ) : (
            <p role="button" className="">
              + Show full description
            </p>
          )
        }
      />
    </div>
  );
};
