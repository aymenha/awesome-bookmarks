import { Fragment, useState, FC, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Form from "./form";

export interface Bookmark {
  title: string;
  url: string;
  tags?: string[];
}

interface Props {
  data: Bookmark;
  isOpen?: boolean;
  onAdd?: (data: Bookmark) => void;
  onCancel?: () => void;
}
const BookmarkForm: FC<Props> = ({ data, isOpen = true, onAdd, onCancel }) => {
  const [bookmark, setBookmark] = useState(data);

  useEffect(() => {
    setBookmark(data);
  }, [data]);

  return (
    <Fragment>
      <Dialog open={isOpen} onClose={() => {}}>
        <DialogTitle>Add Bookmark</DialogTitle>
        <DialogContent>
          <Form
            data={bookmark}
            onChange={data => setBookmark({ ...bookmark, ...data })}
          ></Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onAdd && onAdd(bookmark)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default BookmarkForm;
