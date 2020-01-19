import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const ControlPanel = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Button>hello world</Button>
    </Card>
  );
};

export default ControlPanel;
