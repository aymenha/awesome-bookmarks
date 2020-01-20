import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import ControlPanel from "../components/control-panel/control-panel";
import { bookmarks } from "../mockedData";

import Drawer from "@material-ui/core/Drawer";

import useStyles from "../styles";
import AppBar from "../components/appbar/appbar";

const Home = () => {
  const classes = useStyles();
  return (
    // <Grid container direction="row" spacing={3}>
    // <Grid container item sm={2} className={classes.boundary}>
    //   <ControlPanel />
    // </Grid>

    <React.Fragment>
      <CssBaseline />
      <AppBar></AppBar>
      <Drawer variant="permanent" anchor="left">
        <ControlPanel />
      </Drawer>

      <Container fixed>
        <Box mt={10}>
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
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
