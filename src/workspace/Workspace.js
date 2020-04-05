import React, {useEffect, useState} from 'react';
import './Workspace.css';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

export default function Workspace({socket, file, onFileSelect}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        socket.emit('load', {});
        socket.on('loaded', workspace => {
            console.debug(`Loaded ${workspace.name}:`, workspace);
            setProjects(workspace.projects);
        });
    }, [socket]);

    const renderTree = ({name, path, children = []}) => (
        <TreeItem key={name} nodeId={name} label={name} onClick={e => onFileSelect(path)}>
            {children.map(renderTree)}
        </TreeItem>
    );

    return (
        projects.map(({name, path, items}) =>
            <TreeView
                key={name}
                defaultExpanded={[name]}
                defaultCollapseIcon={<FolderOpenIcon />}
                defaultExpandIcon={<FolderIcon />}
                defaultEndIcon={<DescriptionIcon />}
            >
                {renderTree({name, path, children: items})}
            </TreeView>
        )
    );
}
