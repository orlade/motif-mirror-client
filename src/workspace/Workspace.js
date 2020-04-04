import React, {useEffect, useState} from 'react';
import './Workspace.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

export default function Workspace({socket}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        socket.emit('load', {});
        socket.on('loaded', workspace => {
            console.debug(`Loaded ${workspace.name}:`, workspace);
            // if (path.startsWith(state.path)) {
            //     this.reflect(state);
            // }
            setProjects(workspace.projects);
        });
    }, [socket]);

    return (
        <List>
            {projects.map(({name}, index) => (
                <ListItem button key={name}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );
}
