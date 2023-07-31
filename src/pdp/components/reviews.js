import React from "react";
import ReviewStar from "../../reusable-components/reviewStar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const feefoInline = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="44"
    viewBox="0 0 128 44"
  >
    <g fill="none" fill-rule="evenodd">
      <g>
        <g>
          <g>
            <g transform="translate(-32 -206) translate(0 124) translate(32 82) translate(0 13)">
              <rect width="68" height="18" fill="#30A74B" rx="2" />
              <path
                fill="#257F39"
                d="M2 0h19v18H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0z"
              />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M14.293 5.293L15.707 6.707 9.861 12.554 6.293 8.986 7.707 7.572 9.86 9.725zM29.575 13l2.035-5.687h-1.298l-1.386 4.367h-.022l-1.441-4.367h-1.364L28.167 13h1.408zm5.302.154c.308 0 .603-.042.886-.127.282-.084.537-.208.764-.373.227-.165.422-.369.583-.611.161-.242.275-.517.341-.825h-1.188c-.11.315-.277.552-.5.71-.224.157-.52.236-.886.236-.264 0-.491-.046-.682-.137-.19-.092-.348-.215-.473-.369s-.218-.334-.28-.539c-.063-.205-.094-.418-.094-.638h4.18c.051-.425.024-.838-.082-1.238-.107-.4-.277-.753-.512-1.061-.235-.308-.53-.556-.886-.743-.355-.186-.757-.28-1.204-.28-.425 0-.807.08-1.144.242-.337.161-.625.38-.864.655-.238.275-.421.594-.55.957-.128.363-.192.746-.192 1.149 0 .44.06.843.181 1.21.122.367.301.682.54.946.238.264.53.47.874.616.345.147.74.22 1.188.22zm1.397-3.498h-2.926c.007-.213.05-.41.127-.594.076-.183.18-.343.307-.478.129-.136.283-.242.463-.32.18-.076.379-.115.599-.115.213 0 .405.042.578.127.172.084.319.194.44.33.12.135.216.295.285.478.07.183.112.374.127.572zM39.739 13v-2.706c0-.315.04-.594.121-.836.08-.242.19-.446.33-.61.14-.166.303-.29.49-.375.187-.084.386-.126.599-.126.088 0 .178.005.27.017.091.01.181.023.269.038v-1.21l-.17-.022c-.056-.007-.156-.011-.303-.011-.19 0-.378.037-.561.11-.183.073-.35.17-.5.292-.15.12-.28.254-.386.401-.106.147-.177.297-.214.451h-.022v-1.1h-1.177V13h1.254zm3.905-6.666V5.146H42.39v1.188h1.254zm0 6.666V7.313H42.39V13h1.254zm6.116-6.666V5.146h-1.254v1.188h1.254zM46.636 13V8.248h1.067v-.935h-1.067V6.73c0-.235.06-.392.181-.473.121-.08.266-.121.435-.121.125 0 .233.005.325.016.091.011.177.028.258.05v-.979c-.183-.051-.477-.077-.88-.077-.205 0-.401.02-.588.06-.188.04-.354.121-.501.242-.147.121-.264.294-.352.517-.088.224-.132.516-.132.875v.473h-.935v.935h.935V13h1.254zm3.124 0V7.313h-1.254V13h1.254zm3.872.154c.308 0 .603-.042.886-.127.282-.084.537-.208.764-.373.227-.165.422-.369.583-.611.161-.242.275-.517.341-.825h-1.188c-.11.315-.277.552-.5.71-.224.157-.52.236-.886.236-.264 0-.491-.046-.682-.137-.19-.092-.348-.215-.473-.369s-.218-.334-.28-.539c-.063-.205-.094-.418-.094-.638h4.18c.051-.425.024-.838-.083-1.238-.106-.4-.276-.753-.511-1.061-.235-.308-.53-.556-.886-.743-.355-.186-.757-.28-1.204-.28-.425 0-.807.08-1.144.242-.337.161-.625.38-.863.655-.239.275-.422.594-.55.957-.129.363-.193.746-.193 1.149 0 .44.06.843.182 1.21.12.367.3.682.538.946.239.264.53.47.875.616.345.147.74.22 1.188.22zm1.397-3.498h-2.926c.007-.213.05-.41.127-.594.077-.183.18-.343.308-.478.128-.136.282-.242.462-.32.18-.076.379-.115.599-.115.213 0 .405.042.578.127.172.084.319.194.44.33.12.135.216.295.286.478.07.183.111.374.126.572zm4.598 3.498c.36 0 .7-.072 1.023-.214.323-.143.568-.38.737-.71h.022V13h1.188V5.146h-1.254V8.05h-.022c-.095-.154-.215-.288-.357-.402-.143-.113-.3-.207-.468-.28-.169-.073-.345-.127-.528-.16-.183-.032-.363-.049-.539-.049-.308 0-.61.057-.907.17-.297.114-.561.292-.792.534-.231.242-.417.55-.556.924-.14.374-.209.818-.209 1.331 0 .425.055.823.165 1.194.11.37.275.69.495.962.22.271.497.486.83.644.334.157.725.236 1.172.236zm.165-.99c-.271 0-.506-.055-.704-.165-.198-.11-.361-.257-.49-.44-.128-.183-.223-.392-.285-.627-.063-.235-.094-.473-.094-.715 0-.257.027-.508.082-.754.055-.245.147-.465.276-.66.128-.194.293-.352.495-.473.201-.12.449-.181.742-.181.484 0 .867.176 1.15.528.282.352.423.843.423 1.474 0 .25-.031.493-.093.732-.063.238-.158.452-.286.643-.129.19-.294.345-.495.462-.202.117-.442.176-.721.176z"
              />
            </g>
            <g>
              <path
                fill="#000"
                d="M12.83 7.42H8.387c.196-.911 1.03-1.512 2.199-1.512 1.113.009 1.909.535 2.246 1.512zm2.817 1.99V9.1c0-3.55-2.068-5.747-5.1-5.747-1.29 0-2.554.526-3.508 1.493-.945.949-1.45 2.17-1.45 3.503 0 1.353.476 2.564 1.393 3.532.974 1.033 2.143 1.53 3.594 1.53 2.124 0 3.696-1.014 4.622-3.005h-3.079c-.42.376-.888.526-1.45.526-1.216 0-1.956-.526-2.199-1.55l7.177.029zM22.88 7.42h-4.445c.197-.911 1.03-1.512 2.2-1.512 1.113.009 1.918.535 2.245 1.512zm2.826 1.99V9.1c0-3.55-2.068-5.747-5.1-5.747-1.291 0-2.554.526-3.509 1.493-.945.949-1.45 2.17-1.45 3.503 0 1.353.477 2.564 1.394 3.532.973 1.033 2.143 1.53 3.593 1.53 2.124 0 3.696-1.014 4.623-3.005h-3.079c-.42.376-.889.526-1.45.526-1.216 0-1.956-.526-2.199-1.55l7.177.029zM1.16 5.656v7.678h3.1V5.656h1.265V3.45H4.249v-.243c0-.904.222-1.195 1.181-1.195h.084V.019C5.335.02 5.166 0 5.02 0c-2.647.01-3.88.972-3.88 3.08 0 .108.02.244.02.37H0v2.206h1.16zM26.87 5.684v7.728h3.142V5.684h1.282V3.463h-1.282v-.245c0-.91.224-1.203 1.197-1.203h.085V.02c-.182 0-.352-.02-.502-.02-2.682 0-3.932.968-3.932 3.091 0 .108.021.245.021.372h-1.175v2.22h1.165zM38.571 8.382c0 1.298-1.011 2.35-2.248 2.35-1.217 0-2.247-1.052-2.247-2.35 0-1.316 1.011-2.369 2.247-2.369 1.237 0 2.248 1.044 2.248 2.37m2.782-.076c0-1.297-.543-2.623-1.564-3.572-.955-.912-2.145-1.382-3.531-1.382-1.293 0-2.557.526-3.512 1.495-.946.95-1.452 2.171-1.452 3.506s.478 2.567 1.396 3.525c.974 1.035 2.144 1.533 3.596 1.533 1.433 0 2.641-.517 3.615-1.495.974-.978 1.452-2.172 1.452-3.61"
                transform="translate(-32 -206) translate(0 124) translate(32 82) translate(72 15)"
              />
              <path
                fill="#FD0"
                d="M44.881 5.924c-1.263-.078-2.273-1.067-2.352-2.313h5.53v-.06c0-2.124-1.387-3.551-3.3-3.551-2.028 0-3.406 1.453-3.406 3.344 0 1.789 1.422 3.362 3.362 3.362 1.413 0 2.528-.765 3.133-2.192h-.553c-.404.834-1.264 1.41-2.256 1.41-.07.008-.114.008-.158 0"
                transform="translate(-32 -206) translate(0 124) translate(32 82) translate(72 15)"
              />
              <path
                fill="#FD0"
                d="M52.528 5.924c-1.263-.078-2.273-1.067-2.352-2.313h5.53v-.06c0-2.124-1.387-3.551-3.3-3.551C50.378 0 49 1.453 49 3.344c0 1.789 1.422 3.362 3.362 3.362 1.413 0 2.528-.765 3.133-2.192h-.553c-.404.834-1.264 1.41-2.256 1.41-.07.008-.114.008-.158 0"
                transform="translate(-32 -206) translate(0 124) translate(32 82) translate(72 15) matrix(-1 0 0 1 104.706 0)"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const Reviews = (props) => {
  const minTablet = useMediaQuery("(min-width: 768px)");

  const reviewCount = {
    marginLeft: "0.375rem",
    marginTop: ".0625rem"
  };
  const reviewTitle = {
    fontSize: "0.9375rem",
    margin: "0.75rem 0"
  };
  const feefoTitleSection = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: minTablet ? null : "0 1rem"
  };
  const reviewOverview = {
    display: "flex",
    padding: minTablet ? "0.75rem" : "0.75rem 1rem",
    background: props.utilities.backgroundAccent
  };
  const ratingOverviewImage = {
    width: "2.5rem",
    height: "3.75rem"
  };
  const ratingOverviewCount = {
    display: "flex",
    alignItems: "center"
  };
  const reviewOverViewDetails = {
    marginLeft: "0.75rem"
  };
  const mutedText = {
    color: props.text.muted
  };

  const individualReviewContainer = {
    padding: minTablet ? "1rem 0" : "1rem"
  };
  const reviewerDetails = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "100%"
  };
  const reviewCopy = {
    marginTop: "0.625rem"
  };

  const spaceAboveReviews = {
    marginBottom: "1rem"
  };
  return (
    <div className="product-ribbon-container">
      <hr style={{ ...props.hr, ...spaceAboveReviews }} />
      <div style={feefoTitleSection}>
        <h2
          style={{ ...props.MediumFont, ...props.CasingChange, ...reviewTitle }}
        >
          Reviews
        </h2>
        {props.feefoBrandLogo}
      </div>
      <div style={reviewOverview}>
        <img style={ratingOverviewImage} src={props.product.image} />
        <div style={reviewOverViewDetails}>
          <div style={ratingOverviewCount} className="star-rating">
            <ReviewStar
              reviewStar={props.reviewStar}
              rating={props.product.rating}
            />
            <span style={reviewCount}>{props.product.rating} / 5</span>
          </div>
          <p style={mutedText}>Based On 1 Review</p>
          <p>
            Feedback For
            <span style={props.MediumFont}> {props.product.title}</span>
          </p>
        </div>
      </div>
      <div style={individualReviewContainer}>
        <div style={reviewerDetails}>
          <p>1 Jan 2021</p>
          <p style={props.MediumFont}>Ashley</p>
        </div>
        <div style={reviewerDetails}>
          <ReviewStar
            reviewStar={props.reviewStar}
            rating={props.product.rating}
          />
          <p style={mutedText}>From Leicestershire</p>
        </div>
        <p style={reviewCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien
          arcu, lacinia sollicitudin vehicula ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam sapien arcu, lacinia sollicitudin vehicula
          ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        {feefoInline}
      </div>
    </div>
  );
};
