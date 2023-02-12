import './Event.scss'
import React from "react";
import {Container} from "@mui/material";

const EventComponent = () => {
    return (
      <Container>
        <div className="MuiContainer-root MuiContainer-maxWidthXl how-to-start-wrap css-1ekb41w">
          <div className="how-to-start-header">
            <p className="text-1">Không biết ?</p>
            <p className="text-2">
              <span>Hướng dẫn</span> khởi nghiệp
            </p>
            <p className="text-3">Tại thành phố F17City</p>
          </div>
          <a className="btn--link-to-event" href="https://docs.google.com/document/d/1zbJArSpriLW6yJEQiP3BAeVnP9lIp58-2sN0AnyMRl4/" target="_blank">
            <p>Hành tẩu chỉ<br/>trong 1 nốt</p>
            <span className="MuiTouchRipple-root css-w0pj6f"></span>
          </a>
          </div>
      </Container>
    )
}

export default EventComponent