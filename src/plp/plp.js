import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { Link } from "react-router-dom/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper";
import { SortBy } from "./components/sort-by";
import ReviewStar from "../reusable-components/reviewStar";
import "swiper/swiper.scss";
import "./plp.scss";
SwiperCore.use([Navigation, Pagination, Thumbs]);

function Plp(props) {
  const [expanded, setExpanded] = React.useState(false);
  const accordionToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [thumbsSwiper0, setThumbsSwiper0] = useState();
  const [thumbsSwiper1, setThumbsSwiper1] = useState();
  const [thumbsSwiper2, setThumbsSwiper2] = useState();
  const [thumbsSwiper3, setThumbsSwiper3] = useState();
  const [thumbsSwiper4, setThumbsSwiper4] = useState();
  const [thumbsSwiper5, setThumbsSwiper5] = useState();
  const [thumbsSwiper6, setThumbsSwiper6] = useState();
  const [thumbsSwiper7, setThumbsSwiper7] = useState();
  const [thumbsSwiper8, setThumbsSwiper8] = useState();
  const [thumbsSwiper9, setThumbsSwiper9] = useState();
  const testVariable = [
    thumbsSwiper0,
    thumbsSwiper1,
    thumbsSwiper2,
    thumbsSwiper3,
    thumbsSwiper4,
    thumbsSwiper5,
    thumbsSwiper6,
    thumbsSwiper7,
    thumbsSwiper8,
    thumbsSwiper9
  ];
  const chevron = "https://next-sandbox.azureedge.net/icons/shared/chevron.svg";
  const small = useMediaQuery("(max-width:767px)");
  const medium = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const large = useMediaQuery("(min-width:1024px) and (max-width:1279px)");
  const xlarge = useMediaQuery("(min-width:1280px)");

  const MediumText = {
    color: props.text.default,
    fontWeight: props.text.fontMedium.fontWeight
  };

  const BoldText = {
    color: props.text.default,
    fontWeight: props.text.fontBold.fontWeight
  };

  const MutedText = {
    color: props.text.muted
  };

  const BorderBottomLight = {
    borderBottom: props.plp.facetDivider
  };

  const DefaultText = {
    color: props.text.default
  };

  const FiltersMobile = {
    borderBottom: props.utilities.dividerDark
  };

  const DarkBorderRight = {
    borderRight: props.utilities.dividerDark
  };

  const ChipRadius = {
    borderRadius: props.utilities.chipBorderRadius
  };

  const displayBrand =
    props.utilities.summaryAlignment === "center" ? "flex" : "none";

  const BrandName = {
    display: displayBrand,
    textTransform: "uppercase",
    letterSpacing: "0.0625rem"
  };

  const CasingChange = {
    textTransform: props.plp.facetTextTransform,
    letterSpacing: props.plp.facetLetterSpacing
  };

  const summaryTextAlign =
    props.utilities.summaryAlignment === "center" ? "center" : "left";
  const summaryFlexAlign =
    props.utilities.summaryAlignment === "center" ? "center" : "flex-start";
  const summaryFlexBasis =
    props.utilities.summaryAlignment === "center" ? "100%" : null;

  const summaryAlignment = {
    justifyContent: summaryFlexAlign,
    textAlign: summaryTextAlign,
    flexBasis: summaryFlexBasis
  };

  const MobileFilters = (
    <div style={FiltersMobile} className="sort-container-mobile">
      <div style={DarkBorderRight} className="sort-mobile-button">
        <span style={MediumText}> Sort </span>
      </div>
      <div className="sort-mobile-button">
        <span style={MediumText}> Filter </span>
      </div>
    </div>
  );

  // Temp input test
  document.documentElement.style.setProperty(
    "--checkbox-border",
    `${props.input.checkbox.border}`
  );
  document.documentElement.style.setProperty(
    "--checkbox-borderRadius",
    `${props.input.checkbox.radius}`
  );
  document.documentElement.style.setProperty(
    "--checkbox-borderSelected",
    `${props.input.checkbox.borderSelected}`
  );
  document.documentElement.style.setProperty(
    "--checkbox-backgroundSelected",
    `${props.input.checkbox.backgroundSelected}`
  );
  document.documentElement.style.setProperty(
    "--checkbox-checkSelected",
    `${props.input.checkbox.checkSelected}`
  );

  document.documentElement.style.setProperty(
    "--radio-border",
    `${props.input.radio.border}`
  );
  document.documentElement.style.setProperty(
    "--radio-borderRadius",
    `${props.input.radio.radius}`
  );
  document.documentElement.style.setProperty(
    "--radio-borderSelected",
    `${props.input.radio.borderSelected}`
  );
  document.documentElement.style.setProperty(
    "--radio-backgroundSelected",
    `${props.input.radio.backgroundSelected}`
  );
  document.documentElement.style.setProperty(
    "--radio-innerSelected",
    `${props.input.radio.innerSelected}`
  );
  document.documentElement.style.setProperty(
    "--active-border",
    `${props.utilities.activeBorder}`
  );
  document.documentElement.style.setProperty(
    "--active-border-radius",
    `${props.utilities.chipBorderRadius}`
  );

  const DesktopFlters = (
    <div className="filters">
      <div className="w-100">
        <h3 style={{ ...MediumText, ...CasingChange }}>123 Results</h3>
        <hr style={BorderBottomLight} />
        <ul style={BorderBottomLight}>
          {["New In", "In Stock", "Back In Stock"].map((listItem, index) => (
            <li key={index} className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id={`checkbox1 ${listItem}`}
                className="filter custom-control-input"
                name={listItem}
                aria-checked="false"
                aria-labelledby={`checkbox1 ${listItem} - label`}
              />
              <label
                className={`custom-control-label d-block`}
                htmlFor={`checkbox1 ${listItem}`}
                id={`checkbox1 ${listItem} - label`}
              >
                {listItem} <span style={MutedText}>(100)</span>
              </label>
            </li>
          ))}
        </ul>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={accordionToggle("panel1")}
          square
          style={BorderBottomLight}
        >
          <AccordionSummary
            expandIcon={<img className="" src={chevron} alt="Chevron" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p style={{ ...MediumText, ...CasingChange }}>Filter Group 1</p>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <div className="column">
                {["4", "5", "6", "7", "8", "9"].map((listItem, index) => (
                  <li key={index} className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="filter custom-control-input"
                      id={`checkbox${listItem}`}
                      name="inStock"
                    />
                    <label
                      className={`custom-control-label d-block`}
                      htmlFor={`checkbox${listItem}`}
                    >
                      Filter {listItem}
                      <span style={MutedText}> (100)</span>
                    </label>
                  </li>
                ))}
              </div>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={accordionToggle("panel2")}
          square
          style={BorderBottomLight}
        >
          <AccordionSummary
            expandIcon={<img className="" src={chevron} alt="Chevron" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p style={{ ...MediumText, ...CasingChange }}>
              Radio Button Example
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <div className="column">
                {["1", "2", "3"].map((listItem, index) => (
                  <li
                    key={index}
                    className="custom-control custom-checkbox radio"
                  >
                    <input
                      type="radio"
                      className="filter custom-control-input"
                      id={`checkbox${listItem}`}
                      name="inStock"
                    />
                    <label
                      className={`custom-control-label radio d-block`}
                      htmlFor={`checkbox${listItem}`}
                    >
                      Radio Button {listItem}
                      <span style={MutedText}> (100)</span>
                    </label>
                  </li>
                ))}
              </div>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );

  const [transitionSpeed, setTransitionSpeed] = useState(300);

  function chipHover(e) {
    if (large || xlarge) {
      setTransitionSpeed(0);
      e.target.click();
    }
    // console.log(
    //   "this should simulate clicking on the chip and updating the transition speed of the preview to 0"
    // );
  }

  function chipHoverOff(e) {
    if (large || xlarge) {
      setTransitionSpeed(300);
    }
    // console.log("this should reset the transition speed to 300");
  }

  return (
    <div style={DefaultText} className="plp">
      {small || medium ? MobileFilters : null}
      <div className="section">
        {large || xlarge ? DesktopFlters : null}
        <div className="results-container">
          <div className="results-header">
            <h1 style={{ ...MediumText, ...CasingChange }}>
              {props.title} PLP Example
              {small || medium ? <span style={MutedText}> (100)</span> : null}
            </h1>
            <SortBy text={props.text} form={props.form} />
          </div>
          <div id="container" className="plp-container">
            {props.products.map((value, index) => (
              <div key={index} className="parent">
                <Link
                  to={`../pdp/${value.title
                    .toLowerCase()
                    .replace(/ |'|_/g, "-")}_pid-${index}`}
                  id={index}
                  key={index}
                >
                  <div className="child">
                    <Swiper
                      thumbs={{
                        swiper: testVariable[index]
                      }}
                      speed={transitionSpeed}
                      spaceBetween={0}
                      slidesPerView={1}
                      initialSlide={0}
                      centeredSlides={true}
                      loop={true}
                      updateOnWindowResize={true}
                      observer="true"
                      className="plp-search-image"
                    >
                      {value.pdpImages.map((image, index) => (
                        <SwiperSlide key={`image-${index}`} id={index}>
                          <img src={image} alt={value.title} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Link>
                <div className="product-summary">
                  <Link
                    to={`../pdp/${value.title
                      .toLowerCase()
                      .replace(/ |'|_/g, "-")}_pid-${index}`}
                    id={index}
                    key={index}
                  >
                    <div className="product-details">
                      <p
                        style={{
                          ...BoldText,
                          ...summaryAlignment,
                          ...BrandName
                        }}
                        className={`plpItem `}
                      >
                        {value.brand}
                      </p>
                      <p
                        style={summaryAlignment}
                        className={`plpItem title product-title`}
                      >
                        {value.title}
                      </p>
                      <div style={summaryAlignment} className={`price-rating`}>
                        <p
                          style={{ ...BoldText, ...summaryAlignment }}
                          className={`plpItem product-price`}
                        >
                          {value.price}
                        </p>
                        <div className="star-rating">
                          <ReviewStar
                            reviewStar={props.reviewStar}
                            rating={value.rating}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className={`collapse-container`}>
                    <Swiper
                      slidesPerView={9}
                      onSwiper={eval(`setThumbsSwiper${index}`)}
                      watchSlidesVisibility
                      watchSlidesProgress
                      className={`colour-chip`}
                      style={summaryAlignment}
                    >
                      {/* {props.chipImages.map((value, index) => ( */}
                      {value.pdpImages.map((value, index) => (
                        <SwiperSlide
                          style={ChipRadius}
                          key={`thumbs-${index}`}
                          id={index}
                        >
                          <a
                            className="chip-link"
                            onMouseEnter={chipHover}
                            onMouseLeave={chipHoverOff}
                            href="#"
                          >
                            <img
                              className="colour-chip-image"
                              src={value}
                              alt=""
                            />
                          </a>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plp;
