import React from 'react';
import './FormatList.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import TextFieldsIcon from '@material-ui/icons/TextFields';

export default function FormatList({format, onFormatSelect}) {
    const formats = [{
        name: 'text',
        icon: <TextFieldsIcon />
    }, {
        name: 'diagram',
        icon: <ViewComfyIcon />
    }];

    return (
        <List>
            {formats.map(({name, icon}, index) => (
                <ListItem button key={name} title={name} selected={name === format} onClick={e => onFormatSelect(name)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );
}
