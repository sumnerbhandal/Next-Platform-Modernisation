import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./hp.css";
import { Link } from "react-router-dom/index";

function Hp(props) {
  const small = useMediaQuery("(max-width:767px)");

  const CMSButton = {
    background: props.buttonSecondary.background,
    border: props.buttonSecondary.border,
    fontWeight: props.fontWeightMedium,
    color: props.buttonSecondary.color
  };

  const MutedText = {
    color: props.text.muted
  };

  return (
    <div className="section hp">
      <Link to="./plp">
        <div className="hero-image">
          <img
            src={small ? props.content.hero.mobile : props.content.hero.desktop}
            alt="Hero"
          />
        </div>
      </Link>
      <div className="module-container">
        {props.content.moduleOne.map((value, index) => (
          <div key={index} className="module-child">
            <img src={value.image} alt={`Module ${index}`} />
            <h3>{value.title}</h3>
            <p style={MutedText}>{value.subtitle}</p>
            <button style={CMSButton}>Shop Now</button>
          </div>
        ))}
      </div>
      <div className="hero-image">
        <img
          className=""
          src={
            small ? props.content.heroTwo.mobile : props.content.heroTwo.desktop
          }
          alt="Hero Two"
        />
      </div>
      <div className="module-container">
        {props.content.moduleTwo.map((value, index) => (
          <div key={index} className="module-child">
            <img src={value.image} alt={`Module Section 2 ${index}`} />
            <h3>{value.title}</h3>
            <p style={MutedText}>{value.subtitle}</p>
            <button style={CMSButton}>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hp;
