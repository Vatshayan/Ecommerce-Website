import React, { useState } from "react";
import { Element } from "react-scroll";
import { Carousel } from "3d-react-carousal";
import "./Features.scss";
import Images from "assets/images";
import FeatureDetail from "./FeatureDetail";
import { Container } from "@mui/material";

let slides = Images.Features.map((image, index) => (
  <img key={index} src={image.image} alt={image.content} />
));

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const onSlideChange = function (index) {
    setSelectedImage(index);
  };
  return (
    <Element name="features" className="element">
      <div className="wrap-feature">
        <Carousel     
          slides={slides} 
          onSlideChange={onSlideChange} />
        <Container maxWidth="lg">
          <p style={{}}>{Images.Features[selectedImage].content}</p>
        </Container>
        <div className="divider">
          <div className="item pink"></div>
          <div className="item blue"></div>
          <div className="item cyan"></div>
        </div>
      </div>
      <FeatureDetail />
    </Element>
  );
};

export default Features;
