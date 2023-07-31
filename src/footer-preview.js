import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import "./footer.css";

const icon = "http://test.online-dev.co.uk/plat-mod-imagery/";
const chevron = "https://next-sandbox.azureedge.net/icons/shared/chevron.svg";

export const FooterDefault = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Socials = () => (
    <div className="column social pb-1 center-align">
      <div className={`flex-shrink pt-1 w-100`}>
        <p className={`${text.default} ${text.medium} align-center`}>
          Our Social Networks
        </p>
      </div>
      <div class="flex-container ">
        <img
          src={`${icon}facebook.svg`}
          alt={document.title}
          className="icon-placeholder"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
          }}
        />
        <img
          src={`${icon}instagram.svg`}
          alt={document.title}
          className="icon-placeholder"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
          }}
        />
        <img
          src={`${icon}youtube.svg`}
          alt={document.title}
          className="icon-placeholder"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
          }}
        />{" "}
        <img
          src={`${icon}twitter.svg`}
          alt={document.title}
          className="icon-placeholder"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
          }}
        />
      </div>
    </div>
  );

  const DesktopNavLinks = () => (
    <div className={"desktop-view lower " + header.lowerNavDesktop}>
      <a className={"nav-link " + text.navigationLink}>Link 1</a>
      <a className={"nav-link " + text.navigationLink}>Link 2</a>
      <a className={"nav-link " + text.navigationLink}>Link 3</a>
      <a className={"nav-link " + text.navigationLink}>Link 4</a>
      <a className={"nav-link " + text.navigationLink}>Link 5</a>
      <a className={"nav-link " + text.navigationLink}>Link 6</a>
      <a className={"nav-link " + text.navigationLink}>Link 7</a>
      <a className={"nav-link " + text.navigationLink}>Link 8</a>
      <a className={"nav-link " + text.navigationLink}>Link 9</a>
      <a className={"nav-link " + text.navigationLink}>Link 10</a>
      <a className={"nav-link " + text.navigationLinkClearance}>Clearance</a>
    </div>
  );

  const Footer = [];
  [
    {
      next: {
        quickshop: "",
        storeLocator: "",
        chat: "",
        country: "",
        copyright: "© 2020 Next Retail Ltd. All rights reserved.",
        signedIn: "View your Next account"
      },
      fabled: {
        quickshop: "display-none",
        storeLocator: "display-none",
        chat: "display-none",
        country: "display-none",
        copyright:
          "© 2020  Fabled by Marie Claire is a trading name of Next Retail Ltd which is authorised and regulated by the Financial Conduct Authority for consumer credit. All rights reserved.",
        signedIn: "View your Fabled account"
      },
      childsplay: {
        quickshop: "display-none",
        storeLocator: "display-none",
        chat: "display-none",
        country: "display-none",
        copyright:
          "© 2020 Next Retail Ltd trading as Childsplay Clothing. All rights reserved.",
        signedIn: "View your Childsplay account"
      },
      littlelabel: {
        quickshop: "display-none",
        storeLocator: "display-none",
        chat: "display-none",
        country: "display-none",
        copyright:
          "© 2020 Next Retail Ltd trading as Little Label. All rights reserved.",
        signedIn: "View your Little Label account"
      },
      LauraAshley: {
        quickshop: "display-none",
        storeLocator: "display-none",
        chat: "display-none",
        country: "display-none",
        copyright:
          "© 2020 Next Retail Ltd trading as Little Label. All rights reserved.",
        signedIn: "View your Little Label account"
      }
    }
  ].map((value, index) => {
    Footer.push(
      <div>
        <div className={`footer ${document.title}`}>
          <div className="w-100">
            <Socials className="test" />
            <div
              className={`${utility.backgroundAccent} ${utility.borderTopLight} max-width`}
            >
              <div className={`quick-link-container`}>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container  ${utility.backgroundAccent}`}
                >
                  <img
                    src={`${icon}${document.title}_footer_account.svg`}
                    alt={document.title}
                    className="icon-placeholder"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
                    }}
                  />
                  <div className="column">
                    <p className={`${text.default} ${text.medium}`}>Lowrynce</p>
                    <p className={`${text.muted}`}>
                      {value[document.title].signedIn}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container ${
                    utility.borderTopLight
                  } ${utility.backgroundAccent} ${
                    value[document.title].quickshop
                  }`}
                >
                  <img
                    src={`${icon}${document.title}_footer_quick-shop.svg`}
                    alt={document.title}
                    className="icon-placeholder"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
                    }}
                  />
                  <div className="column">
                    <p className={`${text.default} ${text.medium}`}>
                      Quickshop
                    </p>
                    <p className={`${text.muted}`}>Shop by product number</p>
                  </div>
                </div>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container ${
                    utility.borderTopLight
                  } ${utility.backgroundAccent} ${
                    value[document.title].storeLocator
                  }`}
                >
                  <img
                    src={`${icon}${document.title}_footer_store.svg`}
                    alt={document.title}
                    className="icon-placeholder"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
                    }}
                  />
                  <div className="column">
                    <p className={`${text.default} ${text.medium}`}>
                      Store Locator
                    </p>
                    <p className={`${text.muted}`}>Find your nearest store</p>
                  </div>
                </div>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container ${
                    utility.borderTopLight
                  } ${utility.backgroundAccent} ${value[document.title].chat}`}
                >
                  <img
                    src={`${icon}${document.title}_footer_chat.svg`}
                    alt={document.title}
                    className="icon-placeholder"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
                    }}
                  />
                  <div className="column">
                    <p className={`${text.default} ${text.medium}`}>
                      Start a Chat
                    </p>
                    <p className={`${text.muted}`}>For general enquiries</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${utility.backgroundAccent} ${utility.borderTopLight} max-width`}
            >
              <div className={`quick-link-container country-button `}>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container ${
                    utility.borderTopLight
                  } ${utility.backgroundAccent} ${
                    value[document.title].country
                  }`}
                >
                  <img
                    src={`${icon}${document.title}_footer_united-kingdom.png`}
                    alt={document.title}
                    className="icon-placeholder"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/44X44/f7f7f7/f7f7f7";
                    }}
                  />
                  <div className="column">
                    <p className={`${text.default} ${text.medium}`}>
                      Change Country
                    </p>
                    <p className={`${text.muted}`}>
                      Shopping in United Kingdom
                    </p>
                  </div>
                </div>
                <div
                  className={`w-100 pt-2 pb-2 quick-link flex-container ${utility.borderTopLight} ${utility.backgroundAccent}`}
                >
                  <div className="column">
                    <p
                      className={`${text.default} ${text.medium} pt-2 pb-2 ml-3 mr-3`}
                    >
                      Not Lowrynce
                    </p>
                  </div>
                  <button className={`${form.buttonSecondary}`}>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-accordions">
              <div
                className={`w-100 ${utility.backgroundAccent} ${utility.borderTopLight}`}
              >
                <ExpansionPanel
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  square
                >
                  <ExpansionPanelSummary
                    expandIcon={<img className="" src={chevron} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <p className={`header2 ${text.default} ${text.medium}`}>
                      Help
                    </p>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className="column">
                      {[
                        "Frequenty Asked Questions",
                        "Contact Us",
                        "Delivery Information"
                      ].map((listItem) => (
                        <p className={`header2 pb-3 ${text.default}`}>
                          {listItem}
                        </p>
                      ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
              <div
                className={`w-100  ${utility.backgroundAccent} ${utility.borderTopLight}`}
              >
                <ExpansionPanel
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  square
                >
                  <ExpansionPanelSummary
                    expandIcon={<img className="" src={chevron} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <p className={`header2 ${text.default} ${text.medium}`}>
                      Privacy & Legal
                    </p>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className="column">
                      {[
                        "Frequenty Asked Questions",
                        "Contact Us",
                        "Delivery Information"
                      ].map((listItem) => (
                        <p className={`header2 pb-3 ${text.default}`}>
                          {listItem}
                        </p>
                      ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
              <div
                className={`w-100 ${utility.backgroundAccent} ${utility.borderTopLight}`}
              >
                <ExpansionPanel
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  square
                >
                  <ExpansionPanelSummary
                    expandIcon={<img className="" src={chevron} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <p className={`header2 ${text.default} ${text.medium}`}>
                      Other Services
                    </p>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className="column">
                      {[
                        "Frequenty Asked Questions",
                        "Contact Us",
                        "Delivery Information"
                      ].map((listItem) => (
                        <p className={`header2 pb-3 ${text.default}`}>
                          {listItem}
                        </p>
                      ))}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
            <div
              className={`${utility.backgroundAccent} ${utility.borderTopLight} max-width`}
            >
              <div className={`quick-link-container`}>
                <div className="footer-columns">
                  <div className="flex-columns-children">
                    <p
                      className={`header2 ${text.default} ${text.medium} pb-3`}
                    >
                      Help
                    </p>
                    {[
                      "View help topics",
                      "Accessibility in our stores",
                      "Site map",
                      "Customer services",
                      "Contact us"
                    ].map((listItem) => (
                      <p className={`header2 pb-3 ${text.default}`}>
                        {listItem}
                      </p>
                    ))}
                  </div>
                  <div className="flex-columns-children">
                    <p
                      className={`header2 ${text.default} ${text.medium} pb-3`}
                    >
                      Privacy & Legal
                    </p>
                    {[
                      "Cookies & privacy policy",
                      "Terms & conditions",
                      "The company",
                      "Media & press",
                      "Next careers"
                    ].map((listItem) => (
                      <p className={`header2 pb-3 ${text.default}`}>
                        {listItem}
                      </p>
                    ))}
                  </div>
                  <div className="flex-columns-children">
                    <p
                      className={`header2 ${text.default} ${text.medium} pb-3`}
                    >
                      Other Services
                    </p>
                    {[
                      "Nextpay credit account",
                      "Next Unlimited",
                      "Flowers, plants & wine",
                      "Gift cards",
                      "eGift cards",
                      "Gift experiences"
                    ].map((listItem) => (
                      <p className={`header2 pb-3 ${text.default}`}>
                        {listItem}
                      </p>
                    ))}
                  </div>
                  <div className="flex-columns-children">
                    <p
                      className={`header2 ${text.default} ${text.medium} pb-3`}
                    >
                      More From Next
                    </p>
                    {[
                      "Next app",
                      "The company",
                      "Media & press",
                      "Business 2 business",
                      "Next franchise",
                      "Careers @ Next",
                      "View our modern slavery statement",
                      "Corporate responsibility report"
                    ].map((listItem) => (
                      <p className={`header2 pb-3 ${text.default}`}>
                        {listItem}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${footer.copyrightBackground} ${utility.borderTopLight} w-100 column`}
            >
              <a
                className={`align-center w-100 mt-3 pt-1 underline ${text.hyperlink}`}
              >
                View desktop site
              </a>
              <p className={`align-center p-3 w-100 ${text.muted}`}>
                {value[document.title].copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{Footer}</div>;
};
