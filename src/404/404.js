import React from "react";
import { ButtonPrimary } from "../reusable-components/button-primary";
import { Link } from "react-router-dom/index";
import "./404.css";

const PageNotFound = (props) => {
  return (
    <section class="page_404">
      <div class="section">
        <div class="row">
          <h1 class="text-center ">404</h1>
          <div class="four_zero_four_bg"></div>
          <div class="contant_box_404">
            <h2>Look like you're lost</h2>
            <p>The page you were looking for no longer exists.</p>
            <Link to="./">
              <ButtonPrimary
                role="button"
                form={props.form}
                text={props.text}
                buttonMessage={"Return Home"}
                href="./"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
