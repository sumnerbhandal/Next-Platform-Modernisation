import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const Chevron = () => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      class="bi bi-chevron-down"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

const checkbox = [
  {
    label: "Border Colour",
    state: "border",
    description: "The default input border colour."
  },
  {
    label: "Border Radius",
    state: "radius",
    description: "The border radius of popovers across the site."
  },
  {
    label: "Selected Border",
    state: "borderSelected",
    description: "The border colour when selected."
  },
  {
    label: "Selected Background",
    state: "backgroundSelected",
    description: "The background colour of the input when selected."
  },
  {
    label: "Selected Check Colour",
    state: "checkSelected",
    description: "The colour of the check inside the checkbox."
  }
];

const radio = [
  {
    label: "Border Colour",
    state: "border",
    description: "The default input border colour."
  },
  {
    label: "Border Radius",
    state: "radius",
    description: "The border radius of popovers across the site."
  },
  {
    label: "Selected Border",
    state: "borderSelected",
    description: "The border colour when selected."
  },
  {
    label: "Selected Background",
    state: "backgroundSelected",
    description: "The background colour of the input when selected."
  },
  {
    label: "Selected Inner Radio Colour",
    state: "innerSelected",
    description: "The colour of the indicator inside the checkbox."
  }
];

const accordionGroups = [
  {
    label: "Checkbox",
    component: "checkbox",
    fields: checkbox
  },
  {
    label: "Radio",
    component: "radio",
    fields: radio
  }
];

function Inputs(props) {
  function handleChange(event) {
    props.onChange(event.target.id + "&" + event.target.value);
  }
  return (
    <div>
      <h2>Inputs</h2>
      {accordionGroups.map((listItem) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<Chevron />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>{listItem.label}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form-section">
              {listItem.fields.map((value, index) => (
                <div key={index} className="form-field-container">
                  <div className="form-field">
                    <label for={`button${index}`}>{value.label}</label>
                    <input
                      id={`${listItem.component}&${
                        value.state.charAt(0).toLowerCase() +
                        value.state.slice(1)
                      }`}
                      type="text"
                      placeholder={
                        props[listItem.component][
                          value.state.charAt(0).toLowerCase() +
                            value.state.slice(1)
                        ]
                      }
                      onChange={handleChange}
                    />
                    <p className="input-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Inputs;
