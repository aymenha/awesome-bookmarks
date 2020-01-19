import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import useSharedStyles from "../../styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 7,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: 20
  }
});

const Title: FC = ({ children }) => {
  const classes = { ...useSharedStyles(), ...useStyles() };
  return (
    <Typography
      variant="h5"
      component="h2"
      className={`${classes.noSelection} ${classes.root}`}
    >
      {children}
    </Typography>
  );
};

export default Title;
