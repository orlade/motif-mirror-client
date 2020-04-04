import React from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideBar from './sidebar/SideBar.js';
import TopBar from './topbar/TopBar.js';
import Editor from './editor/Editor.js';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <div className={classes.main}>
        <SideBar />
        <Editor />
      </div>
    </div>
  );
}

export default App;
