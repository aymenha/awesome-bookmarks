import { Fragment, useState } from "react";
import { v4 } from "uuid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { generateBookmark } from "../../mockedData";
import { resetDb } from "../../db";

const createBookmark = async (db: PouchDB.Database, bookmark) => {
  await db.put(
    { ...bookmark, _id: v4(), createdAt: new Date().toISOString() },
    {}
  );
};

const clearDb = async () => {
  await resetDb();
};

const BookmarkForm = ({ db }) => {
  const [bookmark, setBookmark] = useState(generateBookmark());
  return (
    <Fragment>
      <ButtonGroup color="primary" aria-label="contained primary button group">
        <Button onClick={() => setBookmark(generateBookmark())}>refresh</Button>
        <Button
          onClick={async () => {
            await createBookmark(db, bookmark);
            setBookmark(generateBookmark());
          }}
        >
          create bookmark
        </Button>
        <Button color="secondary" onClick={() => clearDb()}>
          delete DB
        </Button>
      </ButtonGroup>
      <div>
        <pre>{JSON.stringify(bookmark, null, 2)}</pre>
      </div>
    </Fragment>
  );
};

export default BookmarkForm;
