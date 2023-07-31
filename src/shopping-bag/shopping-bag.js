import React, { useState } from "react";
import "./shopping-bag.css";
import { ButtonPrimary } from "../reusable-components/button-primary";
import { BagSummary } from "./components/bag-summary";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Bag(props) {
  const [runOnce, setRunOnce] = useState(false);

  const minTablet = useMediaQuery("(min-width: 768px)");
  const minDesktop = useMediaQuery("(min-width: 768px)");

  const DefaultText = {
    color: props.text.default
  };

  function backToTop() {
    if (!runOnce) {
      window.scrollTo(0, 0);
      setRunOnce(true);
    } else return;
  }
  backToTop();

  const MediumFont = {
    fontWeight: props.text.fontMedium.fontWeight
  };
  const BoldFont = {
    fontWeight: props.text.fontBold.fontWeight
  };

  const SubText = {
    color: props.text.muted
  };

  const BagSummarySection = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: minDesktop ? 0 : minTablet ? "2rem" : 0
  };

  const CheckoutButtonContainer = {
    width: minTablet ? "calc(40% - 1rem)" : "100%",
    marginTop: minTablet ? "3.375rem" : "0.75rem",
    maxWidth: minTablet ? "18.75rem" : null
  };

  return (
    <div style={DefaultText}>
      <div className="section pdp ">
        <div style={BagSummarySection} className="bag-content">
          <BagSummary
            text={props.text}
            form={props.form}
            SubText={SubText}
            MediumFont={MediumFont}
          />
          <div style={CheckoutButtonContainer}>
            <ButtonPrimary
              form={props.form}
              text={props.text}
              buttonMessage={"Checkout"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
