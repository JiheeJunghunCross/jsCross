import React from "react";
import { AppBar, Toolbar, Typography, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  Appbar: {
    backgroundColor: "#E2E5EA",
    left: 0,
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.Appbar}>
        <Toolbar>
          <Button varient="primary">
            <Icon className="far fa-calendar-alt"></Icon>
          </Button>
          <Button varient="primary">Test2</Button>
          <Button varient="primary">Test3</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
