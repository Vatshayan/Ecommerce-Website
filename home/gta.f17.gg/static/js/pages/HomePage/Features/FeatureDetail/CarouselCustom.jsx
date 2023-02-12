import React, { useRef, useEffect } from "react";
import "./FeatureDetail.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";

const CarouselCustom = ({imgFeatures}) => {
  let carousel = useRef(null);

  useEffect(() => {
    if (carousel && carousel?.state?.selectedItem > 0) {
      carousel.state.selectedItem = 0;
      carousel.listRef.style.transform = "translate3d(0%, 0px, 0px)";
      carousel.listRef.style.transformDuration = "10ms";
    }
  }, [imgFeatures]);

  return (
    <Carousel
    ref={(el) => (carousel = el)}
    selectedItem={0}
    interval={6000}
    autoPlay={true}
    showThumbs={true}
    emulateTouch={true}
  >
    {imgFeatures.map((img, index) => (
      <div className="feature-image__imgs" key={index}>
        <img src={img} alt="feature-img"/>
      </div>
    ))}
  </Carousel>
  );
};

export default CarouselCustom;

CarouselCustom.propTypes = {
  imgFeatures: PropTypes.array,
};