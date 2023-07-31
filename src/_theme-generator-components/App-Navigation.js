import React from "react";
import getSiblings from "../reusable-functions/get-siblings";
import { Link } from "react-router-dom/index";

const Navigation = (props) => {
  const headerTheme = {
    background: props.headerUpperBackground.default,
    color: props.headerUpperBackground.color
  };
  const borderLeft = {
    borderLeft: `1px solid props.headerUpperBackground.color`
  };
  function activeLink(e) {
    const link = e.target;
    var siblings = getSiblings(link);
    let i;
    for (i = 0; i < siblings.length; i++) {
      siblings[i].style.borderBottom = "0";
      siblings[i].style.fontWeight = 400;
    }
    link.style.borderBottom = `2px solid ${props.headerUpperBackground.color}`;
    link.style.fontWeight = 500;
    const preSpans = document.querySelectorAll("pre span");
    for (i = 0; i < preSpans.length; i++) {
      preSpans[i].classList = "";
    }
    const section = link.innerHTML.split("," || " ")[0];
    const themeId = document.getElementById(section);
    themeId.scrollIntoView({ behavior: "smooth", block: "start" });
    themeId.classList = "active";
  }
  document.title = "Realm Theme Generator";
  return (
    <nav style={headerTheme}>
      <div className="section">
        <Link className="logo" to="/">
          <h1>{props.title.name} Theme Generator</h1>
        </Link>
        <div className="nav-links">
          <span style={borderLeft}></span>
          <p>Set Theme:</p>
          <Link onMouseDown={activeLink} to="/">
            Name
          </Link>
          <Link onMouseDown={activeLink} to="/fonts">
            Fonts
          </Link>
          <Link onMouseDown={activeLink} to="/forms">
            Forms, Inputs
          </Link>
          <Link onMouseDown={activeLink} to="/text">
            Text Colour
          </Link>
          <Link onMouseDown={activeLink} to="/footer">
            Footer
          </Link>
          <Link onMouseDown={activeLink} to="/header">
            Header
          </Link>

          <Link onMouseDown={activeLink} to="/utilities">
            Popover, Utilities & Drawer
          </Link>
          <Link onMouseDown={activeLink} to="/plp">
            PLP
          </Link>
          <Link onMouseDown={activeLink} to="/status-messaging">
            Status
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
