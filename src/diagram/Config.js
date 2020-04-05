import * as go from 'gojs';

import nodeTemplate from './NodeTemplate'
import linkTemplate from './LinkTemplate'

export default function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
        'undoManager.isEnabled': true,
        'toolManager.hoverDelay': 0,
        'undoManager.maxHistoryLength': 10,
        'clickCreatingTool.archetypeNodeData': {text: 'new node', color: 'lightblue'},
        model: $(go.GraphLinksModel,
            {
                // IMPORTANT! Must be defined for GraphLinksModel merges and data sync.
                linkKeyProperty: 'key'
            }),
        layout: $(go.ForceDirectedLayout, {
            maxIterations: 200,
            defaultSpringLength: 100,
            defaultElectricalCharge: 100,
        }),
        nodeTemplate,
        linkTemplate,
    });

    return diagram;
}
