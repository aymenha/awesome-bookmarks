import React from "react";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { makeStyles } from "@material-ui/core";

const useSyles = makeStyles({
  root: {
    cursor: "pointer",
    marginLeft: "auto !important"
  }
});

const ShareButton = () => {
  const classes = useSyles();
  return <ShareOutlinedIcon className={classes.root} />;
};

export default ShareButton;
