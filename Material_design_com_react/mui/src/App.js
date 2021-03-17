import './App.css';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1
  }
}


class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes)
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
            </IconButton>
          </Toolbar>
        </AppBar>
        <p>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained">Without prop Color</Button>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(App);
