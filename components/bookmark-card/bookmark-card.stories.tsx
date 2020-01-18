import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme";
import BookmarkCard from "./bookmark-card";

storiesOf("Components", module).add("Bookmark Card", () => (
  <ThemeProvider theme={theme}>
    <BookmarkCard
      tags={["React", "Library"]}
      title="Bookmark title"
      url="https://bookmark-url.com"
    />
  </ThemeProvider>
));
