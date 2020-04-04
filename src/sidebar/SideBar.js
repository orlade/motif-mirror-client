import React from 'react';
import './SideBar.css';

import {makeStyles} from '@material-ui/core/styles';

import Workspace from '../workspace/Workspace.js';
import FormatList from '../formats/FormatList.js';
import MiniDrawer from '../minidrawer/MiniDrawer';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
}));

export default function SideBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MiniDrawer content={<Workspace {...props} />} />
            <MiniDrawer content={<FormatList {...props} />} />
        </div >
    );
}
