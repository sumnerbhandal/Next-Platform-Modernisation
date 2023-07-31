import React from "react";
import { messages } from "../data-feed/usp-messages";
import "./usp.scss";

import Slider from "infinite-react-carousel";

const UspBanner = (props) => {
  return (
    <div className="usp-banner">
      <Slider
        className="section"
        autoplay={true}
        autoplaySpeed={6000}
        wheel={true}
        beforeChange={(index) => {
          function setLoadBar() {
            const progress = document.getElementById("progressbar");
            progress.classList.remove("load"); // reset animation
            void progress.offsetWidth; // trigger reflow
            progress.classList.add("load"); // start animation
          }
          document.addEventListener("DOMContentLoaded", (event) => {
            setLoadBar();
          });
        }}
      >
        {messages.map((step, index) => (
          <div key={index}>
            <p>{step}</p>
          </div>
        ))}
      </Slider>
      <div className="progress section">
        <div id="progressbar" className="progress-value load"></div>
      </div>
    </div>
  );
};
export default UspBanner;
