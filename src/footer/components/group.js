import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

export const Group = (props) => {
  const mainLinksBackground = {
    background: props.footer.mainLinks.background
  };

  const groupText = {
    color: props.text.default
  };
  const heading = {
    color: props.text.default,
    fontWeight: props.text.fontMedium.fontWeight
  };
  const groupLink = {
    color: props.text.default,
    textDecoration: "none",
    fontWeight: props.text.fontRegular.fontWeight
  };
  const small = useMediaQuery("(max-width:767px)");

  return (
    <div style={{ ...mainLinksBackground, ...props.hr }} className="footer-row">
      <div className="section group" style={groupText}>
        {small ? (
          props.footerContent[0].group.map((listItem, index) => (
            <Accordion key={index} style={props.hr}>
              <AccordionSummary
                expandIcon={
                  <img src="https://xcdn.next.co.uk/content/platmod/icons/shared/chevron.svg" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 style={heading}>{listItem.heading}</h3>
              </AccordionSummary>
              <AccordionDetails>
                {listItem.links.map((value, index) => (
                  <a style={groupLink} key={index}>
                    {value}
                  </a>
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <div className="group-section">
            {props.footerContent[0].group.map((listItem, index) => (
              <div key={index} className="group-column">
                <h3 style={heading}>{listItem.heading}</h3>

                {listItem.links.map((value, index) => (
                  <a style={groupLink} key={index}>
                    {value}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
