import React, { useEffect, lazy, Suspense } from "react";
// Data feeds
import { primaryNav } from "../data-feed/cp/navigation";
import { products } from "../data-feed/cp/product-feed";
import { HP } from "../data-feed/cp/hp-feed";
import { CP } from "../defined-themes/CpTheme";
import { footerContent } from "../data-feed/cp/footer-feed";
import { mobileLogo, desktopLogo, feefoBrandLogo } from "../data-feed/cp/logos";
import { Route, Routes, useLocation } from "react-router-dom/index";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Components
import MegaNav from "../nav/mega-nav";
import { NavCentred } from "../nav/nav-centred";
import Footer from "../footer/footer";
import "./cp-site.css";

const Hp = lazy(() => import("../hp/hp"));
const Plp = lazy(() => import("../plp/plp"));
const Pdp = lazy(() => import("../pdp/pdp"));
const UspBanner = lazy(() => import("../banners/usp.js"));
const PageNotFound = lazy(() => import("../404/404"));
const Bag = lazy(() => import("../shopping-bag/shopping-bag"));

const CpSite = (props) => {
  const site = "Childsplay";
  const small = useMediaQuery("(min-width:375px) and (max-width:767px)");
  const medium = useMediaQuery("(min-width:768px) and (max-width:1023px)");

  function closeNav(e) {
    setTimeout(function (e) {
      const overlays = document.getElementsByClassName("overlay");
      const navButtons = document.getElementsByClassName("mega-nav-button");
      const backgroundOverlay = document.getElementsByClassName(
        "background-overlay"
      )[0];
      backgroundOverlay.style.display = "none";
      let i;
      for (i = 0; i < overlays.length; i++) {
        overlays[i].style.height = 0;
      }
      for (i = 0; i < navButtons.length; i++) {
        navButtons[i].style.background = "inherit";
        navButtons[i].style.color = theme.text.navigation.link;
      }
      const lastLink = navButtons.length - 1;
      navButtons[lastLink].style.color = theme.text.navigation.linkClearance;
    }, 0);
  }
  closeNav();

  const location = useLocation();
  useEffect(() => {
    if (window.location.href.includes("cp-site")) {
      document.getElementsByTagName("nav")[0].style.display = "none";
    }
  }, [location]);

  const logo = {
    mobile: mobileLogo,
    desktop: desktopLogo
  };

  const theme = CP;

  document.documentElement.style.setProperty(
    "--fontWeightRegular",
    `${theme.text.fontRegular.fontWeight}`
  );
  document.documentElement.style.setProperty(
    "--fontWeightMedium",
    `${theme.text.fontMedium.fontWeight}`
  );
  document.documentElement.style.setProperty(
    "--fontWeightBold",
    `${theme.text.fontBold.fontWeight}`
  );
  document.title = "Kids Designer Clothes & Shoes | Childsplay Clothing UK";

  return (
    <div className="vs centred-nav">
      <div className="navigation-container">
        <NavCentred
          header={theme.header}
          form={theme.form}
          text={theme.text}
          buttonPrimary={theme.form.buttonPrimary}
          site={site}
          closeNav={closeNav}
          logo={logo}
          logoHeight={""}
        />
        <MegaNav
          megaNavContent={primaryNav}
          header={theme.header}
          text={theme.text}
          navigationText={theme.text.navigation}
          closeNav={closeNav}
        />
      </div>
      <div
        className="background-overlay"
        onMouseOver={!small && !medium ? closeNav : null}
        onClick={small || medium ? closeNav : null}
      ></div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="pageContent">
              {/* <UspBanner /> */}
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <Hp
                  content={HP}
                  buttonSecondary={theme.form.buttonSecondary}
                  text={theme.text}
                />
              </Suspense>
            </div>
          }
        />
        <Route
          path="/plp/*"
          element={
            <div className="pageContent">
              {/* <UspBanner /> */}
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <Plp
                  text={theme.text}
                  form={theme.form}
                  utilities={theme.utilities}
                  reviewStar={theme.reviewStar}
                  plp={theme.plp}
                  products={products}
                  title={site}
                  input={theme.input}
                />
              </Suspense>
            </div>
          }
        />
        <Route
          path="/pdp/*"
          element={
            <div className="pageContent">
              {/* <UspBanner /> */}
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <Pdp
                  text={theme.text}
                  formDefault={theme.form.default}
                  utilities={theme.utilities}
                  reviewStar={theme.reviewStar}
                  form={theme.form}
                  pdp={theme.pdp}
                  products={products}
                  title={site}
                  feefoBrandLogo={feefoBrandLogo}
                />
              </Suspense>
            </div>
          }
        />
        <Route
          path="/bag/*"
          element={
            <div className="pageContent">
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                {/* <UspBanner /> */}
              </Suspense>
              <Suspense
                fallback={
                  <div className="loading-container">
                    <span className="loading"></span>
                  </div>
                }
              >
                <Bag
                  text={theme.text}
                  formDefault={theme.form.default}
                  utilities={theme.utilities}
                  form={theme.form}
                  products={products}
                  title={site}
                />
              </Suspense>
            </div>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense
              fallback={
                <div className="loading-container">
                  <span className="loading"></span>
                </div>
              }
            >
              <PageNotFound text={theme.text} form={theme.form} />
            </Suspense>
          }
        />
      </Routes>
      <Footer
        footerContent={footerContent}
        utilities={theme.utilities}
        text={theme.text}
        footer={theme.footer}
      />
    </div>
  );
};

export default CpSite;
