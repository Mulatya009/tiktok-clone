import React, { useState } from "react";
import "./Header.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import VideoUpload from "./VideoUpload";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOPen] = useState(false);

  return (
    <div className="header">
      <Modal open={open} onClose={() => setOPen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="header__upload">
            <center>
              <div className="header__modalLogo">
                <img
                  className="header__logoIcon"
                  src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg"
                  alt=""
                />
                <img
                  src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg"
                  alt=""
                />
              </div>
            </center>

            <VideoUpload />
          </form>
        </div>
      </Modal>

      <div className="header__logo">
        <img
          className="header__logoIcon"
          src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg"
          alt=""
        />
        <img
          src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg"
          alt=""
        />
      </div>

      <div className="header__right">
        <CloudUploadIcon
          onClick={() => setOPen(true)}
          className="header__uploadBtn"
          fontSize="large"
        />
        <Avatar
          alt="Cyrus Mulatya"
          src="https://lh3.googleusercontent.com/a-/AOh14GhGy1XYoXxF8VaTIv9zUoXkXCmvQysDy9yvioET=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
