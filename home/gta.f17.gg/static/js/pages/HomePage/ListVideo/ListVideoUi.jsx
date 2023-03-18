import { Container } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import "./ListVideo.scss";
import ListVideoContent from "./ListVideoContent/ListVideoContent";
import PropTypes from "prop-types";

const ListVideoUi = ({ videos }) => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <div className="list-video" id="subscribe">
      <div className="group-tab">
        <Container maxWidth="lg">
          {videos.map((item, index) => (
            <CustomButton
              key={item.key}
              className={selectTab === index ? "selected" : ""}
              onClick={() => setSelectTab(index)}
              size="large"
            >
              {item.label}
            </CustomButton>
          ))}
        </Container>
      </div>
      <Container maxWidth="lg">
        <ListVideoContent videoIds={videos[selectTab].videoIds} />
      </Container>
    </div>
  );
};

ListVideoUi.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      listId: PropTypes.string,
      label: PropTypes.string,
      videoIds: PropTypes.array,
    })
  ),
};
export default ListVideoUi;
