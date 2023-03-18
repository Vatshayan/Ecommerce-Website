import Images from "assets/images";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";
import "./Mobile.scss";
import {Container, Grid} from "@mui/material";
import {Link as Scroll} from "react-scroll";
import {navbarItems} from "const";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const openToggleMenu = () => {
    const elements = Array.from(document.getElementsByClassName("container"));
    elements.map(element=>{element.classList.add('toggled')})

    setToggleMenu(true)
  }
  const closeToggleMenu = () => {
    const elements = Array.from(document.getElementsByClassName("container"));
    elements.map(element=>{element.classList.remove('toggled')})

    setToggleMenu(false)
  }
  const listNavbarItem = navbarItems.map((item, index) => {
    if (item.isLink)
      return (
        <Link to={item.path} key={index + 10}>
          <p className={item.isFirstEffect && "effects"} value={item.isFirstEffect && item.label}>{item.label}</p>
        </Link>
      );
    return (
      <Scroll
        activeClass="active"
        key={index}
        to={item.path}
        onClick={closeToggleMenu}
      >
        <p>{item.label}</p>
      </Scroll>
    );
  });
  return (
    <Container maxWidth="lg">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <Link to={"/"}>
              <img src={Images.LOGO} alt="F17" />
            </Link>
          </div>
          <div className="gpt3__navbar-links_container">{listNavbarItem}</div>
        </div>

        <div className={`gpt3__navbar-menu ${toggleMenu && "toggled"}`}>
          <div className="btn">
          {toggleMenu ? (
            <CloseIcon
              size={27}
              sx={{color: "white"}}
              onClick={closeToggleMenu}
            />
          ) : (
            <MenuIcon
              sx={{color: "white"}}
              size={27}
              onClick={openToggleMenu}
            />
          )}
          </div>

          {toggleMenu && (
            <div className="gpt3__navbar-menu_container mobile-nav toggled">
              <div className="gpt3__navbar-menu_container-links ul">
                {listNavbarItem}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
