import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import useSharedStyles from "../../styles";
import Tags from "../tags/tags";
import Title from "./title";
import SourceIcon from "./source-icon";
import ShareButton from "./share-button";

const useStyles = makeStyles({
  root: {
    maxWidth: 500
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
};
export const BookmarkCard: FC<BookmarkCard> = ({ tags, title }) => {
  const classes = { ...useSharedStyles(), ...useStyles() };
  return (
    <Card className={`${classes.hoverable} ${classes.root}`}>
      <ButtonBase className={classes.content} component={CardContent}>
        <Tags tags={tags} />
        <Title>{title}</Title>
        <Typography
          color="textSecondary"
          variant="body2"
          className={classes.noSelection}
        >
          https://bookmark-url.com
        </Typography>
      </ButtonBase>
      <Divider></Divider>
      <CardActions>
        <SourceIcon />
        <ShareButton />
      </CardActions>
    </Card>
  );
};
