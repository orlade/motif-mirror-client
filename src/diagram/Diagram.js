import React from 'react';
import './Diagram.css';

import * as go from 'gojs';
import {ReactDiagram} from 'gojs-react';

import nodeTemplate from './NodeTemplate'
import linkTemplate from './LinkTemplate'

function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram =
        $(go.Diagram,
            {
                'undoManager.isEnabled': true,
                "toolManager.hoverDelay": 0,
                'undoManager.maxHistoryLength': 10,
                'clickCreatingTool.archetypeNodeData': {text: 'new node', color: 'lightblue'},
                model: $(go.GraphLinksModel,
                    {
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                    }),
                layout: $(go.ForceDirectedLayout, {
                    maxIterations: 200,
                    defaultSpringLength: 100,
                    defaultElectricalCharge: 100,
                }),
            });

    diagram.linkTemplate = linkTemplate;
    diagram.nodeTemplate = nodeTemplate;

    return diagram;
}

function handleModelChange(changes) {
    console.log('Model change:', changes);

    // TODO: Convert from change event to changes.
    // if (!evt.isTransactionFinished || !evt.object) return;
    // let shouldSave = false;
    // const txn = evt.object;
    // txn.changes.each(e => {
    //     if (e.change === go.ChangedEvent.Insert) {
    //         console.log(evt.propertyName + " added node with key: " + e.newValue.key);
    //         shouldSave = true;
    //     } else if (e.change === go.ChangedEvent.Remove) {
    //         console.log(evt.propertyName + " removed node with key: " + e.oldValue.key);
    //         shouldSave = true;
    //     } else if (e.change === go.ChangedEvent.Property && e.model) {
    //         console.log(`Changed property ${e.propertyName} on ${e.object} from ${e.oldValue} to ${e.newValue}`, e);
    //         shouldSave = true;
    //     }
    // });
    // if (shouldSave) {
    //     // this.network.saveCurrent(toGraphson(diagram));
    // }
}

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
