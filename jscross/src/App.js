import React from "react";
import { AppBar, Toolbar, Typography, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { loadCSS } from "fg-loadcss";

const useStyles = makeStyles((theme) => ({
  root: {},
  Appbar: {
    backgroundColor: "#E2E5EA",
    left: 0,
    display: "fixed",
    width: "50px",
    height: "100%",
  },
  Toolbar: {
    display: "flex",
    flexDirection: "column",
    padding: "10px, 10px, 0px, 10px",
    space: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className="App">
      <AppBar className={classes.Appbar}>
        <Toolbar className={classes.Toolbar}>
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
