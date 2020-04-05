import React, {useState} from 'react';
import './Diagram.css';

import {ReactDiagram} from 'gojs-react';

import initDiagram from './Config'
import handleModelChange from './Change'

export default function Diagram({socket, path, content}) {
    const [diagram, setDiagram] = useState();

    const initAndSetDiagram = () => {
        const newDiagram = initDiagram();
        setDiagram(newDiagram);
        return newDiagram;
    }

    return (
        <ReactDiagram
            initDiagram={initAndSetDiagram}
            divClassName='diagram-component'
            nodeDataArray={content.nodes}
            linkDataArray={content.links}
            onModelChange={changes => handleModelChange.bind(diagram)(path, changes, socket)}
        />
    );
}
