import React from 'react';
import './Editor.css';

import Diagram from '../diagram/Diagram.js';
import TextEditor from '../texteditor/TextEditor';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'stretch',
        overflowX: 'auto',
    },
}));

export default function Editor(props) {
    const {content, format} = props;
    const classes = useStyles();

    const renderEmptyMessage = () => (
        <Typography paragraph>Select a file to view</Typography>
    );

    return (
        <main className={classes.content}>
            {!content
                ? renderEmptyMessage()
                : format === 'diagram'
                    ? <Diagram {...props}></Diagram>
                    : <TextEditor {...props}></TextEditor>}
        </main>
    );
}
