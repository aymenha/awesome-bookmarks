import React, { useState, useEffect, FC } from "react";
import Container from "@material-ui/core/Container";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import BookmarkCard from "../components/bookmark-card/bookmark-card";
import ControlPanel from "../components/control-panel/control-panel";
import BookmarkForm from "../components/bookmark-form/bookmark-form";

type Bookmark = {
  title: string;
  url: string;
  tags: string[];
};
const getAllBookmarks = async (db: PouchDB.Database): Promise<Bookmark[]> => {
  await db.createIndex({
    index: {
      fields: ["createdAt"]
    }
  });
  const data = (await db.find({
    selector: {},
    sort: [{ createdAt: "desc" }]
  })) as PouchDB.Find.FindResponse<Bookmark>;

  if (data.docs.length === 0) return [];
  return data.docs.map(doc => {
    const { title, url, tags } = doc!;
    return { title, url, tags };
  });
};

const Home: FC<{ db: PouchDB.Database }> = ({ db }) => {
  const [cards, setCards] = useState<Bookmark[]>([]);

  useEffect(() => {
    let changesRef: PouchDB.Core.Changes<any>;
    (async () => {
      const bookmarks = await getAllBookmarks(db);
      console.log(bookmarks);
      setCards(bookmarks);
      changesRef = db.changes({
        live: true,
        include_docs: false,
        since: "now"
      });
      changesRef.on("change", async _ => {
        const bookmarks = await getAllBookmarks(db);
        setCards(bookmarks);
      });
    })();
    return () => changesRef.cancel();
  }, []);

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
