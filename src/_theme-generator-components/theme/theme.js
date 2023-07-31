import React from "react";
import "./theme.css";

export default function Theme(props) {
  const styleObj = {
    lineHeight: 1.6,
    fontFamily: "monospace",
    fontSize: "15px"
  };
  const spacerOne = "  ";
  const spacerTwo = "    ";
  const spacerThree = "      ";
  const spacerFour = "        ";
  return (
    <pre id="Theme-Preview">
      export const <span id="Name">{props.themeName.name}</span> = &#x7b;
      <br />
      {spacerOne}
      <span id="Fonts">'font': &#x7b;</span>
      <br />
      {spacerTwo}'light': &#x7b;
      {["family", "filename", "formats", "weight"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.lightFont[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'regular': &#x7b;
      {["family", "filename", "formats", "weight"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.regularFont[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'medium': &#x7b;
      {["family", "filename", "formats", "weight"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.mediumFont[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'italic': &#x7b;
      {["family", "filename", "formats", "weight"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.italicFont[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {["default"].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.defaultFont[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Forms">'form': &#x7b;</span>
      <br />
      {["buttonPrimary", "buttonSecondary", "buttonTertiary"].map(
        (buttonName) => (
          <div style={styleObj}>
            {spacerTwo}'{buttonName}': &#x7b;
            {["border", "background", "color", "borderRadius"].map(
              (styleName) => (
                <div style={styleObj}>
                  {spacerThree}'{styleName.replace("borderRadius", "radius")}':{" "}
                  '{props[buttonName][styleName]}',
                </div>
              )
            )}
            {spacerTwo}&#x7d;,
          </div>
        )
      )}
      {spacerTwo}'buttonMegaNav': &#x7b;
      <br />
      {spacerThree}'border': '{props.buttonSecondary.border}',
      <br />
      {spacerThree}'background': '{props.buttonSecondary.background}',
      <br />
      {spacerThree}'color': '{props.buttonSecondary.color}',
      <br />
      {/* {spacerThree}'radius': '{props.buttonMegaNav.borderRadius}', */}
      {spacerThree}'borderRadius': '1.125rem',
      <br />
      {spacerTwo}&#x7d;,
      {[
        "default",
        "disabled",
        "focusActive",
        "invalid",
        "selectedAccent",
        "selectedBlock",
        "success"
      ].map((formName) => (
        <div style={styleObj}>
          {spacerTwo}'{formName}': &#x7b;
          {["border", "background", "borderRadius"].map((styleName) => (
            <div style={styleObj}>
              {spacerThree}'{styleName.replace("borderRadius", "radius")}': '
              {
                props[
                  "form" + formName.charAt(0).toUpperCase() + formName.slice(1)
                ][styleName]
              }
              ',
            </div>
          ))}
          {spacerTwo}&#x7d;,
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span>'input': &#x7b;</span>
      <br />
      {spacerTwo}'checkbox': &#x7b;
      {[
        "border",
        "radius",
        "borderSelected",
        "backgroundSelected",
        "checkSelected"
      ].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.checkbox[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'radio': &#x7b;
      {[
        "border",
        "radius",
        "borderSelected",
        "backgroundSelected",
        "innerSelected"
      ].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.radio[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;
      <br />
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Text Colour">'text': &#x7b;</span>
      {[
        "default",
        "disabled",
        "reversed",
        "error",
        "hyperlink",
        "muted",
        "strong",
        "success",
        "warning"
      ].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.text[listItem]}',
        </div>
      ))}
      {/* {spacerTwo}'fontRegular': &#x7b;
      {["fontWeight", "fontFamily"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.fontRegular[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br /> */}
      {spacerTwo}'navigation': &#x7b;
      {["link", "linkActive", "linkClearance"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.navigationText[listItem]}',
        </div>
      ))}
      {spacerThree}'font': &#x7b;
      {["fontWeight", "fontFamily"].map((listItem) => (
        <div style={styleObj}>
          {spacerFour}'{listItem}': '{props.navigationTextFont[listItem]}',
        </div>
      ))}
      {spacerThree}&#x7d;
      <br />
      {spacerTwo}&#x7d;
      <br />
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Footer">'footer': &#x7b;</span>
      <br />
      {spacerTwo}'socialMedia': &#x7b;
      {["background"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.footerSocialMedia[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'quickLinks': &#x7b;
      {["background"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.footerQuickLinks[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'mainLinks': &#x7b;
      {["background"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.footerMainLinks[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'copyright': &#x7b;
      {["background"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.footerCopyright[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Header">'header': &#x7b;</span>
      <br />
      {spacerTwo}'navUpperBackground': &#x7b;
      {["default", "color"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.headerUpperBackground[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'navLowerBackground': &#x7b;
      {["default", "desktop", "active", "border"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.headerLowerBackground[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'searchBar': &#x7b;
      {["radius", "color", "background", "border"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.searchBar[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;,
      <br />
      {spacerTwo}'shoppingBag': &#x7b;
      {["color"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.shoppingBag[listItem]}',
        </div>
      ))}
      {spacerTwo}&#x7d;
      <br />
      {/* {spacerTwo}'myAccount': &#x7b;
      {["background", "radius"].map((listItem) => (
        <div style={styleObj}>
          {spacerThree}'{listItem}': '{props.myAccount[listItem]}',
        </div>
      ))} */}
      {/* {spacerTwo}&#x7d;,
      <br /> */}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Popover">'popover': &#x7b;</span>
      <br />
      {["border", "radius"].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.popover[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}'utilities': &#x7b;
      <br />
      {[
        "divider",
        "dividerDark",
        "backgroundAccent",
        "activeBorder",
        "chipBorderRadius",
        "summaryAlignment"
      ].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.utilities[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}'reviewStar': &#x7b;
      <br />
      {["filled", "unfilled"].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.reviewStar[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}'drawer': &#x7b;
      <br />
      {["headerBackground", "headerBorder"].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.drawer[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="PLP">'plp': &#x7b;</span>
      <br />
      {["facetDivider", "facetTextTransform", "facetLetterSpacing"].map(
        (listItem) => (
          <div style={styleObj}>
            {spacerTwo}'{listItem}': '{props.plp[listItem]}',
          </div>
        )
      )}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="PDP">'pdp': &#x7b;</span>
      <br />
      {["ribbonTextTransform", "ribbonLetterSpacing"].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.pdp[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="CountrySelect">'countrySelect': &#x7b;</span>
      <br />
      {[
        "logoPosition",
        "headerBackground",
        "headerBorderBottom",
        "accordionHeaderTransform",
        "accordionHeaderLetterSpacing"
      ].map((listItem) => (
        <div style={styleObj}>
          {spacerTwo}'{listItem}': '{props.countrySelect[listItem]}',
        </div>
      ))}
      {spacerOne}&#x7d;,
      <br />
      {spacerOne}
      <span id="Status">'status': &#x7b;</span>
      <br />
      {[
        "informationStatus",
        "warningStatus",
        "successStatus",
        "errorStatus"
      ].map((buttonName) => (
        <div style={styleObj}>
          {spacerTwo}'{buttonName}': &#x7b;
          {["border", "background"].map((styleName) => (
            <div style={styleObj}>
              {spacerThree}'{styleName.replace("borderRadius", "radius")}': '
              {props[buttonName][styleName]}',
            </div>
          ))}
          {spacerTwo}&#x7d;,
        </div>
      ))}
      {spacerOne}&#x7d;
      <br />
      &#x7d;
    </pre>
  );
}
