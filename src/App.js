import { light } from "@material-ui/core/styles/createPalette";
import React, { useState, lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom/index";
import "./styles.css";

const NextSite = lazy(() => import("./_next-site/next-site"));
const LASite = lazy(() => import("./_la-site/la-site"));
const VsSite = lazy(() => import("./_vs-site/vs-site"));
const CpSite = lazy(() => import("./_cp-site/cp-site"));
const NotFound = lazy(() =>
  import("./_theme-generator-components/landing/landing")
);
const FooterTheme = lazy(() =>
  import("./_theme-generator-components/footer/footer")
);
const Buttons = lazy(() =>
  import("./_theme-generator-components/forms/buttons")
);
const Forms = lazy(() => import("./_theme-generator-components/forms/forms"));
const Theme = lazy(() => import("./_theme-generator-components/theme/theme"));
const ThemeName = lazy(() =>
  import("./_theme-generator-components/theme/theme-set")
);
const Navigation = lazy(() =>
  import("./_theme-generator-components/App-Navigation")
);
const UtiltiesTheme = lazy(() =>
  import("./_theme-generator-components/utilities/utilities")
);
const HeaderTheme = lazy(() =>
  import("./_theme-generator-components/header/header")
);
const TextColour = lazy(() =>
  import("./_theme-generator-components/text/text")
);
const Fonts = lazy(() => import("./_theme-generator-components/font/font"));
const Inputs = lazy(() => import("./_theme-generator-components/forms/inputs"));
const Status = lazy(() =>
  import("./_theme-generator-components/status/status")
);

export default function App() {
  const [themeName, setThemeName] = useState({
    name: "GEL"
  });
  // Theme Name End //

  // Fonts //

  const [lightFont, setLightFont] = useState({
    family: '"AzoSans"',
    filename: "AzoSans-Regular-webfont",
    formats: '["woff", "woff2", "eot"]',
    weight: 400
  });
  const [regularFont, setRegularFont] = useState({
    family: '"AzoSansRegular"',
    filename: "AzoSans-Regular-webfont",
    formats: '["woff", "woff2", "eot"]',
    weight: 500
  });
  const [mediumFont, setMediumFont] = useState({
    family: '"AzoSansMedium"',
    filename: "AzoSans-Regular-webfont",
    formats: '["woff", "woff2", "eot"]',
    weight: 500
  });
  const [italicFont, setItalicFont] = useState({
    family: '"AzoSansItalic"',
    filename: "AzoSans-Italic-webfont",
    formats: '["woff", "woff2", "eot"]',
    weight: 400
  });
  const [defaultFont, setDefaultFont] = useState({
    default: '"Helvetica Neue", Arial, sans-serif'
  });

  // End of Fonts //

  // Forms //
  const [buttonPrimary, setButtonPrimary] = useState({
    background: "#30a74b",
    border: "0",
    color: "#ffffff",
    borderRadius: "0.25rem",
    fontWeight: 500
  });
  const [buttonSecondary, setButtonSecondary] = useState({
    background: "#ffffff",
    border: ".0625rem solid #000000",
    color: "#000000",
    borderRadius: "0.25rem",
    fontWeight: 500
  });
  const [buttonTertiary, setButtonTertiary] = useState({
    border: "0",
    background: "#000000",
    color: "#ffffff",
    borderRadius: "0.25rem",
    fontWeight: 500
  });
  const [formDefault, setFormDefault] = useState({
    border: "0.0625rem solid #515151",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  const [formDisabled, setFormDisabled] = useState({
    border: "0.0625rem solid #dedede",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  const [formFocusActive, setFormFocusActive] = useState({
    border: "0.0625rem solid #000000",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  const [formInvalid, setFormInvalid] = useState({
    border: "0.0625rem solid #d91440",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  const [formSelectedAccent, setFormSelectedAccent] = useState({
    border: "0.125rem solid #257F39",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  const [formSelectedBlock, setFormSelectedBlock] = useState({
    border: "0.125rem solid #257F39",
    background: "rgba(48, 167, 75, 0.05)",
    borderRadius: "0.25rem"
  });
  const [formSuccess, setFormSuccess] = useState({
    border: "0.0625rem solid #109449",
    background: "#ffffff",
    borderRadius: "0.25rem"
  });
  // Forms End //
  // Text //
  const [text, setText] = useState({
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    default: "#000000",
    disabled: "#c5c5c5",
    reversed: "#ffffff",
    error: "#d91440",
    hyperlink: "#257f39",
    muted: "#515151",
    strong: "#000000",
    success: "#257f39",
    warning: "#A26100"
  });
  const [navigationText, setNavigationText] = useState({
    link: "#ffffff",
    linkActive: "#000000",
    linkClearance: "#f28500"
  });
  const [navigationTextFont, setNavigationTextFont] = useState({
    fontWeight: 500,
    fontFamily: 'AzoSansRegular,"Helvetica Neue",Arial,sans-serif'
  });
  // Text End //
  // Footer //
  const [footerSocialMedia, setFooterSocialMedia] = useState({
    background: "initial"
  });
  const [footerQuickLinks, setFooterQuickLinks] = useState({
    background: "#f7f7f7"
  });
  const [footerMainLinks, setFooterMainLinks] = useState({
    background: "#f7f7f7"
  });
  const [footerCopyright, setFooterCopyright] = useState({
    background: "#f7f7f7"
  });
  // Footer End //
  // Header //
  const [headerUpperBackground, setHeaderUpperBackground] = useState({
    default: "#000000",
    color: "#ffffff"
  });
  const [headerLowerBackground, setHeaderLowerBackground] = useState({
    default: "#1e1e1e",
    desktop: "#000000",
    active: "#ffffff",
    border: "0"
  });
  const [searchBar, setSearchBar] = useState({
    radius: "0.25rem",
    color: "#000",
    background: "#fff",
    border: "0.0625rem solid #eaeaea"
  });
  const [shoppingBag, setShoppingBag] = useState({
    color: "#ffffff"
  });
  // Header End //
  const [myAccount, setMyAccount] = useState({
    background: "#fff",
    radius: "0.25rem"
  });
  // Popover, Utilities & Drawer //
  const [popover, setPopover] = useState({
    border: "0.0625rem solid #9e9e9e",
    radius: "0.25rem"
  });
  const [utilities, setUtilities] = useState({
    divider: "0.0625rem solid #eaeaea",
    dividerDark: ".0625rem solid #9e9e9e",
    backgroundAccent: "#f7f7f7",
    activeBorder: "0.125rem solid #257f39",
    chipBorderRadius: "0.25rem",
    information: "#1D89DD",
    summaryAlignment: "flex-start"
  });
  const [reviewStar, setReviewStar] = useState({
    filled: "#000000",
    unfilled: "#d1d1d1"
  });
  const [drawer, setDrawer] = useState({
    headerBackground: "#f7f7f7",
    headerBorder: ".0625rem solid #9e9e9e"
  });
  // Popover, Utilities & Drawer End //
  // PLP  //
  const [plp, setPlp] = useState({
    facetDivider: "0.0625rem solid #d1d1d1",
    facetTextTransform: "capitalize",
    facetLetterSpacing: "0.0075rem"
  });
  // PLP End //
  // PDP  //
  const [pdp, setPdp] = useState({
    ribbonTextTransform: "capitalize",
    ribbonLetterSpacing: "0.0075rem"
  });
  // PLP End //
  // Inputs  //
  const [checkbox, setCheckbox] = useState({
    border: "0.0625rem solid #b7b7b7",
    radius: "0.25rem",
    borderSelected: "0.125rem solid #257F39",
    backgroundSelected: "rgba(48, 167, 75, 0.05)",
    checkSelected: "#000"
  });
  const [radio, setRadio] = useState({
    border: "0.0625rem solid #b7b7b7",
    radius: "50%",
    borderSelected: "0.125rem solid #257F39",
    backgroundSelected: "rgba(48, 167, 75, 0.05)",
    innerSelected: "#000"
  });

  // Status //
  const [informationStatus, setInformationStatus] = useState({
    background: "#f4f9fd",
    border: "0.125rem solid #1d89dd"
  });
  const [errorStatus, setErrorStatus] = useState({
    background: "#fdf3f5",
    border: "0.125rem solid #d91440"
  });
  const [warningStatus, setWarningStatus] = useState({
    background: "#fdf9f5",
    border: "0.125rem solid #d88f31"
  });
  const [successStatus, setSuccessStatus] = useState({
    background: "#f4f9f6",
    border: "0.125rem solid #257f39"
  });
  // PLP End //
  // Country Select  //
  const [countrySelect, setCountrySelect] = useState({
    logoPosition: "flex-start",
    headerBackground: "#fff",
    headerBorderBottom: "",
    accordionHeaderTransform: "capitalize",
    accordionHeaderLetterSpacing: "0.0075rem"
  });
  // Country Select End //

  function handleChange(newValue) {
    const component = newValue.split("&")[0];
    const state = newValue.split("&")[1];
    const value = newValue.split("&")[2];

    const setComponent =
      "set" + component.charAt(0).toUpperCase() + component.slice(1);

    eval(setComponent)((prevState) => ({
      ...prevState,
      [state]: value
    }));
  }

  document.documentElement.style.setProperty(
    "--site-font",
    `AzoSans, "Helvetica Neue", Arial, sans-serif`
  );

  const ThemeMapped = (
    <Suspense
      fallback={
        <div className="loading-container">
          <span className="loading"></span>
        </div>
      }
    >
      <Theme
        buttonPrimary={buttonPrimary}
        buttonSecondary={buttonSecondary}
        buttonTertiary={buttonTertiary}
        themeName={themeName}
        text={text}
        lightFont={lightFont}
        regularFont={regularFont}
        mediumFont={mediumFont}
        italicFont={italicFont}
        defaultFont={defaultFont}
        navigationText={navigationText}
        navigationTextFont={navigationTextFont}
        formDefault={formDefault}
        formDisabled={formDisabled}
        formFocusActive={formFocusActive}
        formInvalid={formInvalid}
        formSelectedAccent={formSelectedAccent}
        formSelectedBlock={formSelectedBlock}
        formSuccess={formSuccess}
        headerUpperBackground={headerUpperBackground}
        headerLowerBackground={headerLowerBackground}
        searchBar={searchBar}
        shoppingBag={shoppingBag}
        utilities={utilities}
        popover={popover}
        drawer={drawer}
        footerSocialMedia={footerSocialMedia}
        footerQuickLinks={footerQuickLinks}
        footerMainLinks={footerMainLinks}
        footerCopyright={footerCopyright}
        myAccount={myAccount}
        plp={plp}
        pdp={pdp}
        checkbox={checkbox}
        radio={radio}
        informationStatus={informationStatus}
        warningStatus={warningStatus}
        errorStatus={errorStatus}
        successStatus={successStatus}
        reviewStar={reviewStar}
        countrySelect={countrySelect}
      />
    </Suspense>
  );
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading-container">
            <span className="loading"></span>
          </div>
        }
      >
        <Navigation
          headerUpperBackground={headerUpperBackground}
          title={themeName}
        />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <ThemeName themeName={themeName} onChange={handleChange} />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/forms/*"
          element={
            <div className="section theme">
              {ThemeMapped}

              <main>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <Buttons
                    buttonPrimary={buttonPrimary}
                    buttonSecondary={buttonSecondary}
                    buttonTertiary={buttonTertiary}
                    onChange={handleChange}
                  />
                  <hr />
                  <Forms
                    formDefault={formDefault}
                    formDisabled={formDisabled}
                    formFocusActive={formFocusActive}
                    formInvalid={formInvalid}
                    formSelectedAccent={formSelectedAccent}
                    formSelectedBlock={formSelectedBlock}
                    formSuccess={formSuccess}
                    text={text}
                    onChange={handleChange}
                  />
                  <hr />
                  <Inputs
                    checkbox={checkbox}
                    radio={radio}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/text/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>Text Colour</h2>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <TextColour
                    text={text}
                    navigationText={navigationText}
                    navigationTextFont={navigationTextFont}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/font/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>Font</h2>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <Fonts
                    lightFont={lightFont}
                    regularFont={regularFont}
                    mediumFont={mediumFont}
                    italicFont={italicFont}
                    defaultFont={defaultFont}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/footer/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>Footer</h2>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <FooterTheme
                    footerSocialMedia={footerSocialMedia}
                    footerQuickLinks={footerQuickLinks}
                    footerMainLinks={footerMainLinks}
                    footerCopyright={footerCopyright}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/header/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>Header</h2>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <HeaderTheme
                    headerUpperBackground={headerUpperBackground}
                    headerLowerBackground={headerLowerBackground}
                    searchBar={searchBar}
                    navigationText={navigationText}
                    navigationTextFont={navigationTextFont}
                    shoppingBag={shoppingBag}
                    myAccount={myAccount}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/utilities/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>Popover, Utilities & Drawer</h2>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <UtiltiesTheme
                    utilities={utilities}
                    popover={popover}
                    drawer={drawer}
                    reviewStar={reviewStar}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/plp/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <h2>PLP</h2>
                Coming Soon
              </main>
            </div>
          }
        />
        <Route
          path="/status-messaging/*"
          element={
            <div className="section theme">
              {ThemeMapped}
              <main>
                <Suspense
                  fallback={
                    <div className="loading-container">
                      <span className="loading"></span>
                    </div>
                  }
                >
                  <Status
                    informationStatus={informationStatus}
                    warningStatus={warningStatus}
                    errorStatus={errorStatus}
                    successStatus={successStatus}
                    onChange={handleChange}
                  />
                </Suspense>
              </main>
            </div>
          }
        />
        <Route
          path="/next-site/*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <NextSite />
            </Suspense>
          }
        />
        <Route
          path="/vs-site/*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <VsSite />
            </Suspense>
          }
        />
        <Route
          path="/la-site/*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <LASite />
            </Suspense>
          }
        />
        <Route
          path="/cp-site/*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <CpSite />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
