import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {animateScroll} from "react-scroll";
import "./MainLayout.scss";

const scroll = animateScroll;

const scrollToTop = () => {
  scroll.scrollToTop();
};
function MainLayout(props) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      {props.children}
      {showButton && (
        <div id="back-to-top" onClick={scrollToTop}>
          <ExpandLessIcon className="icon-back-to-top" />
        </div>
      )}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
