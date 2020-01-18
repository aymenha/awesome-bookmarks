import React from "react";
import Container from "@material-ui/core/Container";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import { bookmarks } from "../mockedData";

const Home = () => (
  <Container>
    <br />
    <br />
    <Grid container spacing={4}>
      {bookmarks.map((b, index) => (
        <Grid item key={index}>
          <BookmarkCard
            tags={b.tags}
            title={b.title}
            url={b.url}
          ></BookmarkCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Home;
