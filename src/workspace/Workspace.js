import React from 'react';
import './Workspace.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

export default function Workspace() {
    const projects = ['Foo'];

    return (
        <List>
            {projects.map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );
}
