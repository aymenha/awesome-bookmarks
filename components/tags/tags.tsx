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
    }
  }
});

type Tags = {
  tags: string[];
};
const Tags: FC<Tags> = ({ tags }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} className={classes.tag} />
      ))}
    </div>
  );
};

export default Tags;
