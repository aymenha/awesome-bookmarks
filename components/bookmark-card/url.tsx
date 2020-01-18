import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import useSharedStyles from "../../styles";

const Url: FC = ({ children }) => {
  const classes = useSharedStyles();
  return (
    <Typography
      color="textSecondary"
      variant="body2"
      className={classes.noSelection}
    >
      {children}
    </Typography>
  );
};

export default Url;
