import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Search from "./search";

const useStyles = makeStyles({
  root: {
    // width: "100%"
    width: 250
  }
});

const ControlPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button>hello world</Button>
      <Search></Search>
    </div>
  );
};

export default ControlPanel;
