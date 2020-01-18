import React from "react";
import Container from "@material-ui/core/Container";
import { name, internet, random } from "faker";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";

const itemsArray = new Array(
  random.number({
    min: 5,
    max: 15
  })
).fill(true);

const generateTags = () =>
  new Array(
    random.number({
      min: 1,
      max: 5
    })
  )
    .fill(true)
    .map(_ => random.word());

const mockData = itemsArray.map(_ => {
  return {
    title: name.title(),
    url: internet.url(),
    tags: generateTags()
  };
});

const Home = () => (
  <Container>
    <br />
    <br />
    <Grid container spacing={4}>
      {mockData.map((b, index) => (
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
