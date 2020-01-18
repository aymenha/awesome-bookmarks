import React, { FC } from "react";
import Chip from "@material-ui/core/Chip";
import useStyles from "../../styles";

type Tag = {
  label: string;
  className: string;
};
const Tag: FC<Tag> = ({ label, className }) => {
  const classes = useStyles();
  return (
    <Chip
      className={`${className} ${classes.noSelection}`}
      label={label}
      variant="outlined"
      size="small"
    />
  );
};

export default Tag;
