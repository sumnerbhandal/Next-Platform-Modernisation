import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom/index";
import "./nav-centred.scss";
import {
  SearchIcon,
  SearchIconField,
  UserIcon,
  UserIconDesktop,
  FavouriteInactiveIcon,
  BagIcon,
  CountryIcon
} from "../iconography/icons-thin";

export const NavCentred = (props) => {
  const upperNav = {
    background: props.header.navUpperBackground.default,
    color: props.header.navUpperBackground.color,
    fontWeight: props.text.fontWeightRegular
  };

  const small = useMediaQuery("(max-width:767px)");
  const medium = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const large = useMediaQuery("(min-width:1024px) and (max-width:1279px)");
  const xlarge = useMediaQuery("(min-width:1280px)");

  const searchBarDesktop = {
    borderRadius: props.header.searchBar.radius,
    border: props.header.searchBar.border,
    background: props.header.searchBar.background
  };
  const shoppingBagCount = {
    color: props.header.shoppingBag.color
  };
  const svgColour = {
    fill: props.header.navUpperBackground.color
  };
  const buttonPrimary = {
    background: props.buttonPrimary.background,
    border: props.buttonPrimary.border,
    borderRadius: props.buttonPrimary.radius,
    color: props.buttonPrimary.color,
    fontWeight: props.text.fontBold.fontWeight
  };

  const logoHeight = {
    height: props.logoHeight
  };
  return (
    <div className="navigation">
      <div style={upperNav} className="upper-nav">
        <div className="section">
          {small ? (
            <div className="quick-links left" style={svgColour}>
              <SearchIcon style={svgColour} />
              <FavouriteInactiveIcon style={svgColour} />
            </div>
          ) : null}
          {medium || large || xlarge ? (
            <div className="searchField" style={searchBarDesktop}>
              <input
                onKeyUp={props.searchSwitch}
                onClick={props.closeNav}
                placeholder="Search product or brand"
              />
              <button>
                <SearchIconField style={svgColour} />
              </button>
            </div>
          ) : null}
          <div className="brand-search">
            <div className="brand-logo">
              <Link style={logoHeight} onClick={props.closeNav} to={`./`}>
                {small ? props.logo.mobile : props.logo.desktop}
              </Link>
            </div>
          </div>
          <div className="quick-links right" style={svgColour}>
            {large || xlarge ? (
              <FavouriteInactiveIcon style={svgColour} />
            ) : null}
            <UserIcon style={svgColour} />
            <div className="bagIcon">
              <Link to="./bag">
                <BagIcon style={svgColour} />
                <p style={shoppingBagCount}>1</p>
              </Link>
            </div>
            <button style={buttonPrimary}>Checkout</button>
            {medium || large || xlarge ? (
              <CountryIcon
                style={svgColour}
                borderColour={props.header.navUpperBackground.color}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
