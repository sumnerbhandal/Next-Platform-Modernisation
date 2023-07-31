import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Pagination, Thumbs]);

export const ProductImagery = (props) => {
  const small = useMediaQuery("(max-width:767px)");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const previewPerView = small ? 1.25 : 1;
  const previewPerView = 1;
  const [videoPlaying, setVideoPlaying] = useState(false);

  function videoButton(e) {
    const video = e.target;
    if (videoPlaying) {
      setVideoPlaying(false);
    } else {
      setVideoPlaying(true);
    }
  }

  function pauseVideo(e) {
    var videoCarousel = document.getElementById("videoCarousel");
    videoCarousel.pause();
    setVideoPlaying(false);
  }

  return (
    <div className="product-imagery">
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        pagination
        slidesPerView={previewPerView}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
        updateOnWindowResize={true}
        onSlideChange={() => pauseVideo()}
        navigation
      >
        <SwiperSlide key={`video-1`} id="video1" onClick={videoButton}>
          {videoPlaying ? (
            ""
          ) : (
            <img
              className="play-button"
              src="https://i.ibb.co/hC6jqY7/01-atom-icon-utility-button-play-3x.png"
            />
          )}

          <video
            src="https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-cold-looking-woman-concept-video-39874-large.mp4"
            controls
            controlsList="nodownload"
            id="videoCarousel"
          />
        </SwiperSlide>
        {props.product.pdpImages.map((image, index) => (
          <SwiperSlide key={`image-${index}`} id={index}>
            <img src={image} alt={props.product.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        navigation
        id="thumbs"
        slidesPerView={5}
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        initialSlide={0}
        watchSlidesProgress
        centeredSlides={false}
        loop={false}
        direction={"vertical"}
      >
        <SwiperSlide key={`video-1-thumb`} id="video1-thumb">
          <img className="videoThumb-bg" src={props.product.pdpImages[0]} />
          <img
            className="videoThumb"
            src="https://i.ibb.co/hC6jqY7/01-atom-icon-utility-button-play-3x.png"
          />
        </SwiperSlide>
        {props.product.pdpImages.map((image, index) => (
          <SwiperSlide key={`thumbs-${index}`} id={index}>
            <img src={image} alt={props.product.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
