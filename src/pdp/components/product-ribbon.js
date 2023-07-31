import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom/index";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { withMobileDialog } from "@material-ui/core";
SwiperCore.use([Navigation]);

export const ProductRibbon = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function ScrollTop() {
    window.scrollTo(0, 0);
  }

  const summaryTextAlign =
    props.utilities.summaryAlignment === "center" ? "center" : "left";
  const summaryFlexAlign =
    props.utilities.summaryAlignment === "center" ? "center" : "flex-start";
  const summaryFlexBasis =
    props.utilities.summaryAlignment === "center" ? "100%" : null;

  const summaryAlignment = {
    justifyContent: summaryFlexAlign,
    textAlign: summaryTextAlign,
    flexBasis: summaryFlexBasis
  };

  const displayBrand =
    props.utilities.summaryAlignment === "center" ? "inline-block" : "none";

  const BrandName = {
    display: displayBrand,
    textTransform: "uppercase",
    letterSpacing: "0.0625rem",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    height: "1rem",
    overflow: "hidden",
    width: "100%"
  };

  return (
    <div className="product-ribbon-container">
      {props.productFeed === undefined ? "" : <hr style={props.hr} />}
      {props.productFeed === undefined ? (
        ""
      ) : (
        <div className="product-ribbon section">
          <h3 style={{ ...props.MediumFont, ...props.CasingChange }}>
            {props.title}
          </h3>
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={16}
            slidesPerView={props.previewPerView}
            initialSlide={0}
            centeredSlides={false}
            loop={false}
            updateOnWindowResize={true}
            navigation
          >
            {props.productFeed.map((product, index) => (
              <SwiperSlide key={`image-${index}`} id={index}>
                <Link
                  to={`../pdp/${product.title
                    .toLowerCase()
                    .replace(/ |'|_/g, "-")}_pid-${index}`}
                  id={index}
                  key={index}
                  onClick={ScrollTop}
                >
                  <div className="image-container">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-ribbon-summary">
                    <p
                      style={{
                        ...summaryAlignment,
                        ...BrandName,
                        ...props.BoldFont
                      }}
                      className={`plpItem `}
                    >
                      {product.brand}
                    </p>
                    <p style={summaryAlignment} className="title">
                      {product.title}
                    </p>
                    <p
                      style={{ ...props.BoldFont, ...summaryAlignment }}
                      className="price"
                    >
                      {product.price}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
