import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import Tag from "./tag";

const useStyles = makeStyles({
  root: {
    marginBottom: -5
  },
  tag: {
    cursor: "pointer",
    marginBottom: 5,
    "&:not(:last-of-type)": {
      marginRight: 5
    },
    "&:hover": {
      borderColor: "#6aaee8"
    }
  }
});

type Tags = {
  tags: string[];
  className?: string;
  onClick?: (tag: string) => void;
};
const Tags: FC<Tags> = ({ tags, className, onClick }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className ? className : ""}`}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          label={tag}
          className={classes.tag}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Tags;
