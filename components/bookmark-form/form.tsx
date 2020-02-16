import React, { FC } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { Bookmark } from "./bookmark-form";

const useStyles = makeStyles({
  input: {
    "&:not(:first-of-type):not(:last-of-type)": {
      margin: "1em 0"
    }
  }
});

interface Props {
  data: Bookmark;
  onChange?: (data: Partial<Bookmark>) => void;
}
const Form: FC<Props> = ({ data, onChange }) => {
  const classes = useStyles();
  const onChangeHandler = e => {
    if (!onChange) return;
    const key = e.target.name;
    const value = e.target.value;
    switch (key) {
      case "tags":
        onChange({ [e.target.name]: e.target.value.split(",") });
        return;
      default:
        onChange({ [e.target.name]: e.target.value });
        return;
    }
  };
  return (
    <form noValidate autoComplete="off">
      <TextField
        className={classes.input}
        fullWidth
        label="Title"
        name="title"
        variant="filled"
        value={data.title}
        onChange={onChangeHandler}
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Url"
        name="url"
        variant="filled"
        value={data.url}
        onChange={onChangeHandler}
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Tags"
        name="tags"
        variant="filled"
        value={data.tags?.join()}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default Form;
