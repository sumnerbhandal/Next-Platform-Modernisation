import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export const Copyright = (props) => {
  const hasCopyRight = props.footerContent != "";

  const copyrightBackground = {
    background: props.footer.copyright.background
  };

  const copyrightText = {
    color: props.text.muted
  };

  const hyperlink = {
    color: props.text.hyperlink,
    textDecoration: "underline",
    cursor: "pointer"
  };
  const medium = useMediaQuery("(min-width:768px)");

  return hasCopyRight ? (
    <div style={copyrightBackground} className="footer-row">
      <hr style={props.hr} />
      <div className="section switcher">
        <a style={hyperlink}>View {!medium ? "desktop" : "mobile"} site</a>
      </div>
      <div className="section copyright" style={copyrightText}>
        {props.footerContent[0].copyrightMessage}
      </div>
    </div>
  ) : null;
};
