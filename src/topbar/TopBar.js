import React from 'react';
import './TopBar.css';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

export default function TopBar() {
    const classes = useStyles();

    return (
        <AppBar
            position="static"
            className={clsx(classes.appBar)}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Mirror
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
