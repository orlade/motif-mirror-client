import React from 'react';
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import './TextEditor.css';

import {makeStyles} from '@material-ui/core/styles';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        fontSize: '10pt',
        fontFamily: 'monospace',
        overflowY: 'scroll',
        whiteSpace: 'pre',
    },
    editor: {
        flexGrow: 1,
        overflowX: 'hidden',
    }
}));

const onChange = (newValue, e) => {
    console.log('onChange', e);
}


export default function TextEditor({content}) {
    const classes = useStyles();

    return (
        <CodeMirror
            className={classes.editor}
            height="100%"
            options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true,
            }}
            value={typeof content === 'string' ? content : JSON.stringify(content)}
            onChange={onChange}
        />
    );
}
