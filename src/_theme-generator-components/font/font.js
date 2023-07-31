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

const lightFont = [
  {
    label: "Family",
    state: "family",
    description: "The font family as used by systems.",
    background: ""
  },
  {
    label: "File Name",
    state: "filename",
    description: "The file name used by systems.",
    background: ""
  },
  {
    label: "Font Formats",
    state: "formats",
    description: "The different font formats that the font is using",
    background: ""
  },
  {
    label: "Font Weight",
    state: "weight",
    description: "The font weight for this font.",
    background: ""
  }
];

const defaultFont = [
  {
    label: "Default Font",
    state: "default",
    description: "The fallback fonts for the site.",
    background: ""
  }
];

const textGroups = [
  {
    label: "Light Font",
    component: "lightFont",
    fields: lightFont
  },
  {
    label: "Regular Font",
    component: "regularFont",
    fields: lightFont
  },
  {
    label: "Medium Font",
    component: "mediumFont",
    fields: lightFont
  },
  {
    label: "Italic Font",
    component: "italicFont",
    fields: lightFont
  },
  {
    label: "Default Font",
    component: "defaultFont",
    fields: defaultFont
  }
];

export function Fonts(props) {
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

export default Fonts;
