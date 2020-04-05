import React from 'react';
import './TextEditor.css';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        fontSize: '10pt',
        fontFamily: 'monospace',
        overflowY: 'scroll',
        whiteSpace: 'pre',
    },
}));

export default function TextEditor({content}) {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {typeof content === 'string' ? content : JSON.stringify(content)}
        </main>
    );
}
