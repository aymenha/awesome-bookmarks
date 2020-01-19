import React from "react";
import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import ControlPanel from "../components/control-panel/control-panel";
import { bookmarks } from "../mockedData";

const Home = () => (
  <Container fixed>
    <br />
    <br />
    <Grid container direction="row" spacing={3}>
      <Grid container item sm={2}>
        <ControlPanel />
      </Grid>
      <Grid container item spacing={3} sm>
        {bookmarks.map((b, index) => (
          <Grid item key={index} sm={true}>
            <BookmarkCard
              tags={b.tags}
              title={b.title}
              url={b.url}
            ></BookmarkCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Container>
);

export default Home;
