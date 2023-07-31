import React from "react";
export const Social = (props) => {
  const hasSocial = props.social != "";

  const socialMediaBackground = {
    background: props.footer.socialMedia.background
  };

  const heading = {
    color: props.text.default,
    fontWeight: props.text.fontMedium.fontWeight,
    width: "100%",
    textAlign: "center"
  };

  const facebook = props.footerContent[0].social[0].facebook;
  const twitter = props.footerContent[0].social[0].twitter;
  const instagram = props.footerContent[0].social[0].instagram;
  const pinterest = props.footerContent[0].social[0].pinterest;
  const youtube = props.footerContent[0].social[0].youtube;

  const socials = [facebook, twitter, instagram, pinterest, youtube];

  return hasSocial ? (
    <div style={socialMediaBackground} className="footer-row">
      <hr style={props.hr} />
      <div className="section social">
        <p style={heading}>Our Social Networks</p>
        <div className="socialIcons">
          {socials.map((socialFeature, index) =>
            socialFeature != null ? (
              <a key={index} href={socialFeature.link} target="new">
                <img
                  className="socialIconImage"
                  src={socialFeature.image}
                  alt={socialFeature.label}
                />
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  ) : null;
};
