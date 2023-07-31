import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./text.css";

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

const fontColourOptions = [
  {
    label: "Default",
    state: "Default",
    description: "The primary text colour to be used across the site.",
    style: "color",
    background: ""
  },
  {
    label: "Disabled",
    state: "Disabled",
    description: "The colour used for disabled text.",
    style: "color",
    background: ""
  },
  {
    label: "Reversed",
    state: "Reversed",
    description:
      "The colour used for text on an opposite background colour to default.",
    style: "color",
    background: "Default"
  },
  {
    label: "Error",
    state: "Error",
    description: "The text colour used to indicate an error.",
    style: "color",
    background: ""
  },
  {
    label: "Hyperlink",
    state: "Hyperlink",
    description:
      "The text colour used for all inline and block links across the site.",
    style: "color",
    background: ""
  },
  {
    label: "Muted",
    state: "Muted",
    description:
      "The text colour used for secondary content, used to compliment the default text colour.",
    style: "color",
    background: ""
  },
  {
    label: "Strong",
    state: "Strong",
    description:
      "For text that you want to stand out more (often the same as default).",
    style: "color",
    background: ""
  },
  {
    label: "Success",
    state: "Success",
    description: "The colour used to indicate success.",
    style: "color",
    background: ""
  },
  {
    label: "Warning",
    state: "Warning",
    description: "To be used to indicate a warning.",
    style: "color",
    background: ""
  }
];

const textGroups = [
  {
    label: "Text Colours",
    component: "text",
    fields: fontColourOptions
  }
];

export function TextColour(props) {
  function handleChange(event) {
    props.onChange(event.target.id + "&" + event.target.value);
  }
  return (
    <div>
      {textGroups.map((listItem) => (
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
              {eval(listItem.fields).map((value, index) => (
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

export default TextColour;
