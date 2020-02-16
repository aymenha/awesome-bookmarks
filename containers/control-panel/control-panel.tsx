import React, { FC, useState } from "react";
import { v4 } from "uuid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core";
import BookmarkForm from "../../components/bookmark-form/bookmark-form";
import { resetDb } from "../../db";
import { generateBookmark } from "../../mockedData";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const createBookmark = async (db: PouchDB.Database, bookmark) => {
  await db.put(
    { ...bookmark, _id: v4(), createdAt: new Date().toISOString() },
    {}
  );
};

const clearDb = async () => {
  await resetDb();
};

interface Props {
  db: PouchDB.Database;
}
const ControlPanel: FC<Props> = ({ db }) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [bookmark, setBookmark] = useState(generateBookmark());
  const classes = useStyles();
  return (
    <React.Fragment>
      <ButtonGroup color="primary">
        <Button
          onClick={() => {
            setBookmark(generateBookmark());
            setIsAddDialogOpen(true);
          }}
        >
          create bookmark
        </Button>
        <Button color="secondary" onClick={() => clearDb()}>
          delete DB
        </Button>
      </ButtonGroup>
      <BookmarkForm
        data={bookmark}
        isOpen={isAddDialogOpen}
        onAdd={async bookmark => {
          await createBookmark(db, bookmark);
          setIsAddDialogOpen(false);
        }}
        onCancel={() => setIsAddDialogOpen(false)}
      ></BookmarkForm>
    </React.Fragment>
  );
};

export default ControlPanel;
