import React from 'react';
import './Diagram.css';

import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';

import initDiagram from './Config'
import handleModelChange from './Change'

export default function Diagram({content}) {
    return (
        <ReactDiagram
            initDiagram={initDiagram}
            divClassName='diagram-component'
            nodeDataArray={content.nodes}
            linkDataArray={content.links}
            onModelChange={handleModelChange}
        />
    );
}
