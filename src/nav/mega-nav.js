import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import "./mega-nav.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom/index";
import getSiblings from "../reusable-functions/get-siblings";

const chevron = "https://next-sandbox.azureedge.net/icons/shared/chevron.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="" p={3}>
          {children}
        </div>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

export default function ScrollableTabsButtonAuto(props) {
  const [value, setValue] = useState(false);
  const matches = useMediaQuery("(min-width:768px)");
  const navFontWeight = props.text.navigation.fontWeight;
  const navLink = props.navigationText.link;
  const navLinkActive = props.navigationText.linkActive;

  const lowerNav = {
    background: !matches
      ? props.header.navLowerBackground.default
      : props.header.navLowerBackground.desktop,
    borderTop: props.header.navLowerBackground.border,
    borderBottom: props.header.navLowerBackground.border,
    fontWeight: props.text.navigation.font.fontWeight,
    color: props.text.navigation.link
  };

  const lowerNavButton = {
    fontWeight: navFontWeight,
    color: navLink
  };

  // const overlayColour = {
  //   background: props.header.navLowerBackground.active
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function hoverClick(e) {
    const link = e.target.closest("button");
    const linkSpan = link.innerHTML;
    const ignore = `<span class="MuiTab-wrapper">|</span>`;
    e.target.click();

    if (linkSpan === ignore) {
      link.disabled = true;
      link.firstChild.style.pointerEvents = "none";
    } else {
      var siblings = getSiblings(link);
      setTimeout(function (e) {
        // !small && !medium ? link.click() : null;
        link.style.background = props.header.navLowerBackground.active;
        link.style.color = navLinkActive;
        link.style.fontWeight = navFontWeight;
        const overlays = document.getElementsByClassName("overlay");
        let i;
        for (i = 0; i < overlays.length; i++) {
          overlays[i].style.height = small || medium ? "100vh" : "inherit";
        }
        for (i = 0; i < siblings.length; i++) {
          siblings[i].style.background = "inherit";
          siblings[i].style.color = navLink;
          siblings[i].style.fontWeight = navFontWeight;
        }
        const lastLink = siblings.length - 1;
        siblings[lastLink].style.color = props.text.navigation.linkClearance;
        const backgroundOverlay = document.getElementsByClassName(
          "background-overlay"
        )[0];
        backgroundOverlay.style.display = "block";
      }, 0);
    }
  }

  const Text = {
    color: props.text.default,
    fontWeight: props.text.fontWeightRegular
  };

  const Title = {
    color: props.text.default,
    fontWeight: props.text.fontMedium.fontWeight,
    fontSize: "0.875rem"
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const DefaultText = {
    color: props.text.default
  };

  const small = useMediaQuery("(max-width:767px)");
  const medium = useMediaQuery("(min-width:768px) and (max-width:1023px)");

  return (
    <div className="header-test">
      <AppBar position="static" color="default" style={lowerNav}>
        <Tabs
          value={value}
          onChange={handleChange}
          // indicatorColor="none"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          id="nav-buttons"
        >
          {props.megaNavContent.map((listItem, index) => (
            <Tab
              key={index}
              disableRipple={true}
              // style={lowerNav}
              onMouseOver={!small && !medium ? hoverClick : null}
              onClick={small || medium ? hoverClick : null}
              label={listItem.link}
              style={lowerNavButton}
              {...a11yProps({ index })}
              className={`mega-nav-button ${index}`}
            />
          ))}
        </Tabs>
      </AppBar>
      {props.megaNavContent.map((listItem, index) => (
        <TabPanel className="overlay" value={value} key={index} index={index}>
          <div className="section">
            <div className="department-content">
              <div style={DefaultText} className="category-content">
                {["1", "2", "3", "4"].map((index, titleCount) => (
                  <div key={index} className="navigation-nav">
                    {small || medium ? (
                      <Accordion
                        expanded={expanded === `panel${titleCount}`}
                        onChange={handleExpand(`panel${titleCount}`)}
                        square
                      >
                        <AccordionSummary
                          expandIcon={
                            <img className="" src={chevron} alt="chevron" />
                          }
                          aria-controls={`panel${titleCount}bh-content`}
                          id={`panel${titleCount}bh-header`}
                        >
                          <li style={Title} className="category-title">
                            {listItem.link} Title {titleCount}
                          </li>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul
                            key={listItem.id}
                            id={listItem.id}
                            className="navigation"
                          >
                            {[
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`,
                              `${listItem.link} link`
                            ].map((count, index) => (
                              <li key={index} style={Text} className="category">
                                <Link
                                  className={listItem.site}
                                  onClick={props.closeNav}
                                  to={`./plp`}
                                >
                                  {count}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <ul
                        key={listItem.id}
                        id={listItem.id}
                        className="navigation"
                      >
                        <li style={Title} className="category-title">
                          {listItem.link} Title {titleCount}
                        </li>
                        {[
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`,
                          `${listItem.link} link`
                        ].map((count, index) => (
                          <li key={index} style={Text} className="category">
                            <Link
                              className={listItem.site}
                              onClick={props.closeNav}
                              to={`./plp`}
                            >
                              {count}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <div className="missions"></div>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
