import React, { useState } from "react";
import { Copyright } from "./components/copyright";
import { Group } from "./components/group";
import { QuickLinks } from "./components/quicklink";
import { Social } from "./components/social";
import "./footer.scss";

function Footer(props) {
  const DefaultText = {
    color: props.text.default
  };
  const hr = {
    borderTop: props.utilities.divider
  };

  return (
    <div className="footer" style={DefaultText}>
      <Social
        footer={props.footer}
        footerContent={props.footerContent}
        text={props.text}
        hr={hr}
      />
      <QuickLinks
        footer={props.footer}
        footerContent={props.footerContent}
        text={props.text}
        hr={hr}
      />
      <Group
        footer={props.footer}
        footerContent={props.footerContent}
        text={props.text}
        hr={hr}
        style={hr}
      />
      <Copyright
        footer={props.footer}
        footerContent={props.footerContent}
        text={props.text}
        hr={hr}
      />
    </div>
  );
}

export default Footer;
