import React, { FC } from "react";
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
    maxWidth: 500,
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
};
const BookmarkCard: FC<BookmarkCard> = ({ tags, title, url }) => {
  const classes = { ...useSharedStyles(), ...useStyles() };
  return (
    <Card className={`${classes.hoverable} ${classes.root}`}>
      <ButtonBase className={classes.content} component={CardContent}>
        <Tags tags={tags} />
        <Title>{title}</Title>
        <Url>{url}</Url>
      </ButtonBase>
      <Divider></Divider>
      <CardActions>
        <SourceIcon />
        <ShareButton />
      </CardActions>
    </Card>
  );
};

export default BookmarkCard;
