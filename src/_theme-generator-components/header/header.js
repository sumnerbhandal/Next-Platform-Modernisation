import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./header.css";

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

const navUpperBackground = [
  {
    label: "Background Colour",
    state: "Default",
    description:
      "The colour of the upper half of the header, where the logo and search bar is."
  },
  {
    label: "Text Colour",
    state: "Color",
    description:
      "The colour of the text for the upper half of the header, my account, quickshop etc."
  }
];

const searchBar = [
  {
    label: "Border Radius",
    state: "Radius",
    description: "The border radius of the search bar."
  },
  {
    label: "Text Colour",
    state: "Color",
    description: "The text colour of the search bar."
  },
  {
    label: "Background Colour",
    state: "Background",
    description: "The background colour of the search bar."
  },
  {
    label: "Border Style",
    state: "Border",
    description: "The border style of the search bar."
  }
];

const shoppingBag = [
  {
    label: "Text Colour",
    state: "Color",
    description: "The colour of the number inside of the shopping bag icon."
  }
];

const navLowerBackground = [
  {
    label: "Background Colour Mobile",
    state: "Default",
    description: "The background colour of the mega nav on mobile."
  },
  {
    label: "Background Colour Desktop",
    state: "Desktop",
    description: "The background colour of the mega nav on desktop."
  },
  {
    label: "Active Link Background Colour",
    state: "Active",
    description:
      "The background colour of a primary nav link when you hover on desktop or select on mobile."
  },
  {
    label: "Border Style",
    state: "Border",
    description:
      "Determine whether the navigation requires a border, usually applied to the top and bottom of the nav."
  }
];

const navOptions = [
  {
    label: "Default Link Colour",
    state: "link",
    description: "The initial/default link colour shown.",
    style: "color",
    background: "linkActive"
  },
  {
    label: "Active Link Colour",
    state: "linkActive",
    description:
      "The link colour in the primary nav when you hover on desktop or select on mobile.",
    style: "color",
    background: "link"
  },
  {
    label: "Clearance Link Colour",
    state: "linkClearance",
    description: "The colour of the clearance link",
    style: "color",
    background: "linkActive"
  }
];

const navFont = [
  {
    label: "Font Weight",
    state: "FontWeight",
    description: "The base font weight to be used in the primary navigation.",
    background: ""
  },
  {
    label: "Font Family",
    state: "fontFamily",
    description: "The base font family to be used in the primary navigation.",
    background: ""
  }
];

const accordionGroups = [
  {
    label: "Upper Navigation",
    component: "headerUpperBackground",
    fields: navUpperBackground
  },
  {
    label: "Desktop Search Bar",
    component: "searchBar",
    fields: searchBar
  },
  {
    label: "Shopping Bag Count",
    component: "shoppingBag",
    fields: shoppingBag
  },
  {
    label: "Lower Navigation Backgrounds (Primary Nav)",
    component: "headerLowerBackground",
    fields: navLowerBackground
  },
  {
    label: "Lower Navigation Text (Primary Nav)",
    component: "navigationText",
    fields: navOptions
  },
  {
    label: "Lower Navigation Font",
    component: "navigationTextFont",
    fields: navFont
  }
];

function HeaderTheme(props) {
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
export default HeaderTheme;
