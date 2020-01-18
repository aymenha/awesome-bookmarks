import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";

const useSyles = makeStyles({
  small: {
    width: 30,
    height: 30
  }
});

const SourceIcon = () => {
  const classes = useSyles();
  return (
    <Avatar sizes="small" variant="rounded" className={classes.small}>
      Hi
    </Avatar>
  );
};

export default SourceIcon;
