import React, {useState, useEffect} from 'react';
import './App.css';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideBar from './sidebar/SideBar.js';
import TopBar from './topbar/TopBar.js';
import Editor from './editor/Editor.js';

import io from 'socket.io-client';

const socket = io('http://localhost:3001');
socket.on('connected', msg => console.log('connected', msg));

let onReflection = () => {};
socket.on('reflection', reflection => {
  console.debug(`» Reflection of ${reflection.source}`, reflection);
  onReflection(reflection);
});

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

  const [file, setFile] = useState();
  const [format, setFormat] = useState('text');
  const [reflection, setReflection] = useState({});

  // Invoked with each reflection that is received.
  onReflection = setReflection;

  // Invoked when a file is selected for viewing.
  const onFileSelect = file => {
    setFile(file);
  };

  // Invoked when a viewing format is selected.
  const onFormatSelect = format => {
    setFormat(format);
  };

  useEffect(() => {
    if (!file) return;

    console.debug(`« Reflect ${format} of ${file}`);
    socket.emit('reflect', {path: file, type: format});
  }, [file, format]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <div className={classes.main}>
        <SideBar socket={socket} file={file} format={format} onFileSelect={onFileSelect} onFormatSelect={onFormatSelect} />
        <Editor socket={socket} path={reflection.source} content={reflection.content} format={format} />
      </div>
    </div>
  );
}

export default App;
