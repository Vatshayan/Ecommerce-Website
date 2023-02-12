import {Container} from "@mui/material";
import Images from "assets/images";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="bg-linear">
        <div className="footer-content">
          <Container maxWidth="lg" >
            <p className="text" >Liên kết mạng xã hội</p>
            <div className="list-social">
              <a href="https://www.tiktok.com/@f17gg" target='_blank' rel="noreferrer">
                <img src={Images.Social.TikTok} alt="F17" />
              </a>
              <a href="https://bit.ly/f17city" target='_blank' rel="noreferrer">
                <img src={Images.Social.Discord} alt="F17" />
              </a>
              <a href="https://bit.ly/f17cityfb" target='_blank' rel="noreferrer">
                <img src={Images.Social.Facebook} alt="F17" />
              </a>
              <a href="https://bit.ly/f17cityyt" target='_blank' rel="noreferrer">
                <img src={Images.Social.Youtube} alt="F17" />
              </a>
            </div>
          </Container>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
