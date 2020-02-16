import React, { useState, useEffect, FC } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import ControlPanel from "../containers/control-panel/control-panel";
import {
  Bookmark,
  getAllBookmarks,
  getByTag,
  getByTitle
} from "../api/bookmark";
import { subscribeToChanges } from "../db";
import SearchBar from "../components/search-bar.tsx/search-bar";

const Home: FC<{ db: PouchDB.Database }> = ({ db }) => {
  const [cards, setCards] = useState<Bookmark[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let changesRef: PouchDB.Core.Changes<any>;
    (async () => {
      await fetchBookmarks();
      changesRef = subscribeToChanges(db, async () => await fetchBookmarks());
    })();
    return () => changesRef.cancel();
  }, []);

  const fetchBookmarks = async () => {
    setSearchQuery("");
    const bookmarks = await getAllBookmarks(db);
    setIsFiltered(false);
    setCards(bookmarks);
  };

  const fetchBookmarksByTag = async (tag: string) => {
    const bookmarks = await getByTag(db, tag);
    setCards(bookmarks);
    setIsFiltered(true);
  };

  const fetchBookmarksByTitle = async (query: string) => {
    setSearchQuery(query);
    if (query === "") return fetchBookmarks();
    const bookmarks = await getByTitle(db, query);
    setCards(bookmarks);
    setIsFiltered(true);
  };

  return (
    <Container fixed>
      <Box my={3}>
        <SearchBar
          onSearch={fetchBookmarksByTitle}
          query={searchQuery}
        ></SearchBar>
      </Box>
      <Box my={3}>
        <ControlPanel db={db} />
        {isFiltered && (
          <Box display="inline" ml={1}>
            <ButtonGroup color="secondary" variant="outlined">
              <Button onClick={fetchBookmarks}>clear filter</Button>
            </ButtonGroup>
          </Box>
        )}
      </Box>

      <Box my={3}>
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
                  onTagClick={fetchBookmarksByTag}
                ></BookmarkCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
