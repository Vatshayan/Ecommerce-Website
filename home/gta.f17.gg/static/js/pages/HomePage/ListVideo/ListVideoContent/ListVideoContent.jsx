import { Grid, TablePagination } from "@mui/material";
import { VideoYoutube } from "components";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListVideoContent.scss";

const PAGE_SIZE = 4;
const ListVideoContent = ({ videoIds }) => {
  const [selectedVideo, setSelectedVideo] = useState(videoIds[0]);
  const [listCurrentVideo, setListCurrentVideo] = useState([]);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const startIndex = newPage * PAGE_SIZE - 1;
    setListCurrentVideo(
      videoIds.slice(startIndex > 0 ? startIndex : 0, PAGE_SIZE)
    );
  };
  useEffect(() => {
    setSelectedVideo(videoIds[0]);
    setPage(0);
    setListCurrentVideo(videoIds.slice(0, PAGE_SIZE));
  }, [videoIds]);

  return (
    <div className="videos">
      <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
        <Grid item xs={2} sm={2}>
          <div className="list-video-thumbnail">
            {listCurrentVideo.map((videoId) => (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={videoId}
                key={videoId}
                onClick={() => setSelectedVideo(videoId)}
              />
            ))}
            <TablePagination
              component="div"
              count={videoIds.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={PAGE_SIZE}
              rowsPerPageOptions={[]}
              labelRowsPerPage=""
            />
          </div>
        </Grid>
        <Grid item xs={10} sm={10}>
          <VideoYoutube videoId={selectedVideo} />
        </Grid>
      </Grid>
    </div>
  );
};
ListVideoContent.propTypes = {
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ListVideoContent;
