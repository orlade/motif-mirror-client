import React, {useEffect, useState} from 'react';
import './Workspace.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Workspace({socket, file, onFileSelect}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        socket.emit('load', {});
        socket.on('loaded', workspace => {
            console.debug(`Loaded ${workspace.name}:`, workspace);
            setProjects(workspace.projects);
        });
    }, [socket]);

    return (
        <List>
            {projects.map(({name, path}, index) => (
                <ListItem button key={name} title={name} selected={path === file} onClick={e => onFileSelect(path)}>
                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );
}
