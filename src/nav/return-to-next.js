import React, { useState } from "react";
import { CloseIcon } from "../iconography/icons";
// import "./return-to-next.scss";
import { Link } from "react-router-dom/index";
import { nextLogo } from "../data-feed/logos";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ReturnToNext(props) {
  const [show, setShow] = useState(true);

  const xsmall = useMediaQuery("(max-width:374px)");
  function hideBanner(e) {
    setShow(false);
    props.removeBanner();
  }
  const container = {
    // background: props.header.navUpperBackground.default,
    background: "#000",
    display: show ? "flex" : "none",
    alignItems: "center",
    height: xsmall ? "44px" : "36px",
    // color: props.header.navUpperBackground.color
    color: "#fff"
    // color: props.buttonPrimary.color
  };

  const svgColour = {
    fill: props.buttonPrimary.color
  };

  return (
    <div style={container}>
      <div className="section return-banner">
        <p>
          Want the full <span className="next-logo">{nextLogo}</span>{" "}
          experience? <Link to="./?next_">Click here</Link>
        </p>
        <div className="close-icon" style={svgColour} onClick={hideBanner}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}
