import MainLayout from "layout/MainLayout";
import React from "react";
import Images from "assets/images";
import "./Payment.scss";
import { Container } from "@mui/material";
import PaymentForm from "./Form"
import {Link} from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment-zone">
      <Container maxWidth="lg">
          <div className="gpt3__navbar">
              <div className="gpt3__navbar-links">
                  <div className="gpt3__navbar-links_logo">
                      <Link to={"/"}>
                          <img src={Images.LOGO} alt="F17" />
                      </Link>
                  </div>
              </div>
          </div>
      </Container>
      <div
        className="payment"
        style={{
          backgroundImage: `url(${Images.BgBanner})`,
        }}
      >
        <Container maxWidth="lg">
          <div className="content">
            <PaymentForm />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Payment;
