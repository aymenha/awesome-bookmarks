import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import Tag from "./tag";

const useStyles = makeStyles({
  tag: {
    cursor: "pointer",
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
    <React.Fragment>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} className={classes.tag} />
      ))}
    </React.Fragment>
  );
};

export default Tags;
