import React from 'react';
import './Diagram.css';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Diagram() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            diagram
        </main>
    );
}
