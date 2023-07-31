import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const QuickLinks = (props) => {
  const quickLinksBackground = {
    background: props.footer.quickLinks.background
  };

  const muted = {
    color: props.text.muted
  };
  const myAccount = props.footerContent[0].quickLinks[0].myAccount != null;
  const storeLocator =
    props.footerContent[0].quickLinks[0].storeLocator != null;
  const chat = props.footerContent[0].quickLinks[0].chat != null;
  const countrySelect =
    props.footerContent[0].quickLinks[0].countrySelect != null;
  const quickLinkLength = Object.keys(props.footerContent[0].quickLinks[0])
    .length;

  const medium = useMediaQuery("(min-width:768px)");

  const quickLinkWidth = {
    width:
      quickLinkLength > 3 && medium ? `calc(100% / ${quickLinkLength})` : null
  };

  const heading = {
    fontWeight: props.text.fontMedium.fontWeight
  };

  return (
    <div
      style={{ ...quickLinksBackground, ...props.hr }}
      className="footer-row"
    >
      <div className="quicklink section">
        {myAccount ? (
          <div style={quickLinkWidth} className="quicklink-item">
            <img
              className="quicklink"
              src={props.footerContent[0].quickLinks[0].myAccount.image}
            />
            <div className="content">
              <h4 style={heading}>
                {props.footerContent[0].quickLinks[0].myAccount.label}
              </h4>
              <span style={muted}>Sign in to your account</span>
            </div>
          </div>
        ) : null}
        {storeLocator ? (
          <div style={quickLinkWidth} className="quicklink-item">
            <img
              className="quicklink"
              src={props.footerContent[0].quickLinks[0].storeLocator.image}
            />
            <div className="content">
              <h4 style={heading}>
                {props.footerContent[0].quickLinks[0].storeLocator.label}
              </h4>
              <span style={muted}>Find your nearest store</span>
            </div>
          </div>
        ) : null}
        {chat ? (
          <div style={quickLinkWidth} className="quicklink-item">
            <img
              className="quicklink"
              src={props.footerContent[0].quickLinks[0].chat.image}
            />
            <div className="content">
              <h4 style={heading}>
                {props.footerContent[0].quickLinks[0].chat.label}
              </h4>
              <span style={muted}>For general enquiries</span>
            </div>
          </div>
        ) : null}
        {countrySelect ? (
          <div style={quickLinkWidth} className="quicklink-item">
            <img
              className="quicklink"
              src={props.footerContent[0].quickLinks[0].countrySelect.image}
            />
            <div className="content">
              <h4 style={heading}>
                {props.footerContent[0].quickLinks[0].countrySelect.label}
              </h4>
              <span style={muted}>Choose your shopping location</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
