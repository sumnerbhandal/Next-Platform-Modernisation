import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./status.css";

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

const buttonFields = [
  {
    label: "Border",
    state: "Border",
    description: "This is the colour and weight of the border on the left."
  },
  {
    label: "Background",
    state: "Background",
    description: "Add the full colour including the # symbol or rgb prefix."
  }
];

const accordionGroups = [
  {
    label: "Information",
    component: "informationStatus"
  },
  {
    label: "Warning",
    component: "warningStatus"
  },
  {
    label: "Error",
    component: "errorStatus"
  },
  {
    label: "Success",
    component: "successStatus"
  }
];

function Status(props) {
  function handleChange(event) {
    props.onChange(event.target.id + "&" + event.target.value);
  }
  return (
    <div>
      <h2>Status Messaging</h2>
      {accordionGroups.map((listItem) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<Chevron />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>{listItem.label}</h3>
            <div
              className="information-banner"
              style={props[listItem.component]}
            >
              {listItem.label} System Banner
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form-section">
              {buttonFields.map((value, index) => (
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
export default Status;
