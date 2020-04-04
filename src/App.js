import React from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideBar from './sidebar/SideBar.js';
import TopBar from './topbar/TopBar.js';
import Editor from './editor/Editor.js';

import io from 'socket.io-client';

const socket = io('http://localhost:3001');
socket.on('connected', msg => console.log('connected', msg));

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
    overflowY: 'hidden',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <div className={classes.main}>
        <SideBar socket={socket} />
        <Editor />
      </div>
    </div>
  );
}

export default App;
