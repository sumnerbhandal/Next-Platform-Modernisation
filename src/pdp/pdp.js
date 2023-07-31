import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ProductSummary } from "./components/product-summary";
import { ProductSummaryCP } from "./components/product-summary-cp";
import { ButtonPrimary } from "../reusable-components/button-primary";
import { ButtonSecondary } from "../reusable-components/button-secondary";
import { Description } from "./components/description";
import { ProductImagery } from "./components/product-imagery";
import { FitType } from "./components/fit-type";
import { ColourSelect } from "./components/colour-select";
import { SizeSelect } from "./components/size-select";
import { ReviewPreview } from "./components/review-preview";
import { Reviews } from "./components/reviews";
import { ProductRibbon } from "./components/product-ribbon";
import "./pdp.scss";

function Pdp(props) {
  const maxsmall = useMediaQuery("(max-width:767px)");
  const minTablet = useMediaQuery("(min-width: 768px)");
  const xsmall = useMediaQuery("(max-width:399px)");
  const small = useMediaQuery("(min-width:400px) and (max-width:767px)");
  const medium = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const large = useMediaQuery("(min-width:1024px) and (max-width: 1279px");
  const xlarge = useMediaQuery("(min-width:1280px) and (max-width: 1439px)");
  const xxlarge = useMediaQuery("(min-width:1440px) and (max-width:1599px)");
  const [runOnce, setRunOnce] = useState(false);

  const productID = window.location.href.split("_pid-")[1].split("/")[0];
  const product = props.products[productID];
  const DefaultText = {
    color: props.text.default
  };
  const MediumFont = {
    fontWeight: props.text.fontMedium.fontWeight
  };
  const BoldFont = {
    fontWeight: props.text.fontBold.fontWeight
  };
  const BackgroundAccent = {
    background: maxsmall ? props.utilities.backgroundAccent : "#fff"
  };
  const hr = {
    borderTop: props.utilities.divider
  };

  const CasingChange = {
    textTransform: props.pdp.ribbonTextTransform,
    letterSpacing: props.pdp.ribbonLetterSpacing
  };

  function backToTop() {
    if (!runOnce) {
      window.scrollTo(0, 0);
      setRunOnce(true);
    } else return;
  }
  backToTop();

  const previewPerViewWide = xsmall
    ? 2.5
    : small
    ? 3.25
    : medium
    ? 6.25
    : large
    ? 7
    : 8;

  return (
    <div style={DefaultText}>
      <div className="section pdp">
        <div className="pdp-content">
          <ProductImagery product={product} />
          <div className="product-information">
            {window.location.href.includes("cp-site") ? (
              <ProductSummaryCP
                MediumFont={MediumFont}
                product={product}
                reviewStar={props.reviewStar}
              />
            ) : (
              <ProductSummary
                MediumFont={MediumFont}
                product={product}
                reviewStar={props.reviewStar}
              />
            )}
            {minTablet ? <hr style={hr} /> : ""}
            <div style={BackgroundAccent} className="product-details">
              <FitType
                text={props.text}
                form={props.form}
                utilities={props.utilities}
                product={product}
                label="Fit"
              />
              <ColourSelect
                text={props.text}
                form={props.form}
                product={product}
              />
              <SizeSelect
                text={props.text}
                form={props.form}
                product={product}
              />
              <ButtonPrimary
                form={props.form}
                text={props.text}
                buttonMessage={"Add To Bag"}
              />
              <ButtonSecondary
                form={props.form}
                text={props.text}
                buttonMessage={"Store Stock Checker"}
              />
            </div>
            {!minTablet ? <hr style={hr} /> : ""}
            {!minTablet ? (
              <ReviewPreview
                text={props.text}
                utilities={props.utilities}
                reviewStar={props.reviewStar}
                pdp={props.pdp}
                CasingChange={CasingChange}
                MediumFont={MediumFont}
                BoldFont={BoldFont}
                product={product}
              />
            ) : (
              ""
            )}

            <hr style={hr} />
            <Description text={props.text} />
          </div>
        </div>
        <div className="pdp-content pdp-content-wide">
          <ProductRibbon
            previewPerView={previewPerViewWide}
            productFeed={props.products}
            pdp={props.pdp}
            CasingChange={CasingChange}
            MediumFont={MediumFont}
            BoldFont={BoldFont}
            hr={hr}
            utilities={props.utilities}
            title="You May Also Like"
          />
        </div>
        <div className="pdp-content pdp-content-wide">
          <ProductRibbon
            previewPerView={previewPerViewWide}
            productFeed={product.styleWith}
            pdp={props.pdp}
            CasingChange={CasingChange}
            MediumFont={MediumFont}
            BoldFont={BoldFont}
            hr={hr}
            utilities={props.utilities}
            title="Style With"
          />
        </div>
        <div className="pdp-content pdp-content-wide">
          <ProductRibbon
            previewPerView={previewPerViewWide}
            productFeed={product.moreFromBrand}
            pdp={props.pdp}
            CasingChange={CasingChange}
            MediumFont={MediumFont}
            BoldFont={BoldFont}
            hr={hr}
            utilities={props.utilities}
            title={`More From ${product.brand}`}
          />
        </div>
        <div className="pdp-content pdp-content-wide">
          <Reviews
            text={props.text}
            utilities={props.utilities}
            reviewStar={props.reviewStar}
            pdp={props.pdp}
            CasingChange={CasingChange}
            MediumFont={MediumFont}
            BoldFont={BoldFont}
            product={product}
            hr={hr}
            feefoBrandLogo={props.feefoBrandLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default Pdp;
