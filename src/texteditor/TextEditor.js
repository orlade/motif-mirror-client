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

const hashCode = string => {
    let hash = 0, i, chr;
    for (i = 0; i < string.length; i++) {
        chr = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export default function TextEditor({socket, path, content}) {
    const classes = useStyles();

    const onChange = (newContent, e) => {
        // Ignore "changes" when changing to a new file.
        if (newContent === content) {
            return;
        }
        if (!socket) throw new Error('Not connected');

        const hash = hashCode(newContent);
        console.debug(`« Saving file ${path} (#${hash})...`);
        socket.emit('save', {uri: path, content: newContent, hash});
    }

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
            onChange={(mirror, e) => onChange(mirror.getValue(), e)}
        />
    );
}
