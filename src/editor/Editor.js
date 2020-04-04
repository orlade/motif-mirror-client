import React from 'react';
import './Editor.css';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Typography paragraph>
                [content]
            </Typography>
        </main>
    );
}
