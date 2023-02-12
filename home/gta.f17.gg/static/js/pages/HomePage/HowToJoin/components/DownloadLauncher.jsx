import React from 'react'
import './Card.scss'
import PropTypes from "prop-types";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DownloadLauncher = ({onClick, isSelected}) => {
  const downloadHandle = () => {
    window.open("https://runtime.fivem.net/client/FiveM.exe")
  }
  return (
    <div className={`card card2 ${isSelected}`} onClick={onClick}>
      <div className='download-launcher'>
        <div className="step-download">
          <p className="step">Bước 2</p>
          <p className="step-title">
            Tải FiveM
          </p>
        </div>
        <div className="action-download">
          <p className="step-content">Cài đặt FiveM và tham gia ngay thôi!</p>
          <div className="button-action" onClick={downloadHandle}>
            <span>Tải xuống</span>  <ArrowDownwardIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div >
  )
}
DownloadLauncher.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.string
};

export default DownloadLauncher