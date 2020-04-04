import React from 'react';
import './Editor.css';
import Diagram from '../diagram/Diagram.js';
import TextEditor from '../texteditor/TextEditor';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Editor({content, format}) {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {!content
                ? <Typography paragraph>Select a file to view</Typography>
                : format === 'diagram'
                    ? <Diagram content={content}></Diagram>
                    : <TextEditor content={content}></TextEditor>}
        </main>
    );
}
