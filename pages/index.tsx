import React, { useState, useEffect, FC } from "react";
import Container from "@material-ui/core/Container";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import ControlPanel from "../components/control-panel/control-panel";
import BookmarkForm from "../components/bookmark-form/bookmark-form";
import { Bookmark, getAllBookmarks } from "../api/bookmark";
import { subscribeToChanges } from "../db";

const Home: FC<{ db: PouchDB.Database }> = ({ db }) => {
  const [cards, setCards] = useState<Bookmark[]>([]);

  useEffect(() => {
    let changesRef: PouchDB.Core.Changes<any>;
    (async () => {
      await fetchBookmarks();
      changesRef = subscribeToChanges(db, async () => await fetchBookmarks());
    })();
    return () => changesRef.cancel();
  }, []);

  const fetchBookmarks = async () => {
    const bookmarks = await getAllBookmarks(db);
    setCards(bookmarks);
  };

  return (
    <Container fixed>
      <br />
      <br />
      <BookmarkForm db={db}></BookmarkForm>
      <br />
      <br />
      <Grid container direction="row" spacing={3}>
        {/* <Grid container item sm={2}>
        <ControlPanel />
      </Grid> */}
        <Grid container item spacing={3} sm>
          {cards.map((b, index) => (
            <Grid item key={index} sm={true}>
              <BookmarkCard
                tags={b.tags}
                title={b.title}
                url={b.url}
                onClick={async () => {
                  console.log(`${b.title}`);
                }}
              ></BookmarkCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
