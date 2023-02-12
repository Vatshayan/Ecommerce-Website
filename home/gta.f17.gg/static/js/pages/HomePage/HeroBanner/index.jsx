import React from "react";
import Images from "assets/images";
import "./HeroBanner.scss";
import { Container } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import { ActionButton } from "../../../components";

function HeroBanner() {
  return (
    <div id="home" className="hero-banner">
      <img src={Images.TextHeroBanner} alt="F17" className="text-banner" />
      <Container maxWidth="lg">
          <div className='action-scope'>
              <ActionButton />
          </div>
        <div id="scroll-down-animation">
          <Scroll to="guides">
            <span className="mouse">
              <span className="move"></span>
            </span>
          </Scroll>
        </div>
      </Container>
    </div>
  );
}

export default HeroBanner;
