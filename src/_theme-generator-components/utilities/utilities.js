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

const utilities = [
  {
    label: "Divider Border Colour",
    state: "divider",
    description: "Colour of the default dividers across the site."
  },
  {
    label: "Dark Divider Border Colour",
    state: "dividerDark",
    description: "Colour of the dark dividers across the site."
  },
  {
    label: "Background Accent Colour",
    state: "backgroundAccent",
    description: "Accent colour for background sections across the site."
  },
  {
    label: "Active Border Colour",
    state: "activeBorder",
    description:
      "This colour is used on colour chips on desktop PLP and thumbnails on PDP."
  },
  {
    label: "Colour Chip Border Radius",
    state: "chipBorderRadius",
    description: "This radius is used on colour chips on desktop PLP."
  },
  {
    label: "Product Summary Alignment",
    state: "summaryAlignment",
    description: "This applies to the PLP list items and style with ribbons."
  }
];

const popover = [
  {
    label: "Border Colour",
    state: "border",
    description: "The border colour of popovers across the site."
  },
  {
    label: "Border Radius",
    state: "radius",
    description: "The border radius of popovers across the site."
  }
];

const drawer = [
  {
    label: "Header Background",
    state: "headerBackground",
    description: "The colour of the header background."
  },
  {
    label: "Border Radius",
    state: "headerBorder",
    description: "The bottom border of the header."
  }
];

const reviewStar = [
  {
    label: "Filled Colour",
    state: "filled",
    description: "The colour of the filled rating stars"
  },
  {
    label: "Unfilled Colour",
    state: "unfilled",
    description: "The colour of the unfilled rating stars"
  }
];

const accordionGroups = [
  {
    label: "Popover",
    component: "popover",
    fields: popover
  },
  {
    label: "Utilities",
    component: "utilities",
    fields: utilities
  },
  {
    label: "Drawer",
    component: "drawer",
    fields: drawer
  },
  {
    label: "Review Stars",
    component: "reviewStar",
    fields: reviewStar
  }
];

function UtiltiesTheme(props) {
  function handleChange(event) {
    props.onChange(event.target.id + "&" + event.target.value);
  }
  return (
    <div>
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
export default UtiltiesTheme;
