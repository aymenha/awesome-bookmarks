import React, { FC } from "react";
import Chip from "@material-ui/core/Chip";
import useStyles from "../../styles";

type Tag = {
  label: string;
  className: string;
  onClick?: (tag: string) => void;
};
const Tag: FC<Tag> = ({ label, className, onClick }) => {
  const classes = useStyles();
  return (
    <Chip
      className={`${className} ${classes.noSelection}`}
      label={label}
      variant="outlined"
      size="small"
      onClick={() => (onClick ? onClick(label) : null)}
    />
  );
};

export default Tag;
