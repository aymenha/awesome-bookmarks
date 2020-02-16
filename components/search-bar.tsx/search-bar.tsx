import React, { useState, FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

interface Props {
  query?: string;
  onSearch?: (query: string) => void;
}
const SearchBar: FC<Props> = ({ query, onSearch }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const onSearchHandler = e => {
    if (!onSearch) return;
    onSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <Paper>
        <Box className={classes.root}>
          <IconButton className={classes.iconButton}>
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search.."
            onChange={onSearchHandler}
            value={query}
          />
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            onClick={() => setExpanded(!expanded)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider orientation="horizontal" />
          <CardContent>
            <Typography paragraph>filters here: not implemented</Typography>
          </CardContent>
        </Collapse>
      </Paper>
    </React.Fragment>
  );
};

export default SearchBar;
