import React, { FC, memo } from "react";
import deepEqual from "deep-equal";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import useSharedStyles from "../../styles";
import Tags from "../tags/tags";
import Title from "./title";
import SourceIcon from "./source-icon";
import ShareButton from "./share-button";
import Url from "./url";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    border: "2px solid transparent",
    "&:hover": {
      border: "2px solid #6aaee8"
    }
  },
  content: {
    textAlign: "initial",
    width: "100%",
    display: "block"
  }
});

type BookmarkCard = {
  tags: Tags["tags"];
  title: string;
  url: string;
  onClick?: (e: React.MouseEvent) => void;
};
const BookmarkCard: FC<BookmarkCard> = ({ tags, title, url, onClick }) => {
  console.log("rendering card");
  const classes = { ...useSharedStyles(), ...useStyles() };
  return (
    <div onClick={onClick}>
      <Card className={`${classes.hoverable} ${classes.root}`}>
        <ButtonBase className={classes.content}>
          <CardContent>
            {tags && <Tags tags={tags} />}
            <Title>{title}</Title>
            <Url>{url}</Url>
          </CardContent>
        </ButtonBase>
        <Divider></Divider>
        <CardActions>
          <SourceIcon />
          <ShareButton />
        </CardActions>
      </Card>
    </div>
  );
};

export default memo(BookmarkCard, (pre, cur) =>
  deepEqual(pre, cur, { strict: false })
);
